/*
 *   Shared Controllers
 *
 *   Authors: Guido Ruiz, Daniel Rivero
 *
 *   Description: Here lies all the controllers that manage all pages. Essentially, functionality that needs to be
 *   accessed by all other controllers are here (think of it like the dad of controllers, or an abstract class, etc.)
 *   At the time of writing this, the only thing that is shared between all controllers is the admin navigation bar
 *   in which the adminNavController handles the logout feature (button) on the right side.
 */




angular.module('app').controller('loginPopUpController', loginPopUpController);
angular.module('app').controller('registerPopUpController', registerPopUpController);
angular.module('app').controller('aboutUsPopUpController', aboutUsPopUpController);
angular.module('app').controller('adPolicyPopUpController', adPolicyPopUpController);
angular.module('app').controller('privacyPopUpController', privacyPopUpController);
angular.module('app').controller('copyrightPopUpController', copyrightPopUpController);
angular.module('app').controller('limitationsPopUpController', limitationsPopUpController);
angular.module('app').controller('notYetMappedController', notYetMappedController);



loginPopUpController.$inject = ['$scope', '$window', 'AuthService', '$uibModalInstance', '$timeout'];
registerPopUpController.$inject = ['$scope', '$window', 'AuthService', '$uibModalInstance'];
aboutUsPopUpController.$inject = ['$scope', '$window', '$uibModalInstance'];
adPolicyPopUpController.$inject = ['$scope', '$window', '$uibModalInstance'];
privacyPopUpController.$inject = ['$scope', '$window', '$uibModalInstance'];
copyrightPopUpController.$inject = ['$scope', '$window', '$uibModalInstance'];
limitationsPopUpController.$inject = ['$scope', '$window', '$uibModalInstance'];
notYetMappedController.$inject = ['$scope', '$window'];



function loginPopUpController($scope, $window, AuthService, $uibModalInstance, $timeout) {
    $scope.auth = AuthService;
    $scope.isLoggedIn = false;

    $scope.alerts = [];
    $scope.addAlert = function(alert) {
        $scope.alerts.push(alert);
        $timeout(function(){ $scope.alerts.splice($scope.alerts.indexOf(alert), 1); }, 2500);
    };


    $scope.credentials = {
        username: "",
        password: ""
    };

   /* $scope.login = function()
    {
        console.log("*******************************************************");
        console.log("Attempting to login");
        $scope.auth.login($scope.credentials).then(
            success => {
                $scope.currentUser = $scope.auth.currentUser();
                $window.location.href = '/';
            },
            error => $scope.currentUser = $scope.auth.currentUser()
        );

    };*/

    $scope.login = () => AuthService.login($scope.credentials).then(
        success => {
            $scope.currentUser = AuthService.currentUser();
            $scope.userFname = AuthService.userFname;

            //console.log($scope.currentUser.get('firstName'));
            $scope.isLoggedIn = true;
            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged in!"
            });

            /*Parse.Cloud.run("getUserName", {}).then(function (e){
               $scope.userFName = e.userGivenName;
                console.log("userFname: " +  $scope.userFName);
            });*/
            //$scope.cancel();
        },
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
            $scope.isLoggedIn = false;
        }
    );

    $scope.logout = () => AuthService.logout($scope.credentials).then(
        success => {
            $scope.currentUser = {};
            $scope.userFname = "";

            $scope.isLoggedIn = false;
            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged out!"
            });
        },
        error => {
            //$scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
        }
    );

    $scope.logout = function()
    {
        $scope.auth.logout().then(
            success => {
                $scope.currentUser = $scope.auth.currentUser();
                $window.location.href = '/';
                $scope.addAlert({
                        style: "alert-success",
                        type: "Success!",
                        message: "You have successfully logged out!"
            })},
            error => {
                $scope.currentUser = $scope.auth.currentUser();
                $scope.addAlert({
                    style: "alert-danger",
                    type: "Error:",
                    message: error
                });
            }
        );
    };


    $scope.ok = function(){
        $uibModalInstance.close();
    };
    $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    };
}

function registerPopUpController($scope, $window, AuthService, $uibModalInstance) {
    $scope.auth = AuthService;

    $scope.profile = {"answers": []};
    $scope.$root.userResponse = "hello";
    $scope.credentials = {
        firstname: "",
        //lastname: "",
        username: "",
        password: "",
        email: "",
        education: "",
        gender: "",
        dateOfBirth: "",
        age: "",
        weight: "",
        height: {
            total: 0,
            feet: "",
            inches: ""
        },
        ethnicity: "",
        race: "",
        maritalstatus: ""
    };

    $scope.educationType = [
        'Some high school',
        'High school graduate or equivalent',
        'Trade or Vocational degree',
        'Some college',
        'Associate degree',
        'Bachelor\'s degree',
        'Graduate or professional degree'
    ];
    $scope.selectedEducation = "";

    $scope.genderType = [
        'Male',
        'Female',
        'Other'
    ];
    $scope.selectedGender = "";

    $scope.ethnicityType = [
        'Hispanic or Latino',
        'Not Hispanic or Latino'
    ];
    $scope.selectedEthnicity = "";

    $scope.raceType = [
        'American Indian or Alaska Native',
        'Asian',
        'Black or African Descent',
        'Native Hawaiian or Other Pacific Islander',
        'White'
    ];
    $scope.selectedRace = [];

    $scope.maritalType = [
        'Single, Not Married',
        'Married',
        'Living with partner',
        'Separated',
        'Divorced',
        'Widowed',
        'Prefer not to answer'
    ];
    $scope.selectedMaritalStatus = "";

    $scope.selectedAnwser = "";

    // -----------------------------------------------------------------------------------------------------------------
    // called when the user clicks the register button. registers the user into the server
    // -----------------------------------------------------------------------------------------------------------------

    $scope.register = function () {

        $scope.hasRegistered = false;
        $scope.credentials.answers = $scope.profile.answers;
        $scope.credentials.education = $scope.selectedEducation;
        $scope.credentials.gender = $scope.selectedGender;
        $scope.credentials.ethnicity = $scope.selectedEthnicity;
        $scope.credentials.race = $scope.selectedRace;
        $scope.credentials.maritalstatus = $scope.selectedMaritalStatus;
        $scope.credentials.programRequired = $scope.selectedAnwser;
        //console.log($scope.credentials);


        AuthService.register($scope.credentials).then(
            success => {

                $scope.hasRegistered = true;
                $scope.addAlert({
                    style: "alert-success",
                    type: "Success!",
                    message: success.message
                });

                //$scope.login();


            },
            error => {
                $scope.addAlert({
                    style: "alert-danger",
                    type: "Error:",
                    message: error.message
                });

            }
        );
//uncommented slunn002 04/23/2018
         /*$scope.auth.register($scope.credentials)
             // .then(
             //     function(res) {
             //         var data = res.data;
             //
             //         if(data.success) {
             //             $scope.addAlert({
             //                 style: "alert-success",
             //                 type: "Success!",
             //                 message: data.message
             //             });
             //         } else {
             //             $scope.addAlert({
             //                 style: "alert-danger",
             //                 type: "Error:",
             //                 message: data.message
             //             });
             //         }
             //
             //         return res;
             //     },
             //     function(err) {
             //         $scope.addAlert({
             //             style: "alert-danger",
             //             type: "Error:",
             //             message: "The servers are currently down."
             //         });
             //
             //         return err;
             //     }
             // );*/
     };
    //uncommented slunn002 04/23/2018
            $scope.credentials = {
                username: "",
                password: ""
            };

            $scope.login = function()
            {
                console.log("Attempting to login");
                $scope.auth.login($scope.credentials).then(
                    success => {
                        $scope.currentUser = AuthService.currentUser();
                        $scope.isLoggedIn = true;
                        $scope.addAlert({
                            style: "alert-success",
                            type: "Success!",
                            message: "You have successfully logged in!"
                        });
                    },
                    error => {
                        $scope.currentUser = AuthService.currentUser();
                        $scope.addAlert({
                            style: "alert-danger",
                            type: "Error:",
                            message: error
                        });
                        $scope.isLoggedIn = false;
                    }
                );
                //$window.location.href = '/';
            };

            $scope.logout = function()
            {
                $scope.auth.logout();
                $window.location.href = '/';
            };

         $scope.close = function () {
            $modalInstance.close();
         };

        $scope.ok = function () {
            $uibModalInstance.close();
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

}

function aboutUsPopUpController($scope, $window, $uibModalInstance) {

    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

function adPolicyPopUpController($scope, $window, $uibModalInstance) {

    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}


function privacyPopUpController($scope, $window, $uibModalInstance) {

    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

function copyrightPopUpController($scope, $window, $uibModalInstance) {

    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

function limitationsPopUpController($scope, $window, $uibModalInstance) {

    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

function notYetMappedController($scope, $window) {


        $scope.redirect = function (location) {
            // store in browser cache the location
            localStorageService.set("redirect-page", location);
            $window.location.reload();
        };
    }
