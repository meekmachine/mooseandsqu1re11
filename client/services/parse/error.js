angular.module('app').service('ErrorService', ErrorService);

ErrorService.$inject = [];

function ErrorService() {
    this.handleParseError = (error) => {
        console.log(error);
        switch(error.code) {
            case Parse.Error.INVALID_SESSION_TOKEN:
                //TODO: test if this has promise, if so, use defer pattern
                Parse.User.logOut();
                break;
            default: console.log('Unhandled error code detected');
        }
    };
}
