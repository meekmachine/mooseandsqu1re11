angular.module('app').controller('scoreController', scoreController);

scoreController.$inject = ['$scope', 'ScoreService', 'AuthService', 'InterventionService', 'FormService', '$state', 'ElementService'];

function scoreController($scope, ScoreService, AuthService, InterventionService, FormService, $state, ElementService) {




    $scope.currentUser = AuthService.currentUser();

    $scope.interventionSelected = null;
    $scope.scoredFormSelected = null;



    $scope.calculateScoreByFormObj = (form) => {

        if(!$scope.currentUser) return;

        $scope.scoredFormSelected = form;

        let formID = $scope.scoredFormSelected.object.id;

        ScoreService.calculateFormScore(formID).then(
            score => {
                console.log(score);
                $scope.score = score;
            },
            error => {
                console.log(error.message);
            }
        )
    };

    $scope.scoredInterventions = [];
    $scope.scoredForms = [];
    $scope.elementsOfScoredForm = [];

    // -- helper functions that refresh arrays above
    function getScoredForms() {
        if(!$scope.interventionSelected) return;

        FormService.getFormsByIntervention($scope.interventionSelected.object).then(
            objects => $scope.scoredForms = objects,
            error => {}
        );
    }
    function getScoredInterventions() {
        InterventionService.getAllInterventions().then(
            objects => $scope.scoredInterventions = objects,
            error => {}
        );
    }
    function getScoredElements() {
        if(!$scope.scoredFormSelected) return;

        // code goes here...
        ElementService.getElementsByForm($scope.scoredFormSelected.object).then(
            objects => {
                $scope.elementsOfScoredForm = objects;
            },
            error => {}
        );
    }

    $scope.selectScoredIntervention = function(intervention) {
        $scope.interventionSelected = intervention;
        getScoredForms();
        $state.go('feedback.form');
    };



    function init() {
        getScoredInterventions();
    }

    init();
}