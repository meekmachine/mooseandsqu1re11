angular.module('app').factory('Response', Response);
angular.module('app').service('ResponseService', ResponseService);

Response.$inject = ['$q'];
ResponseService.$inject = ['$q', 'Response'];

function Response($q) {
    Response = function(object) {
        this.object = object;

        this.user = object.get('user');//ptr to the user that response belongs to
        this.element = object.get('element');//the element that the response belongs to
        this.answer = object.get('answer');//the answer that the user has selected as their response

        this.save = () => {

            let deferred = $q.defer();

            this.object.set('user', this.user);
            this.object.set('element', this.element);
            this.object.set('answer', this.answer);

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
    };

    return Response;
}

function ResponseService($q, Response) {
    let schema = Parse.Object.extend('Response');

    this.prototype = (response, form) => {
        return {
            user: response.user,
            element: element,
            answer: response.answer
        }
    };



    this.getResponsesByUser = user => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.equalTo('user', user);

        query.find(
            response => {
                let results = [];
                response.forEach(res => results.push(new Response(res)));
                deferred.resolve(results)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.saveResponse = (response, form) => {


        let deferred = $q.defer();
        let object = new schema();

        let defaultResponse = this.prototype(response, form);

        object.set('user', defaultResponse.user);
        object.set('element', defaultResponse.element);
        object.set('answer', defaultResponse.answer);


        object.save(null).then(
            response =>
                deferred.resolve(response),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };


}