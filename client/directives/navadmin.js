/*
 *   Authors: Guido Ruiz, Daniel Rivero
 *
 *   Description: A directive is a custom HTML tag, similar to <html>, <body>, <a>, etc, with angular, you can create
 *   your own custom HTML tag that when read puts within a controller, actual HTML, the works. For example, instead of
 *   copying the controller for the navigation bar across all pages, we simply use the tag <navadmin></navadmin>, which
 *   in turn will inject within it the template and the adminNavController, in charge of that particular section. In
 *   other words, a directive is a packaged controller and html template that can be written as a tag anywhere.
 */

angular.module('app').directive('navadmin', adminNavDirective);

function adminNavDirective() {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/navadmin.view.html',
        controller: 'adminNavController'
    };
}

angular.module('app').controller('adminNavController', adminNavController);

adminNavController.$inject = ['$scope', '$window'];

function adminNavController($scope, $window) {
    $scope.auth = AuthService;

    console.log($scope.auth.currentUser);

    $scope.logout = function()
    {
        Parse.User.logOut().then(
            success => {
                console.log(success);
                $scope.currentUser = null;
                $scope.$apply();
            },
            error => {
                ErrorService.handleParseError(error);
                $scope.$apply();
            }
        );
    }

}