angular.module('app').factory('Intervention', Intervention);
angular.module('app').service('InterventionService', InterventionService);

Intervention.$inject = ['$q'];
InterventionService.$inject = ['$q', 'Intervention'];

function Intervention($q) {
    Intervention = function(object) {
        this.object = object;

        this.name = object.get('name');

        this.save = () => {
            let deferred = $q.defer();

            this.object.set('name', this.name);

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
    };

    return Intervention;
}
function InterventionService($q, Intervention) {
    let schema = Parse.Object.extend('Intervention');

    this.createIntervention = intervention => {
        let deferred = $q.defer();
        let object = new schema();

        object.set('name', intervention.name);

        object.save(null).then(
            response => deferred.resolve(response),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.getAllInterventions = () => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.find().then(
            response => {
                let results = [];
                response.forEach(res => {results.push(new Intervention(res))});
                deferred.resolve(results);
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };
}