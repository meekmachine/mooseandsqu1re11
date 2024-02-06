/**
 * Created by SpeedProxy on 3/27/2017.
 */
angular.module('app').service('AlternativesToGetYouWhereYouWantToGoService', AlternativesToGetYouWhereYouWantToGoService);
//All these data should be fetched from data base. and not be hardcoded on service. TO DO/CHANGE
function AlternativesToGetYouWhereYouWantToGoService (){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "Meditate",
            dragID: "drag1",
        },
        {
            response: "Call a friend",
            dragID: "drag2"
        },
        {
            response: "Go work out",
            dragID: "drag3"
        },
        {
            response: "Go dancing",
            dragID: "drag4"
        },
        {
            response: "Catch a movie",
            dragID: "drag5"
        },
        {
            response: "Go out to eat",
            dragID: "drag6"
        },
        {
            response: "Play video games",
            dragID: "drag7"
        },
        {
            response: "Go to the mall/shopping",
            dragID: "drag8"
        },
        {
            response: "Listen to/play music",
            dragID: "drag9"
        },
        {
            response: "Play sports",
            dragID: "drag10"
        },
        {
            response: "Attend a sporting event",
            dragID: "drag11"
        },
        {
            response: "Spend time with friends",
            dragID: "drag12"
        },
        {
            response: "Go on AIM/chat",
            dragID: "drag13"
        },
        {
            response: "Facebook",
            dragID: "drag14"
        },
        {
            response: "Act like I've been drinking",
            dragID: "drag15"
        },
        {
            response: "Go for a bike ride",
            dragID: "drag16"
        }
    ];

    //stores the users answers to What I Like About Drinking in The Good Things Revisited Survey
    //need to grab these responses from the database
    var usersAnswers = [];

    return{
        defaultAnswers: defaultAnswers,
        userAnswers: usersAnswers,
        addUsersAnswer: function (answer) {
            var addIndex = usersAnswers.length;
            usersAnswers[addIndex] = answer;

        },
        removeUsersAnswer: function (elemIndex){
            usersAnswers.splice(elemIndex, 1);
        },
        getUsersAnswers: function (){
            return usersAnswers;
        }

    };
}