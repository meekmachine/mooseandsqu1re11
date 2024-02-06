

angular.module('app').service('goodThingsAboutDrinkingService',goodThingsAboutDrinkingService);


function goodThingsAboutDrinkingService (){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "It helps me sleep",
            dragID: "drag1",
        },
        {
            response: "It helps me be more open socially",
            dragID: "drag2"
        },
        {
            response: "It helps me forget my problems",
            dragID: "drag3"
        },
        {
            response: "It helps me adjust my attitude",
            dragID: "drag4"
        },
        {
            response: "It helps me feel sexier or have better sex",
            dragID: "drag5"
        },
        {
            response: "I feel more creative when I drink",
            dragID: "drag6"
        },
        {
            response: "I like the high",
            dragID: "drag7"
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
                e.goodThings.score.goodThingsResponses.forEach(function(answer){

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
}