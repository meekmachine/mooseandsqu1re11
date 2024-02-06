/*


angular.module('app').service('otherDrugsService',otherDrugsService);


function otherDrugsService (){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "Marijuana, Hash, THC",
            dragID: "drag1",
        },
        {
            response: "Stimulants, meth, speed, ritalin",
            dragID: "drag2"
        },
        {
            response: "Cocaine or crack",
            dragID: "drag3"
        },
        {
            response: "Opioids (Oxycontin, Oxycodone, heroin)",
            dragID: "drag4"
        },
        {
            response: "Hallucinogens (LSD, peyote, mushrooms)",
            dragID: "drag5"
        },
        {
            response: "Inhalants",
            dragID: "drag6"
        },
        {
            response: "Ecstasy or club drugs",
            dragID: "drag7"
        },
        {
            response: "Tranquilizers (Valium, Xanax)",
            dragID: "drag8"
        },
        {
            response: "PCP, Phencyclidine",
            dragID: "drag9"
        },
        {
            response: "Sedatives (Barbiturates)",
            dragID: "drag10"
        },
        {
            response: "Have not taken any of the above",
            dragID: "drag11"
        }
    ];



    var usersAnswers = [];

    var dragIndex = 1;


    return{
        defaultAnswers: defaultAnswers,
        addUsersAnswer: function (answer) {
            var addIndex = usersAnswers.length;
            usersAnswers[addIndex] = answer;

        },
        removeUsersAnswer: function (elemIndex){
            usersAnswers.splice(elemIndex, 1);
        },
        getUsersAnswers: function (){

            Parse.Cloud.run("calculateAllScores", {}).then(function(e){
                e.otherDrugs.score.otherDrugsResponses.forEach(function(answer){

                    var tmp = {
                        response: answer,
                        dragID: "drag" + dragIndex
                    };
                    dragIndex++;
                    usersAnswers.push(tmp);
                });
            });
            return usersAnswers;
        },
        updateUsersAnswersOrder: function (newOrderedAnswers){
            usersAnswers = newOrderedAnswers;
        }
    };
}*/
