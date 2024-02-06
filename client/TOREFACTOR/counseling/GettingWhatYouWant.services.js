angular.module('app').service('GettingWhatYouWantService', GettingWhatYouWantService);
function GettingWhatYouWantService (){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "To reduce my stress levels",
            dragID: "drag1",
        },
        {
            response: "To adjust my attitude",
            dragID: "drag2"
        },
        {
            response: "To be more sociable",
            dragID: "drag3"
        },
        {
            response: "To enjoy sex more",
            dragID: "drag4"
        },
        {
            response: "To be more assertive",
            dragID: "drag5"
        },
        {
            response: "To get high",
            dragID: "drag6"
        },
        {
            response: "To be more creative",
            dragID: "drag7"
        },
        {
            response: "To be a better lover",
            dragID: "drag8"
        },
        {
            response: "To be braver or more daring",
            dragID: "drag9"
        },
        {
            response: "To sleep",
            dragID: "drag10"
        },
        {
            response: "To forget",
            dragID: "drag11"
        },
        {
            response: "To feel better",
            dragID: "drag12"
        },
        {
            response: "To fight boredom",
            dragID: "drag13"
        },
        {
            response: "To escape",
            dragID: "drag14"
        },
        {
            response: "To be more relaxed in social situations",
            dragID: "drag15"
        },
        {
            response: "To feel accepted",
            dragID: "drag16"
        },
        {
            response: "To have fun",
            dragID: "drag17"
        },
        {
            response: "To fit in",
            dragID: "drag18"
        }

    ];

    //stores the users answers to What I Like About Drinking in The Good Things Revisited Survey
    //need to grab these responses from the database
    var usersAnswers = [
        {
            response: "To be more relaxed in social situations.",
            dragID: "drag1",
        },
        {
            response: "To feel accepted.",
            dragID: "drag2"
        },
        {
            response: "To have fun.",
            dragID: "drag3"
        },
        {
            response: "To fit in.",
            dragID: "drag4"
        }
    ];


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