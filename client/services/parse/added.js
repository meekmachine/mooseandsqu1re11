angular.module('app').factory('Added', Added);
angular.module('app').service('AddedService', AddedService);

Added.$inject = ['$q'];
AddedService.$inject = ['$q', 'Added'];

function Added($q) {
    Added = function(object) {
        this.object = object;

        this.name = object.get('name');
        this.desc = object.get('desc');
        this.primitive = object.get('primitive');
        this.before = object.get('before');
        this.execute = object.get('execute');
        this.init = object.get('init');

        this.save = () => {
            let deferred = $q.defer();

            this.object.set('name', this.name);
            this.object.set('desc', this.desc);
            this.object.set('primitive', this.primitive);
            this.object.set('before', this.before);
            this.object.set('execute', this.execute);
            this.object.set('init', this.init);

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
        this.delete = () => {
            let deferred = $q.defer();

            this.object.destroy().then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        }
    };

    return Added;
}
function AddedService($q, Added) {
    let schema = Parse.Object.extend('Added');

    this.prototype = () => {
        return {
            name: "State_NameDefault",
            desc: "",
            primitive: false,
            before: "",
            execute: "",
            init: {
                params: [],
                during: "",
                states: [],
                transitions: []
            }
        }
    };

    this.createAdded = added => {
        let deferred = $q.defer();
        let object = new schema();

        object.set('name', added.name);
        object.set('desc', added.desc);
        object.set('primitive', added.primitive);
        object.set('before', added.before);
        object.set('execute', added.execute);
        object.set('init', added.init);

        object.save(null).then(
            response => deferred.resolve(new Added(response)),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.getAllAdded = () => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.find().then(
            response => {
                let results = [];
                response.forEach(res => results.push(new Added(res)));
                deferred.resolve(results);
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };
}