/*
 *   Home Controllers
 *
 *   Authors: Guido Ruiz
 *
 *   Description: This angular controller controls the main index page. At the time of writing this description, it only
 *   has a simple login interface and links to other pages once logged in.
 */
angular.module('app').controller('passwordController', passwordController);

passwordController.$inject = ['$scope', '$http', '$stateParams', '$state'];

function passwordController($scope, $http, $stateParams, $state) {
    $scope.newPassword = "";
    $scope.confirmPassword = "";

    /*$scope.resetPassword = function(){
        var obj = {
            token: $stateParams.token,
            password: $scope.newPassword,
            confirm: $scope.confirmPassword
        };

        $http.post('/auth/password/complete', obj)
            .then(function(res){
                console.log(res);
                $state.go('login');
            })
            .catch(function(err){
                console.log(err);
                $state.go('login');
            })
    }*/
}