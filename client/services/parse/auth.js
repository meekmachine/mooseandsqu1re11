angular.module('app').service('AuthService', AuthService);

AuthService.$inject = ['$q'];

function AuthService($q) {

    //this.isLoggedIn = false;
    this.tempUser = false;

    this.currentUser = Parse.User.current();

    this.register = credentials => {
        let deferred = $q.defer();

        var user = new Parse.User();

        user.set("username", credentials.username);
        user.set("password", credentials.password);
        user.set("email", credentials.email);
        user.set("firstName", credentials.firstname);
        //user.set("lastName", credentials.lastname);
        user.set("ethnicity", credentials.ethnicity);
        user.set("education", credentials.education);
        user.set("gender", credentials.gender);
        user.set("race", credentials.race);
        user.set("dateOfBirth", credentials.dateOfBirth);
        user.set("age", credentials.age);
        user.set("maritalStatus", credentials.maritalstatus);
        user.set("weight", credentials.weight);
        user.set("heightTotal", credentials.height.total);
        user.set("programRequired", credentials.answers);
        user.set("tempUser", credentials.tempUser);



        user.signUp(null).then(
            success => deferred.resolve(success),
            error => deferred.reject(error)
        );

        return deferred.then(
            success => this.currentUser = Parse.User.current(),
            error => ErrorService.handleParseError(error)
        );
    };

    this.logout = () => {
        let deferred = $q.defer();
        Parse.User.logOut().then(
            success => {
                this.isLoggedIn = false;
                /*console.log(success);*/
                $rootScope.currentUser = null;
                $rootScope.$apply();
            },
            error => {
                ErrorService.handleParseError(error);
                $rootScope.$apply();
            }
        );
    };

    this.login = credentials => {
        Parse.User.logIn(credentials.username, credentials.password).then(
            success => {
                /*console.log(success);*/
                this.isLoggedIn = true;
                $rootScope.currentUser = Parse.User.current();
                $rootScope.$apply();
            },
            error => {
                ErrorService.handleParseError(error);
                $rootScope.$apply();
            }
        );
    };



    this.getTempUserStatus = function (){
        return this.tempUser;
    };
}