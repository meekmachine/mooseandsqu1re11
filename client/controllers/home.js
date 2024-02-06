angular.module('app').controller('homeController', homeController);

homeController.$inject = ['$scope', 'AuthService', 'UserService', 'AdminService'];

function homeController($scope, AuthService, UserService, AdminService) {

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



    $scope.currentUser = AuthService.currentUser();

    $scope.mode = 'login';

    $scope.credentials = {
        username: '',
        password: ''
    };


    $scope.changeMode = mode => $scope.mode = mode;

    $scope.login = () => AuthService.login($scope.credentials).then(
        success => $scope.currentUser = AuthService.currentUser(),
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.Error(error.message);
        }
    );

    $scope.registration = () => AuthService.registration($scope.credentials).then(
        success => {
            $scope.currentUser = AuthService.currentUser();
            $scope.mode = 'login';
        },
        error => $scope.currentUser = AuthService.currentUser()
    );

    $scope.logout = () => AuthService.logout().then(
        success => $scope.currentUser = AuthService.currentUser(),
        error => $scope.currentUser = AuthService.currentUser()
    );

    $scope.forgot = () => {};

    $scope.getAvailableUsers = () => {
        //set mode to addAdminUser
        $scope.mode = 'addAdminUser';
        //populate list of all active users
        //todo: do not add the users that are already administrators
        UserService.getActiveUsers().then(
            objects => $scope.activeUsers = objects,
            error => {}
        );

    };

    $scope.selectUserForAdmin = (userName) => {
        //set the username of the user to add as administrator
        $scope.newAdmin = userName;
    };

    $scope.addUserToAdminGroup = () => {

        //user to be added to administrator role
        let userID = $scope.newAdmin;
        //run cloud code to add user to as administrator via AdminService
        AdminService.addUserToAdminGroup(userID).then(
            success => $scope.Success('User added successfully to Administrator group.'),
            error => $scope.Error('Error: user was not added to Administrator group.')
        );


    }

    // function validateEmail(email) {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    // }
    //
    // $scope.forgot = function() {
    //     if(validateEmail($scope.requestEmail)) {
    //         $http.post('/auth/password/request', { email: $scope.requestEmail })
    //             .then((res) => { console.log(res); })
    //             .catch((err) => { console.log(err); });
    //     }
    // }
}