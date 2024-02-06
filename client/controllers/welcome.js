angular.module('app').controller('welcomeController', welcomeController);

welcomeController.$inject = ['$scope', '$window','$uibModal', '$state' , 'localStorageService', 'AuthService', '$timeout','ProgressService', 'UserService'];

function welcomeController($scope, $window, $uibModal, $state, localStorageService, AuthService, $timeout, ProgressService, UserService) {
    $scope.usrSrvc = UserService;

    const NEW_USER_PROGRESS = {
        user: {},
        GTNSGT: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        audit: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        howMuchHowOften: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        familyHistory: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        myDrinking: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        otherDrugs: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        ARP: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        depression: [{
            "formId": "",
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        MAST: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }],
        dependence: [{
            "timestamp": "",
            "responsesPtr": [],
            "percentageComplete": "0",
            "currentElement": ""
        }]
    };
    $scope.currentUser = Parse.User.current();
    $scope.tempUser = false;
    $scope.alerts = [];
    const DEFAULTCREDENTIALS = {
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
        race: [],
        maritalstatus: "",
        confirmpassword: "",
        confirmemail:"",
        tempUser: false
    };

    $scope.credentials = DEFAULTCREDENTIALS;
    $scope.progressSrv = ProgressService;
    $scope.newUserProgress = NEW_USER_PROGRESS;
    $scope.currentUserProgress = {};


    //helper function for generating random strings
    function genString() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    //helper function for generating age from birthday
    $scope.getTempAge = function(){
        var birthday = $scope.credentials.dateOfBirth;
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        var age = Math.floor( age );
        return age;
    };

    $scope.tempUserStatus = function (){
        //allow user to log in if logged in as temp or not logged in at all

        if(!$scope.currentUser.object.attributes.tempUser && $scope.currentUser !=null){
            //the user logged in is not a temp  User => let user log out
            return false;
        }else{
            return true;
        }
    };

    $scope.createTempAccount = function (){

        //ehenl001 16 July 2018
        //flag this account is temp user account
        $scope.credentials.tempUser = true;
        $scope.tempUser =  $scope.credentials.tempUser;

        //create temp string as id
        $scope.credentials.username = genString();

        //create temp string as password
        $scope.credentials.password = genString();

        //give the temp user the fName guest
        $scope.credentials.firstname = "Guest";

        //give bogus email for temp user
        $scope.credentials.email = $scope.credentials.username + "@g.c";

        //create temp education
        $scope.credentials.education = "Some college";

        //create temp gender
        $scope.credentials.gender = "Male";

        //create temp DOB using angular ng date format (yyyy-MM-dd)
        $scope.credentials.dateOfBirth= new Date();

        //generate age function for temp user
        $scope.credentials.age = 25;

        //create weight for temp user
        $scope.credentials.weight = "120";

        //create height for temp user
        $scope.credentials.height.total = 22;

        //create ethnicity for temp user
        $scope.credentials.ethnicity= "Hispanic or Latino";

        //create race for temp user
        $scope.credentials.race= ["Asian"];

        //create marital status for temp user
        $scope.credentials.maritalstatus= "Divorced";

        //create temp user in the database via Auth srvc registration function
        AuthService.register($scope.credentials).then(
            success => {
                $scope.currentUser = AuthService.currentUser();
                $scope.userGivenName = $scope.currentUser.object.attributes.firstName;
                $scope.credentials.username = "";
                $scope.credentials.password = "";

                //create new progress object for the new user and set it to the currentUserProgress
                $scope.createNewProgressObject($scope.currentUser.object);


            },
            error => {
                $scope.currentUser = AuthService.currentUser();
                console.log(error);
                $scope.addAlert({
                    style: "alert-danger",
                    type: "Error:",
                    message: error
                });
            });
    };

    $scope.createNewProgressObject = (userObj) =>{

        /*console.log("the user object___________:");
        console.log(userObj);*/
        $scope.progressSrv.createProgress(userObj, $scope.newUserProgress).then(
            progress => {
                $scope.currentUserProgress = progress;
                //console.log($scope.currentUserProgress);
            },
            error => {
                console.log("unsuccessful adding new progress");
            }
        );
    };


    function init() {

        AuthService.logout().then(
            success => {
                $scope.currentUser = AuthService.currentUser();

                // get from cache the variable
                var variable = localStorageService.get("redirect-page");
                localStorageService.remove("redirect-page");

                switch(variable) {
                    case "home":
                        $state.go('home');
                        break;
                    default: break; //do nothing
                }

                //$scope.tempUser = AuthService.getTempUserStatus();

                //check if current user logged in
                if(AuthService.currentUser()){
                    $scope.currentUser = AuthService.currentUser();
                    $scope.userGivenName = $scope.currentUser.object.attributes.firstName;
                    if(AuthService.currentUser().object.attributes.tempUser){

                       /* console.log("user is a temp!");
                        console.log($scope.currentUser.object.attributes.username);
                        console.log($scope.currentUser.object.attributes.tempUser);
*/
                        $scope.createTempAccount();

                    }

                }else{
                    $scope.createTempAccount();
                }
            },
            error => $scope.currentUser = AuthService.currentUser()
        );
    }


    init();




    $scope.addAlert = function(alert) {
        $scope.alerts.push(alert);
        $timeout(function(){ $scope.alerts.splice($scope.alerts.indexOf(alert), 1); }, 2500);
    };


    //for logging in
    $scope.login = () => AuthService.login($scope.credentials).then(
        success => {
            $scope.currentUser = AuthService.currentUser();

            $scope.userGivenName = success.attributes.firstname;
            $scope.tempUser = success.attributes.tempUser;
          /*  console.log("logging in from welcome.js");
            console.log($scope.tempUser);*/


            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged in!"
            });

            $('#loginModal').modal('hide');


            //$state.go('counseling');

        },
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
        }
    );

    //for logging out
    $scope.logout = () => AuthService.logout().then(
        success => {
            $scope.currentUser = AuthService.currentUser();
            $scope.userGivenName = "";
            $scope.tempUser = false;

            $scope.addAlert({
                style: "alert-success",
                type: "Success!",
                message: "You have successfully logged out."
            });
            //$state.go('/');
            },
        error => {
            $scope.currentUser = AuthService.currentUser();
            $scope.addAlert({
                style: "alert-danger",
                type: "Error:",
                message: error
            });
            $scope.isLoggedIn = true;
        }
    );

    //function that helps validate email
    function checkEmail(email)
    {
        //find user by email
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
        {
            window.alert("Failed in the forgot pw before email");
            return false;
        }
        return true;

    }

    //new function reset user's password
    $scope.forgotPassword = () => {
        //console.log("going to see if email in db");
        var emailIsValid = checkEmail($scope.credentials.fp_email);

        if (!emailIsValid)
        {
            window.alert("Not a valid e-mail address");
            return false;
        }

        $scope.usrSrvc.validateUserbyEmail($scope.credentials.fp_email).then(
            success => {
                Parse.User.requestPasswordReset($scope.credentials.fp_email, {
                    success:function() {
                        window.alert("Password reset link has been sent to "+ $scope.credentials.fp_email);
                        return true;
                    },
                    error:function(error) {
                        window.alert(error.message);
                        return false;
                    }
                });
            },
            error => {return false;}
        );


    };

    $scope.openLogin = function () {
        //console.log('opening log in pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/login.popup.view.html',
            controller: 'loginPopUpController',
            windowClass: 'center-login-popup',
            scope: $scope,
        });
    };

    $scope.openAbout = function () {
        //console.log('opening About pop up');
        var modalInstance = $uibModal.open({
            templateUrl: 'views/partials/popup/aboutUs.popup.view.html',
            windowClass: 'center-aboutUs-popup',
            controller: 'aboutUsPopUpController',
            scope: $scope
        });
    };

    $scope.redirect = function(location) {
        // store in browser cache the location
        localStorageService.set("redirect-page", location);
        $window.location.reload();
    };
}