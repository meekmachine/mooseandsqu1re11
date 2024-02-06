/**
 * Created by ejhen on 3/23/2017.
 */

angular.module('app').service('gamePlanService',gamePlanService);


function gamePlanService() {

    //stores the users answers to What I Do Like About Drinking in What I Do Like About Drinking Survey
    //need to grab these responses from the database
    var usersAnswers = [
        {
            question:"What changes are you going to make?  Be specific.  Include positive goals (beginning, increase," +
            " improve, do more of something) as well as negative goals (stopping, decreasing, avoiding)",
            response: "Become more aware of my drinking"

        },
        {
            question:"Reasons for changing--What are your most important reasons for changing?",
            response: "It's ruining my life"

        },
        {
            question:"The steps in changing--How do you plan to achieve your goals?  What are the specific steps " +
            "involved?  When, where, and how will you take them?",
            response: "Taking one day at a time"

        },
        {
            question:"How can others help?  How can you get them to help you?",
            response: "By letting me know when I am not on track with my drinking plan.  Explaining the importance for" +
            " me to change my drinking habits."
        },
        {
            question:"What could go wrong or undermine your plan?  How can you stick with your plan despite these " +
            "setbacks or problems?",
            response: "Continuing to hang out with the 'bad crowd'.  Choose my friends wisely."
        },
        {
            question:"What good things will happen as a result of changing?",
            response: "I will save money and hopefully improve my relationships."
        }
    ];

    return {
        usersAnswers: usersAnswers

    }
}

