angular.module('app').service('ScoreService', ScoreService);

ScoreService.$inject = ['$q'];

function ScoreService($q) {
    this.calculateFormScore = (formID) => {
        let deferred = $q.defer();

        Parse.Cloud.run('calculateFormScore', { formID: formID }).then(
            score => deferred.resolve(score),
            error => deferred.reject(error)
        );

        return deferred.promise;
    }
}
