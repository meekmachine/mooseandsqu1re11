angular.module('app').service('ScoreService', ScoreService);

ScoreService.$inject = ['$q'];

function ScoreService($q) {
    this.formscore = (user, form) => {
        let deferred = $q.defer();

        Parse.Cloud.run('calculateFormScore', { user: user, form: form }).then(
            score => deferred.resolve(score),
            error => deferred.reject(error)
        );
        return deferred.promise;
    }
}
