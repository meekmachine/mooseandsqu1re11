angular.module('app').controller('newSurveyController', newSurveyController);

newSurveyController.$inject = ['$scope', '$state', 'InterventionService', 'FormService', 'ElementService'];

function newSurveyController($scope, $state, InterventionService, FormService, ElementService) {
    $scope.interventions = [];
    $scope.forms = [];
    $scope.elements = [];

    $scope.totElements = 0;

    //following handles the Success and Error messages
    $scope.Success = message => {
        $scope.alert = {
            alertClass: "alert-success",
            alertType: "Success!",
            alertText: message
        };
    };
    $scope.Error = message => {
        $scope.alert = {
            alertClass: "alert-danger",
            alertType: "Error!",
            alertText: message
        };
    };

    // -- helper functions that refresh arrays above
    function refreshElements() {
        if(!$scope.formSelected) return;

        // code goes here...
        ElementService.getElementsByForm($scope.formSelected.object).then(
            objects => {
                $scope.elements = objects;

                //automatically reorder if deletion of an element has occurred and reordering of elements
                //have not taken place
                for (let i = 0; i<$scope.elements.length; i++){
                    if(i != $scope.elements[i].order){
                        $scope.elements[i].order = i;
                        $scope.elements[i].save();
                    }
                }

                //update the number of total elements belonging to current form (used for reording elements in
                //the editor view
                $scope.totElements = $scope.elements.length-1;
            },
            error => {}
        );
    }
    function refreshForms() {
        if(!$scope.interventionSelected) return;

        FormService.getFormsByIntervention($scope.interventionSelected.object).then(
            objects => $scope.forms = objects,
            error => {}
        );
    }
    function refreshInterventions() {
        InterventionService.getAllInterventions().then(
            objects => $scope.interventions = objects,
            error => {}
        );
    }

    // this function is responsible for updating the order of all elements if the user has decided to change
    // the order of one of the elements
    function reorderElements(elem, prevOrder, newOrder){
        if (prevOrder < newOrder){
            console.log("previous is less than new");
            for (let i = prevOrder + 1; i <= newOrder; i++){
                elem[i].order -= 1;
                elem[i].save();
            }
        }
        else if (prevOrder > newOrder){
            console.log("previous is greater than new");
            for (let i = newOrder; i < prevOrder; i++){
                elem[i].order += 1;
                elem[i].save();
            }
        }
        return elem;
    }


    // -- select an intervention, form, or element

    $scope.interventionSelected = null;
    $scope.formSelected = null;
    $scope.elementSelected = null;
    $scope.elementPrevOrder = null;
    //$scope.workingElement = new Object();
    $scope.workingElement = {
        phrase: [],
        content: []
    };

    $scope.editorMode = {};


    $scope.selectIntervention = function(intervention) {
        $scope.interventionSelected = intervention;
        refreshForms();
        $state.go('survey.form');
    };
    $scope.selectForm = function(form) {
        $scope.formSelected = form;
        refreshElements();
        $state.go('survey.element');
    };
    $scope.selectElement = function(element) {
        // code goes here...
        console.log("EditorMode!");
        $scope.workingElement = {
            phrase: [],
            content: []
        };

        $scope.elementSelected = element;

        console.log(element);

        $scope.elementSelected.phrase.forEach((p, index) => {
            // console.log(index);
            $scope.workingElement.phrase.push(
                {
                    text: p
                }
            );
        });
        $scope.elementSelected.content.forEach((c, index) => {
            $scope.workingElement.content.push(
                {
                    text: c
                }
            );
        });

        $scope.elementPrevOrder = element.order;

        let elType = $scope.elementSelected.type;
        console.log(elType);
        //the following switch case statement determines the fields that are needed to be displayed
        //in the element editor view based on the type of element that is currently selected
        switch(elType) {
            case "QuestionAnswer":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = true;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = true;
                break;
            case "QuestionAnswer-Checkbox":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = true;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = true;
                break;
            case "textArea":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = false;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = true;
                break;
            case "feedback":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = false;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            case "feedbackList":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = true;
                $scope.editorMode.content = false;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            case "Content":
                $scope.editorMode.phrase = false;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = false;
                $scope.editorMode.html = true;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            case "TabularInput":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = false;
                $scope.editorMode.html = false;
                $scope.editorMode.table = true;
                $scope.editorMode.moreOptions = true;
                break;
            case "MenuElement":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = true;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            case "RangeSliderElement":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = true;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = true;
                break;
            case "LoginRegisterElement":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = false;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            case "MenuWithCompletion":
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = false;
                $scope.editorMode.content = true;
                $scope.editorMode.html = false;
                $scope.editorMode.table = false;
                $scope.editorMode.moreOptions = false;
                break;
            default:
                $scope.editorMode.phrase = true;
                $scope.editorMode.morePhrases = true;
                $scope.editorMode.content = true;
                $scope.editorMode.html = true;
                $scope.editorMode.table = true;
                $scope.editorMode.moreOptions = true;
        }
        $state.go('survey.editElement');
    };


    // -- create objects in the server
    $scope.newIntervention = {};
    $scope.newForm = {};
    $scope.newElement = {};
    $scope.numRows = -1;
    $scope.numCols = -1;
    $scope.xHeaders = false;
    $scope.yHeaders = false;

    $scope.createIntervention = function() {
        if($scope.newIntervention.name){
            InterventionService.createIntervention($scope.newIntervention).then(
                objects => refreshInterventions(),
                error => {}
            );
            $scope.Success("New intervention has been created successfully, and is now at the bottom of the intervention list.");
        }else{
            $scope.Error("To create a new intervention you must first provide the name of the intervention to be created.");
        }

    };
    $scope.createForm = function() {
        if($scope.newForm.name) {
            FormService.createForm($scope.newForm, $scope.interventionSelected.object).then(
                objects => refreshForms(),
                error => {}
            );
            $scope.Success("New form has been created successfully, and is now at the bottom of the form list.")
        }else{
            $scope.Error("To create a new form you must first provide the name of the form to be created.");
        }
    };
    $scope.createElement = function(elementType) {
        // code goes here...
        $scope.newElement.type = elementType;
        $scope.newElement.order = $scope.elements.length;

        ElementService.createElement($scope.newElement, $scope.formSelected.object).then(
            objects => refreshElements(),
            error => {}
        );

        let msg = `The ${elementType} element has been added to the ${$scope.formSelected.name} form successfully, and can be viewed at the bottom of the list of available elements.`;
        $scope.Success(msg);
    };

    /* --- following code is specific to creating a table that will allow user to input data ---  */
    $scope.createTabularInputElement = function(rows, cols, xHead, yHead) {

        //set the type of element and the order in which the element displays
        $scope.newElement.type = "TabularInput";
        $scope.newElement.order = $scope.elements.length;

        /*following is a temp array that is used to build the structure of the table. The
        //table structure is an an array of objects and is explained below
        //  [
        //    {
        //        row: is an integer that represents index of the row
        //        content: is an array of objects that holds the content of the table
        //    },
        //    {
        //      ...
        //    },
        //    ....
        //  ]
        //The content object defined below:
        //  [
        //      { value: a string that is to be the label of the row or col, if not a label this is blank for user input
        //        isHeader:  a boolean that is true if the value represents a header false if left for user input
        //      },
        //    {
        //      ...
        //    },
        //    ....
        //  ]
        //
        */
        let structure = new Array();
        let header = false;
        //build table based on the number of rows and cols the user has indicated in the prompt in the survey editor
        //start by traversing the rows
        for(var i = 0; i < rows; i++){
            //build the content array for table structure
            let content = new Array();
            //traverse the columns within that row
            for(var j = 0; j < cols; j++){
                //Check if the current position is a header or not, indicated by the user via survey editor
                if((xHead && i == 0) || (yHead && j == 0)){
                    header = true;
                }
                content[j] = {
                    value: "empty",
                    isHeader: header
                };
                header = false;
            }
            //push this row to the structure
            structure.push({
                row: i,
                content: content
            });
        }
        //set the content attribute of the element to the newly build table structure
        $scope.newElement.content = structure;

        //use the element service to add this new element to the dataBase
        ElementService.createElement($scope.newElement, $scope.formSelected.object).then(
            objects => refreshElements(),
            error => {}
        );

        let msg = 'The ${$scope.newElement.type} element has been added to the ${$scope.formSelected.name} form successfully, and can be viewed at the bottom of the list of available elements.';
        $scope.Success(msg);


    };


    //update objects that were edited to reflect in the database
    $scope.renameIntervention = function(interven){
        interven.save().then(
            success => {
                $scope.Success("The intervention has been renamed successfully");
            },
            error => $scope.Error("There was an error contacting the server. Please try again.")
        );

    };
    $scope.renameForm = function(form){
        form.save().then(
            success => {
                $scope.Success("The form has been renamed successfully");
            },
            error => $scope.Error("There was an error contacting the server. Please try again.")
        );

    };

    $scope.updateElement = function() {

        if($scope.editorMode.moreOptions){
            $scope.elementSelected.isRecorded = ('true' == $scope.elementSelected.isRecorded);
            $scope.elementSelected.displayBackBtn = ('true' == $scope.elementSelected.displayBackBtn);
            $scope.elementSelected.displayProgress = ('true' == $scope.elementSelected.displayProgress);
        }

        let arr = [];

        $scope.workingElement.phrase.forEach((p, index) => {
            arr.push(p.text);
        });

        $scope.elementSelected.phrase = arr;

        arr = [];

        if(!($scope.elementSelected.type === "TabularInput")){
            $scope.workingElement.content.forEach((c, index) => {
                arr.push(c.text);
            });

            $scope.elementSelected.content = arr;
        }


        console.log("Saving element: ");
        console.log($scope.elementSelected);

        if($scope.elementSelected != $scope.elementPrevOrder){
            $scope.elements = reorderElements($scope.elements, $scope.elementPrevOrder, $scope.elementSelected.order);
        }

        $scope.elementSelected.save().then(
            success => {
                $scope.Success("The element has been saved successfully");
                refreshElements();
            },
            error => $scope.Error("There was an error contacting the server. Please try again.")
        );
    };

    //Code for the element editor in the survey editor

    //the following allows multiple inputs for phrase and content sections of element editor
    //the function addInput() appends a new input element as the child of the div provided
    //via function arguments
    $scope.addInput = function(attr)
    {
        let defInput = "";

        if(attr === "content"){
            $scope.elementSelected.content.push(defInput);
            $scope.workingElement.content.push({
                text: ""
            });
        }
        if(attr === "phrase"){
            $scope.elementSelected.phrase.push(defInput);
            $scope.workingElement.phrase.push({
                text: ""
            });
        }
    };

    $scope.deleteInput = function(attr, index)
    {

        /*if (attr === "content") {
         $scope.elementSelected.content.splice(index, 1);
         for(let i = 0; i < $scope.elementSelected.content.length; i++){
         $scope.elementSelected.content[i].order = i;
         }
         }*/

        if (index > -1) {
            if (attr === "content") {
                $scope.elementSelected.content.splice(index, 1);
                $scope.workingElement.content.splice(index, 1);
            }
            if (attr === "phrase") {
                $scope.elementSelected.phrase.splice(index, 1);
                $scope.workingElement.phrase.splice(index, 1);
            }
        }

        $scope.updateElement();
    };

    $scope.deleteElement = function (element){
        $scope.elementSelected = element;

        ElementService.deleteElement($scope.elementSelected, $scope.formSelected.object).then(

            success => {
                $scope.Success("The element has been deleted successfully");
                refreshElements();
            },
            error => $scope.Error("There was an error contacting the server. Please try again.")
        );
    };

    //used to navigate back to state determined by the state attribute
    $scope.goBack = function (state) {
        refreshElements();
        refreshForms();
        refreshElements();
        $state.go(state);
    };

    //the following function is used to determine if the field is of the current element will be displayed via
    //the element preview, this is determined by the type of element and the current field
    $scope.displayElementField = function (elementType, field){
        if(field === "phrase"){
            if(elementType === 'QuestionAnswer' || elementType === 'MenuWithCompletion' || elementType === 'RangeSliderElement' || elementType === 'MenuElement' || elementType === 'feedback' || elementType === 'feedbackList' || elementType === 'QuestionAnswer-Checkbox' || elementType === 'QuestionAnswer' || elementType === 'textArea' || elementType === 'LoginRegisterElement'){
                return true;
            }else{
                return false;
            }
        }else if (field === "content"){
            if(elementType === 'QuestionAnswer' || elementType === 'MenuWithCompletion' || elementType === 'QuestionAnswer-Checkbox' || elementType === 'MenuElement' || elementType === 'RangeSliderElement'){
                return true;
            }else{
                return false;
            }

        }else if (field === "html"){
            if(elementType === 'Content'){
                return true;
            }else{
                return false;
            }

        }else{
            return true;
        }
    };


    $scope.elReorder = false;

    //the following function updates the order of the elements when there has been a change in the order. it sets
    //elReorder to true indicating that the order of the elements have changed and needs to be saved
    $scope.stop = function (e, ui){
        for(let i = 0; i<$scope.elements.length; i++){
            $scope.elements[i].order = i;
        }
        if(!$scope.elReorder){
            $scope.elReorder = true;
        }
    };

    $scope.updateElementsOrder = function(){

        $scope.elements.forEach((element, index) => {
            element.save().then(
                success => {
                    if(index === $scope.elements.length - 1){
                        $scope.Success("The elements have been successfully reordered.");
                        $scope.elReorder = false;
                    }
                },
                error => {
                    $scope.Error("There was an error contacting the server. Please try again.");
                    $scope.elReorder = false;
                }
            );
        });
    };

    refreshInterventions();
}