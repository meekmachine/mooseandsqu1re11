angular.module('app').factory('User', User);
angular.module('app').service('UserService', UserService);
angular.module('app').service('AuthService', AuthService);
angular.module('app').service('AdminService', AdminService);

User.$inject = ['$q'];
UserService.$inject = ['$q', 'User'];
AuthService.$inject = ['$q', 'User'];
AdminService.$inject = ['$q', 'User'];

function User($q) {
    User = function(object) {
        this.object = object;
        this.responses = object.get('responses');

        this.save = () => {
            let deferred = $q.defer();

            object.set('responses', this.responses);

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
    };

    return User;
}
function UserService($q, User) {
    //Todo: need to see if the current user is admin first

    //query database for all active users
    this.getActiveUsers = () => {
        let deferred = $q.defer();
        let ActiveUser = Parse.Object.extend("User");
        let queryActiveUsrs = new Parse.Query(ActiveUser);

        //find active users and only return user name
        queryActiveUsrs.find(
            response => {
                let allUsers = [];
                response.forEach(res => allUsers.push(res.get('username')));
                deferred.resolve(allUsers)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;

    };


    this.validateUserbyEmail = (usrEmail) => {
        let deferred = $q.defer();
        let FindUser = Parse.Object.extend("User");
        let queryUsr = new Parse.Query(FindUser);
        let userIsValid = false;

        queryUsr.equalTo('email', usrEmail);
        queryUsr.equalTo('emailVerified', true);

        queryUsr.first(
            response => {
                userIsValid = true;
                deferred.resolve(userIsValid);
            },
            error => {
                userIsValid = false;
                deferred.resolve(userIsValid);
            }
        );

        return deferred.promise;
    };


    //query database and get user with usrname matching usrID
    this.getUsrByUsrName = (usrID) => {
        let deferred = $q.defer();
        let FindUser = Parse.Object.extend("User");
        let queryUsrs = new Parse.Query(FindUser);

        //find active users and only return user name
        queryUsrs.equalTo("username", usrID);
        queryUsrs.find(
            usr => {
                let newAdmin = usr[0];
                deferred.resolve(newAdmin);
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.updatePW = (enteredEmail, enteredDOB) => {
        let deferred = $q.defer();
        let ActiveUser = Parse.Object.extend("User");
        let queryActiveUsrs = new Parse.Query(ActiveUser);

        /*console.log(enteredEmail);
        console.log(enteredDOB);*/
        queryActiveUsrs.equalTo('email', enteredEmail);
        queryActiveUsrs.equalTo('dateOfBirth', enteredDOB);

        queryActiveUsrs.first(
            res => {
                console.log("found user in userSrvc.updatePw");
                let fpUser = res;
                deferred.resolve(fpUser);
            },
            error => deferred.reject(error)
        );
        return deferred.promise;
    };

    this.changePW = (npw, usr) => {
        let deferred = $q.defer();
        /*let ActiveUser = Parse.Object.extend("User");
        let queryActiveUsrs = new Parse.Query(ActiveUser);*/

        // console.log("start changePW");
        // console.log(usr.id);

        //queryActiveUsrs.equalTo('objectId', usr.id);

        /*queryActiveUsrs.first(
            res => {
                console.log("in User Service.............");
                console.log(res);
               res.set("password", newPW);
               res.save(null, {useMasterKey: true}).then(
                   success => {console.log("user credentials updated in DB")},
                   error => {
                       console.log(error);
                   }
               );
            },
            error => deferred.reject(error)
        );*/
        //Parse.Cloud.run('addResponse', { elemID: elemID, answer: [answer] });
        Parse.Cloud.run('updatePW', {updateUsr: usr.id, newPW: npw});

        return deferred.promise;
    };
}
function AuthService($q) {
    this.register = credentials => {
        let deferred = $q.defer();

        let user = new Parse.User();

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

        user.set("responses", credentials.responses || []);

        user.signUp(null).then(
            success => deferred.resolve(success),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.logout = () => {
        let deferred = $q.defer();

        Parse.User.logOut().then(
            success => deferred.resolve(success),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.login = credentials => {
        let deferred = $q.defer();

        Parse.User.logIn(credentials.username, credentials.password).then(
            success => deferred.resolve(success),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.currentUser = () => Parse.User.current() ? new User(Parse.User.current()) : null;
}

function AdminService($q, User){



    this.setUpRole= () => {
        let roleACL = new Parse.ACL();
        let role = new Parse.Role("Administrator", roleACL);
        roleACL.setPublicReadAccess(true);
        role.save();
    };

    this.addUserToAdminGroup = usr => {
        let deferred = $q.defer();

        Parse.Cloud.run('addToAdminGroup', {userToAdmin: usr}).then(
            success => deferred.resolve(success),
            error => deferred.reject(error)
        );
        return deferred.promise;

    };
}

