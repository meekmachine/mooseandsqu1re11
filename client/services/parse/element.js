angular.module('app').factory('Element', Element);
angular.module('app').service('ElementService', ElementService);

Element.$inject = ['$q'];
ElementService.$inject = ['$q', 'Element'];

function Element($q) {
    Element = function(object) {
        this.object = object;

        this.type = object.get('type');//type of element
        this.form = object.get('form');//form the element belongs to
        this.order = object.get('order');//order the element is displayed in a form
        this.phrase = object.get('phrase');//determines what the counselor speaks either for Q/A, Feedback, or FeedbackList elements
        this.content = object.get('content');//displays available answer choices to the user
        this.html = object.get('html');//where the custom html content is stored
        this.lang = object.get('lang');//lang that the speech is encoded currently only english supported
        this.deleted = object.get('deleted');//indicates if the element was deleted from the form
        this.isRecorded = object.get('isRecorded');//indicates if the element was deleted from the form
        this.displayBackBtn = object.get('displayBackBtn');//indicates if the element was deleted from the form
        this.displayProgress = object.get('displayProgress');//indicates if the element was deleted from the form
        /*this.tableStructure = object.get('tableStructure');//represents the table as a multidemensional array*/

        this.save = () => {

            let deferred = $q.defer();

            this.object.set('type', this.type);
            this.object.set('form', this.form);
            this.object.set('order', this.order);
            this.object.set('phrase', this.phrase);
            this.object.set('content', this.content);
            this.object.set('html', this.html);
            this.object.set('lang', this.lang);
            this.object.set('deleted', this.deleted);
            this.object.set('isRecorded', this.isRecorded);
            this.object.set('displayBackBtn', this.displayBackBtn);
            this.object.set('displayProgress', this.displayProgress);
            /*this.object.set('tableStructure', this.tableStructure);*/

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
    };

    return Element;
}

function ElementService($q, Element) {
    let schema = Parse.Object.extend('Element');

    this.prototype = (element, form) => {
        if(!element.content){
            element.content = [""];
        }

        return {
            type: element.type,
            form: form,
            order: element.order,
            phrase: [""],
            content: element.content,
            html: "",
            lang: "en-US",
            deleted: false,
            isRecorded: true,
            displayBackBtn: true,
            displayProgress: true/*,
            tableStructure: element.tableStructure*/
        }
    };



    this.getElementsByForm = form => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.equalTo('form', form);
        query.notEqualTo('deleted', true);
        query.ascending('order');

        query.find(
            response => {
                let results = [];
                response.forEach(res => results.push(new Element(res)));
                deferred.resolve(results)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.createElement = (element, form) => {


        let deferred = $q.defer();
        let object = new schema();

        let defaultElement = this.prototype(element, form);

        object.set('type', defaultElement.type);
        object.set('form', defaultElement.form);
        object.set('order', defaultElement.order);
        object.set('phrase', defaultElement.phrase);
        object.set('content', defaultElement.content);
        object.set('html', defaultElement.html);
        object.set('lang', defaultElement.lang);
        object.set('deleted', defaultElement.deleted);
        object.set('isRecorded', defaultElement.isRecorded);
        object.set('displayBackBtn', defaultElement.displayBackBtn);
        object.set('displayProgress', defaultElement.displayProgress);
        /*object.set('tableStructure', defaultElement.tableStructure);*/

        object.save(null).then(
            response =>
                deferred.resolve(response),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.deleteElement = (element, form) => {
        let deferred = $q.defer();
        element.deleted = true;
        element.save(null).then(
            response => {
                deferred.resolve(response);
            },
            error => deferred.reject(error)
        );
        return deferred.promise;
    };

}