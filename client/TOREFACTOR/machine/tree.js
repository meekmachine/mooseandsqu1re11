angular.module('app').controller('treeViewController', treeViewController);

treeViewController.$inject = ['$scope', '$http', 'InterventionService', 'FormService', 'ElementService'];

function treeViewController($scope, $http, InterventionService, FormService, ElementService) {
    $scope.showTree = false;
    $scope.roleList = [];
    $scope.buttonText = "";
    $scope.interventionSrv = InterventionService;
    $scope.formSrv = FormService;
    $scope.elSrv = ElementService;

    /*console.log("starting the tree view controller");
    let interventions = $scope.interventionSrv.getAllInterventions();

    for(var i = 0; i < interventions.length; i++){

        $scope.roleList.push({
            roleName: interventions[i].name,
            roleId: interventions[i].id,
            collapsed: true,
            children: []
        });

        var tmpChildren = $scope.formSrv.getFormsByIntervention(interventions[i]);

        for(var j = 0; j < tmpChildren.length; j++){
            $scope.roleList[i].children.push({
                roleName:tmpChildren[j].name,
                roleId: tmpChildren[j].id,
                collapsed: true,
                children: []
            });
        }

        for(var k = 0; $scope.roleList[i].children.length; k++){
            var elTmpChildren = $scope.elSrv.getElementsByForm($scope.roleList[i].children[k]);

            for(var l = 0; elTmpChildren.length; l++){
                $scope.roleList[i].children[k].push({
                    roleName: $scope.getElementDescription(elTmpChildren[l]),
                    roleId: elTmpChildren[l].id,
                    roleType: elTmpChildren[l].type,
                    roleOrder: elTmpChildren[l].order,
                    collapsed: true,
                    children: []
                });
            }

        }


    }*/

    console.log($scope.roleList);

    /*$http.get('/api/interventions').then(
        function(success) {
            for(var i = 0; i < success.data.length; ++i){
                $scope.roleList.push({
                    roleName: success.data[i].name,
                    roleId: success.data[i]._id,
                    collapsed: true,
                    children: []
                });
            }
        },
        function (err) {

        }
    );*/

   /* $http.get('/api/forms').then(
        function(success){
            //TODO Design faster algorithm
            for(var i = 0; i < $scope.roleList.length; ++i) {
                for(var j = 0; j < success.data.length; ++j) {
                    if( $scope.roleList[i].roleId == success.data[j].intervention_id){
                        $scope.roleList[i].children.push({
                            roleName:success.data[j].name,
                            roleId: success.data[j]._id,
                            collapsed: true,
                            children: []
                        });
                    }
                }
            }
        },
        function(err){}
    );*/
   /*

     $http.get('/api/elements').then(
        function(success){
            //TODO Design faster algorithm
            for(var i = 0; i < $scope.roleList.length; ++i) {
                for(var j = 0; j < $scope.roleList[i].children.length; ++j) {
                    for(var k = 0; k < success.data.length; ++k) {
                        if( $scope.roleList[i].children[j].roleId == success.data[k].form_id){
                            $scope.roleList[i].children[j].children.push({
                                roleName: $scope.getElementDescription(success.data[k]),
                                roleId: success.data[k]._id,
                                roleType: success.data[k].type,
                                roleOrder: success.data[k].order,
                                collapsed: true,
                                children: []
                            });
                        }
                    }
                }
            }
        },
        function (err) {

        }
    );
*/

    $scope.getElementDescription = function(dataElement){
        if(dataElement.type == "QuestionAnswer") return dataElement.order+": "+dataElement.phrase;
        else if (dataElement.type == "QuestionAnswer-Checkbox") return dataElement.order+": "+dataElement.phrase;
        else if (dataElement.type == "textArea") return dataElement.order+": "+dataElement.phrase;
        else if (dataElement.type == "feedback") return dataElement.order+": "+dataElement.phrase;
        else if (dataElement.type == "feedbackList") return dataElement.order+": "+dataElement.phrase[0].feedback_text;

        return "Unknown data element";
    };
}