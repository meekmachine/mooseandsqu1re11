angular.module('app').factory('Form', Form);
angular.module('app').service('FormService', FormService);

Form.$inject = ['$q'];
FormService.$inject = ['$q', 'Form'];

function Form($q) {
    Form = function(object) {
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

    return Form;
}
function FormService($q, Form) {
    let schema = Parse.Object.extend('Form');


    this.getAllForms =()=> {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.find().then(
            response => {
                let results = [];
                response.forEach(res => {results.push(new Form(res))});
                deferred.resolve(results);
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.getFormsByIntervention = intervention => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.equalTo('intervention', intervention);

        query.find(
            response => {
                let results = [];
                response.forEach(res => results.push(new Form(res)));
                deferred.resolve(results)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.getFormsByName = formName => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.equalTo('name', formName);

        query.find(
            response => {
                let results = [];
                response.forEach(res => results.push(new Form(res)));
                deferred.resolve(results)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.createForm = (form, intervention) => {
        let deferred = $q.defer();
        let object = new schema();

        object.set('name', form.name);
        object.set('intervention', intervention);

        object.save(null).then(
            response => deferred.resolve(response),
            error => deferred.reject(error)
        );

        return deferred.promise;
    }
}