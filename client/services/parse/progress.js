angular.module('app').factory('Progress', Progress);
angular.module('app').service('ProgressService', ProgressService);

Progress.$inject = ['$q'];
ProgressService.$inject = ['$q', 'Progress'];

function Progress($q) {
    Progress = function(object) {
        this.object = object;

        this.user = object.get('user');//ptr to the user that Progress belongs to
        this.GTNSGT = object.get('GTNSGT');//The good things and not so good things list,
        this.audit = object.get('audit');//the AUDIT
        this.howMuchHowOften = object.get('howMuchHowOften');//How Much and How Often Includes Family history, Drugs, and Your Drinking...
        this.familyHistory = object.get('howMuchHowOften');//How Much and How Often Includes Family history, Drugs, and Your Drinking...
        this.myDrinking = object.get('howMuchHowOften');//How Much and How Often Includes Family history, Drugs, and Your Drinking...
        this.otherDrugs = object.get('howMuchHowOften');//How Much and How Often Includes Family history, Drugs, and Your Drinking...
        this.ARP = object.get('ARP');//Alcohol related problems
        this.depression = object.get('depression');//depression survey
        this.MAST = object.get('MAST');//your chances of reducing alcohol-related problems with moderation or chances of success AKA MAST
        this.dependence = object.get('dependence')//your dependence of alcohol
        //this.likeDontLike = object.get('likeDontLike');//your likeDontLike of alcohol

        this.save = () => {
            let deferred = $q.defer();

            this.object.set('user', this.user);
            this.object.set('GTNSGT', this.GTNSGT);
            this.object.set('audit', this.audit);
            this.object.set('howMuchHowOften', this.howMuchHowOften);
            this.object.set('familyHistory', this.familyHistory);
            this.object.set('myDrinking', this.myDrinking);
            this.object.set('otherDrugs', this.otherDrugs);
            this.object.set('ARP', this.ARP);
            this.object.set('depression', this.depression);
            this.object.set('MAST', this.MAST);
            this.object.set('dependence', this.dependence);
            //this.object.set('likeDontLike', this.likeDontLike);

            this.object.save(null).then(
                success => deferred.resolve(success),
                error => deferred.reject(error)
            );

            return deferred.promise;
        };
    };

    return Progress;
}
function ProgressService($q, Progress) {
    let schema = Parse.Object.extend('Progress');

    this.prototype = (userObj, progressObj) => {
        if(!progressObj.GTNSGT){
            progressObj.GTNSGT = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.audit){
            progressObj.audit = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.howMuchHowOften){
            progressObj.howMuchHowOften = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.familyHistory){
            progressObj.familyHistory = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.myDrinking){
            progressObj.myDrinking = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.otherDrugs){
            progressObj.otherDrugs = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.ARP){
            progressObj.ARP = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.depression){
            progressObj.depression = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.MAST){
            progressObj.MAST = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        if(!progressObj.dependence){
            progressObj.dependence = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }
        /*if(!progressObj.likeDontLike){
            progressObj.likeDontLike = [{
                "timestamp": "",
                "responsesPtr": [],
                "percentageComplete": "0",
                "currentElement": ""
            }];
        }*/

        return {
            user: userObj,
            GTNSGT: progressObj.GTNSGT,
            audit: progressObj.audit,
            howMuchHowOften: progressObj.howMuchHowOften,
            familyHistory: progressObj.familyHistory,
            myDrinking: progressObj.myDrinking,
            otherDrugs: progressObj.otherDrugs,
            ARP: progressObj.ARP,
            depression: progressObj.depression,
            MAST: progressObj.MAST,
            dependence: progressObj.dependence
            //likeDontLike: progressObj.likeDontLike
        }
    };

    this.createProgress = (userObj, progressObj) => {
        let deferred = $q.defer();
        let object = new schema();

        let defaultProgress = this.prototype(userObj, progressObj);

        object.set('user', defaultProgress.user);
        object.set('GTNSGT', defaultProgress.GTNSGT);
        object.set('audit', defaultProgress.audit);
        object.set('howMuchHowOften', defaultProgress.howMuchHowOften);
        object.set('familyHistory', defaultProgress.familyHistory);
        object.set('myDrinking', defaultProgress.myDrinking);
        object.set('otherDrugs', defaultProgress.otherDrugs);
        object.set('ARP', defaultProgress.ARP);
        object.set('depression', defaultProgress.depression);
        object.set('MAST', defaultProgress.MAST);
        object.set('dependence', defaultProgress.dependence);
        //object.set('likeDontLike', defaultProgress.likeDontLike);

        object.save(null).then(
            progress => deferred.resolve(progress),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };

    this.getUserProgress = (userObj) => {
        let deferred = $q.defer();
        let query = new Parse.Query(schema);

        query.equalTo('user', userObj);

        query.first(
            progress => {

                deferred.resolve(progress)
            },
            error => deferred.reject(error)
        );

        return deferred.promise;

    };


    this.updateUserProgress = progress => {
        let deferred = $q.defer();
        let object = new schema();

        object.set('user', progress.user);
        object.set('GTNSGT', progress.GTNSGT);
        object.set('audit', progress.audit);
        object.set('howMuchHowOften', progress.howMuchHowOften);
        object.set('familyHistory', progress.familyHistory);
        object.set('myDrinking', progress.myDrinking);
        object.set('otherDrugs', progress.otherDrugs);
        object.set('ARP', progress.ARP);
        object.set('depression', progress.depression);
        object.set('MAST', progress.MAST);
        object.set('dependence', progress.dependence);
        //object.set('likeDontLike', progress.likeDontLike);

        object.save(null).then(
            response => deferred.resolve(response),
            error => deferred.reject(error)
        );

        return deferred.promise;
    };






}