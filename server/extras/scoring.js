const Constants = require('../extras/constants');

function Audit(responses) {
    if (responses.length != 0)
    {
        let auditRange = "";
        let auditScore = 0;

        auditScore = responses.reduce((sum, value) => {
            if (value.type !== 'QuestionAnswer') return 0;
            return sum + value.answer[0];
        }, 0);

        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //console.log(auditScore);
        //range for AUDIT
        if (auditScore > 13) {
            auditRange = "<p style='color: #C21B1B;'>High Risk</p>";
        } else if ((auditScore > 8) && (auditScore <= 13)) {
            auditRange = "<p style='color: #C0A548;'>Medium Risk</p>";
        } else {
            auditRange = "<p style='color: #2B710A;'>Low Risk</p>";
        }
        console.log(auditRange);
        return {
            "auditScore": auditScore,
            "auditRange": auditRange,
            "auditSpeechForCounselor": "The risk for future alcohol-related problems based on your screening questionnaire is " + auditRange
        };
    }
    else {
        return {
        "auditScore": -1,
        "auditRange": -1,
        "auditSpeechForCounselor":  -1
    };
    }
}

function BDP(responses) {

    return 0;
}

function BAC(responses, userStats) {
    if(responses.length != 0) {
        //beer is 1 with 12 oz and .05 alcohol- typically 148 calories in 12 oz
        //Wine is 2 with 5 oz and .12 alcohol- 106 calories for 5 oz of dry wine and a whopping 226 calories for 5 oz of sweet dessert wine (166 avg)
        // liquor is 1.5 oz and .4 alcohol- Schnapps has 108 calories per 1 1/2 ounces, but 1 1/2 ounces of creme de menthe will set you back 186 calories (147 avg)
        //https://www.today.com/health/beer-wine-liquor-are-they-making-you-fat-I142416 used to get averages per alcohol type
        let totSECperWeek = 0;
        let totBeer = 0;
        let totWine = 0;
        let totLiquor = 0;
        let totSecBeer = 0;
        let totSecWine = 0;
        let totSecLiquor = 0;
        let totHrs = 0;
        let avgDrinksPerDay = 0;
        let answers = {};
        let usrBAC;
        let bacToleranceRange = "";
        let totDrinksPerWeek = 0;
        let totDollarsSpent = 0;
        let totCalories = 0;

        responses.forEach((res) => {

            if (res.order == 0){
                answers = res.answer[0];
            }

            if (res.type === 'textArea') {
                totDollarsSpent = res.answer;
            }


            /*if (res.type == 'TabularInput') {
                answers = res.answer;
                console.log(res);
            }
            if (res.type == 'textArea') {
                totDollarsSpent = res.answer;
            }*/
        });


        let beers = answers.beer;
        let wine = answers.wine;
        let liquor = answers.liquor;
        let hours = answers.hours;

        if(beers){
            totBeer = beers.reduce( function(total, amount){
                return total + amount
            });
        }else{
            totBeer = 0;
        }

        if(wine){
            totWine = wine.reduce( function(total, amount){
                return total + amount
            });
        }else{
            totWine = 0;
        }

        if(liquor){
            totLiquor = liquor.reduce( function(total, amount){
                return total + amount
            });
        }else{
            totLiquor = 0;
        }

        if(hours){
            console.log("going to reduce hours array");
            totHrs = hours.reduce( function(total, amount){
                return total + amount
            });
        }else{
            totHrs = 0;
        }


        /*answers.forEach(function (val, indexA) {
            for (let j = 0; j < val.length; j++) {
                switch (indexA) {
                    case 0:
                        totBeer += Number(val[j]);
                        break;
                    case 1:
                        totWine += Number(val[j]);
                        break;
                    case 2:
                        totLiquor += Number(val[j]);
                        break;
                    case 3:
                        totHrs += Number(val[j]);
                        break;
                    default:
                        break;
                }
            }
        });*/

        totSecBeer = totBeer * 12 * 2 * .05;
        totSecWine = totWine * 5 * 2 * .12;
        totSecLiquor = totLiquor * 1.5 * 2 * .4;
        totDrinksPerWeek = totBeer + totWine + totLiquor;

        totCalories = (totBeer * 148) + (totWine * 166) + (totLiquor * 147);

        totSECperWeek = totSecLiquor + totSecBeer + totSecWine;
        avgDrinksPerDay = totSECperWeek / 7.0;

        usrBAC = getUsrAvgBAC(userStats.gender, Number(userStats.weight), avgDrinksPerDay);


        //use the usrBAC and look up the percentile that we will include in the an array in the constants file
        if (usrBAC < 0.06) {
            bacToleranceRange = "<p style='color: #2B710A;'>Low</p>";
        } else if (usrBAC < 0.12) {
            bacToleranceRange = "<p style='color: #C0A548;'>Medium</p>";
        } else if (usrBAC < 0.18) {
            bacToleranceRange = "<p style='color: #C21B1B;'>High</p>";
        } else {
            bacToleranceRange = "<p style='color: #761414;'>Very High</p>";
        }

        usrWeeklyDrinkPercentile = getUsrWeeklyDrinkPercentile(userStats.age, userStats.gender, totDrinksPerWeek);

        return {
            "totSECperWeek": totSECperWeek,
            "totWine": totWine,
            "totBeer": totBeer,
            "totLiquor": totLiquor,
            "totDrinksPerWeek": totDrinksPerWeek + " drinks",
            "totHours": totHrs + " hours",
            "totSecWine": totSecWine,
            "totSecBeer": totSecBeer,
            "totSecLiquor": totSecLiquor,
            "avgDrinksPerDay": avgDrinksPerDay,
            "avgBAC": usrBAC.avgBAC,
            "bac_x": usrBAC.x_index,
            "bac_y": usrBAC.y_index,
            "userStats": userStats,
            "bacToleranceRange": bacToleranceRange,
            "totDrinksPerWeek": totDrinksPerWeek,
            "relativePercentile": usrWeeklyDrinkPercentile,
            "moneySpentOnDrinking": totDollarsSpent,
            "drinkingCalories": totCalories,
            "yourDrinkingSpeechForCounselor": "The total number of standard drinks you had per week in the last 4 weeks is " + totDrinksPerWeek + " drinks. " +
            "Your drinking relative to other U.S. is in the " + " percentile." +
            "Your peak BAC in the last mont was " + usrBAC.avgBAC +
            "The number of hours you spend intoxicated in a typical week is " + totHrs + " hours. " +
            "The amount of money you spend on alcohol in a typical week is " + totDollarsSpent + " U.S. dollars. " +
            "The number of calories you consume in a typical week by drinking is " + totCalories + " calories",
            "riskForFutureSpeechForCounselor": "The risk for future alcohol-related problems based on your tolerance is " + bacToleranceRange
        }
    }
    else{
        return {
            "totSECperWeek": -1,
            "totWine": -1,
            "totBeer": -1,
            "totLiquor": -1,
            "totDrinksPerWeek": -1,
            "totHours": -1,
            "totSecWine": -1,
            "totSecBeer": -1,
            "totSecLiquor": -1,
            "avgDrinksPerDay": -1,
            "avgBAC": -1,
            "bac_x": -1,
            "bac_y": -1,
            "userStats": -1,
            "bacToleranceRange": -1,
            "totDrinksPerWeek": -1,
            "relativePercentile": -1,
            "moneySpentOnDrinking": -1,
            "drinkingCalories": -1,
            "yourDrinkingSpeechForCounselor": -1,
            "riskForFutureSpeechForCounselor": -1
        }
    }

}
//The following DRINC section corresponds to the "Alcohol-related consequences" section of the feedback summary of the text-based DCU
function DRINC(responses, userStats) {
    if(responses.length != 0) {
        const physicalIDs = [1, 8, 11, 13, 24, 29, 33, 48];
        const interPersonalIDs = [4, 7, 17, 21, 27, 30, 31, 39, 43, 46];
        const intraPersonalIDs = [2, 12, 16, 18, 34, 36, 37, 38];
        const impulseControlIDs = [9, 10, 19, 22, 23, 28, 32, 41, 42, 47, 49, 50];
        const socialResponsabilityIDs = [3, 6, 14, 20, 26, 40, 44];

        let physicalScoreArr = [];
        let interPersonalScoreArr = [];
        let intraPersonalScoreArr = [];
        let impulseControlScoreArr = [];
        let socialResponsabilityScoreArr = [];

        let physicalScore = 0;
        let interPersonalScore = 0;
        let intraPersonalScore = 0;
        let impulseControlScore = 0;
        let socialResponsabilityScore = 0;
        let totalScore;

        let physicalPercentile;
        let interPersonalPercentile;
        let intraPersonalPercentile;
        let impulseControlPercentile;
        let socialResponsabilityPercentile;
        let totalScorePercentile;

        let physicalRange;
        let interPersonalRange;
        let intraPersonalRange;
        let impulseControlRange;
        let socialResponsabilityRange;
        let totalScoreRange;

        //sort response by order number
        responses = responses.sort(compareByOrder);

        //place responses in appropriate array for calculating each section of DRINC
        physicalIDs.forEach(function (physIndex, index) {
            if (responses[physIndex] != null) {
                physicalScoreArr.push(responses[physIndex]);
            }
        });
        interPersonalIDs.forEach(function (interPerIndex, index) {
            if (responses[interPerIndex] != null) {
                interPersonalScoreArr.push(responses[interPerIndex]);
            }
        });
        intraPersonalIDs.forEach(function (intraPerIndex, index) {
            if (responses[intraPerIndex] != null) {
                intraPersonalScoreArr.push(responses[intraPerIndex]);
            }
        });
        impulseControlIDs.forEach(function (impConIndex, index) {
            if (responses[impConIndex] != null) {
                impulseControlScoreArr.push(responses[impConIndex]);
            }
        });
        socialResponsabilityIDs.forEach(function (socRespIndex, index) {
            if (responses[socRespIndex] != null) {
                socialResponsabilityScoreArr.push(responses[socRespIndex]);
            }
        });

        //calculate physical score
        for (let i = 0; i < physicalScoreArr.length; i++) {
            if (physicalScoreArr[i].type === 'QuestionAnswer') {
                physicalScore += parseInt(physicalScoreArr[i].answer);
            }
        }

        //calculate interPersonal Score
        for (let i = 0; i < interPersonalScoreArr.length; i++) {
            if (interPersonalScoreArr[i].type === 'QuestionAnswer') {
                interPersonalScore += parseInt(interPersonalScoreArr[i].answer);
            }
        }

        //calculate intraPersonal Score
        for (let i = 0; i < intraPersonalScoreArr.length; i++) {
            if (intraPersonalScoreArr[i].type === 'QuestionAnswer') {
                intraPersonalScore += parseInt(intraPersonalScoreArr[i].answer);
            }
        }

        //calculate impulseControl Score
        for (let i = 0; i < impulseControlScoreArr.length; i++) {
            if (impulseControlScoreArr[i].type === 'QuestionAnswer') {
                impulseControlScore += parseInt(impulseControlScoreArr[i].answer);
            }
        }

        //calculate socialResponsability Score
        for (let i = 0; i < socialResponsabilityScoreArr.length; i++) {
            if (socialResponsabilityScoreArr[i].type === 'QuestionAnswer') {
                socialResponsabilityScore += parseInt(socialResponsabilityScoreArr[i].answer);
            }
        }

        //calculate total score
        totalScore = physicalScore + impulseControlScore + intraPersonalScore
            + interPersonalScore + socialResponsabilityScore;

        //get the percentiles for each of the scores
        physicalPercentile = getDrincPhysicalPercentile(userStats.gender, physicalScore);
        interPersonalPercentile = getDrincInterPercentile(userStats.gender, interPersonalScore);
        intraPersonalPercentile = getDrincIntraPercentile(userStats.gender, intraPersonalScore);
        impulseControlPercentile = getDrincImpulsePercentile(userStats.gender, impulseControlScore);
        socialResponsabilityPercentile = getDrincSocialPercentile(userStats.gender, socialResponsabilityScore);
        totalScorePercentile = getDrincTotPercentile(userStats.gender, totalScore);

        //get the ranges for each score

        physicalRange = getDrincRange(physicalPercentile);
        interPersonalRange = getDrincRange(interPersonalPercentile);
        intraPersonalRange = getDrincRange(intraPersonalPercentile);
        impulseControlRange = getDrincRange(impulseControlPercentile);
        socialResponsabilityRange = getDrincRange(socialResponsabilityPercentile);
        totalScoreRange = getDrincRange(totalScorePercentile);

        // console.log("****************************************");
        // console.log("physicalScore " + physicalScore + " " + physicalPercentile + " " + physicalRange);
        // console.log("interPersonalScore " + interPersonalScore + " " + interPersonalPercentile + " " + interPersonalRange);
        // console.log("intraPersonalScore " + intraPersonalScore + " " + intraPersonalPercentile + " " + intraPersonalRange);
        // console.log("impulseControlScore " + impulseControlScore + " " + impulseControlPercentile + " " + impulseControlRange);
        // console.log("socialResponsibilityScore " + socialResponsabilityScore + " " + socialResponsabilityPercentile + " " + socialResponsabilityRange);
        // console.log("totalScore " + totalScore + " " + totalScorePercentile + " " + totalScoreRange);


        return {
            "physicalScore": physicalScore,
            "physicalPercentile": physicalPercentile,
            "physicalRange": physicalRange,
            "interPersonalScore": interPersonalScore,
            "interPersonalPercentile": interPersonalPercentile,
            "interPersonalRange": interPersonalRange,
            "intraPersonalScore": intraPersonalScore,
            "intraPersonalPercentile": intraPersonalPercentile,
            "intraPersonalRange": intraPersonalRange,
            "impulseControlScore": impulseControlScore,
            "impulseControlPercentile": impulseControlPercentile,
            "impulseControlRange": impulseControlRange,
            "socialResponsibilityScore": socialResponsabilityScore,
            "socialResponsibilityPercentile": socialResponsabilityPercentile,
            "socialResponsibilityRange": socialResponsabilityRange,
            "totalScore": totalScore,
            "totalScorePercentile": totalScorePercentile,
            "totalScoreRange": totalScoreRange,
            "alcoholConsequencesCounselorSpeech": "Your total score for alcohol-related consequences is " + totalScoreRange + " based on your recent drinking. " +
            "Your intrapersonal score is " + intraPersonalRange + " based on your recent drinking. " +
            "Your interpersonal score is " + interPersonalRange + " based on your recent drinking. " +
            "Your social responsibility score is " + socialResponsabilityRange + " based on your recent drinking. " +
            "Your impulse control score is " + impulseControlRange + " based on your recent drinking. " +
            "Your physical score is " + physicalRange + " based on your recent drinking. "
        }
    }
    else {
        return {
            "physicalScore": -1,
            "physicalPercentile": -1,
            "physicalRange": -1,
            "interPersonalScore": -1,
            "interPersonalPercentile": -1,
            "interPersonalRange": -1,
            "intraPersonalScore": -1,
            "intraPersonalPercentile": -1,
            "intraPersonalRange": -1,
            "impulseControlScore": -1,
            "impulseControlPercentile": -1,
            "impulseControlRange": -1,
            "socialResponsibilityScore": -1,
            "socialResponsibilityPercentile": -1,
            "socialResponsibilityRange": -1,
            "totalScore": -1,
            "totalScorePercentile": -1,
            "totalScoreRange": -1,
            "alcoholConsequencesCounselorSpeech": -1
        }
    }

}

function SOCRATES(responses)
{
    if(responses.length != 0) {
        const recognitionIDs = [1, 3, 7, 10, 12, 15, 17];
        const ambivalenceIDs = [2, 6, 11, 16];
        const takingStepsIDs = [4, 5, 8, 9, 13, 14, 18, 19];

        let recognitionScoreArr = [];
        let ambivalenceScoreArr = [];
        let takingStepsScoreArr = [];

        let recognitionScore = 0;
        let ambivalenceScore = 0;
        let takingStepsScore = 0;


        //sort response by order number
        responses = responses.sort(compareByOrder);

        //place responses in appropriate array for calculating each section of Socrates
        recognitionIDs.forEach(function (recIndex, index) {
            if (responses[recIndex] != null) {
                recognitionScoreArr.push(responses[recIndex]);
            }
        });
        ambivalenceIDs.forEach(function (ambIndex, index) {
            if (responses[ambIndex] != null) {
                ambivalenceScoreArr.push(responses[ambIndex]);
            }
        });
        takingStepsIDs.forEach(function (tsIndex, index) {
            if (responses[tsIndex] != null) {
                takingStepsScoreArr.push(responses[tsIndex]);
            }
        });

        //calculate recognition score
        for (let i = 0; i < recognitionScoreArr.length; i++) {
            if (recognitionScoreArr[i].type === 'QuestionAnswer') {
                recognitionScore += parseInt(recognitionScoreArr[i].answer);
            }
        }
        //calculate ambivalence score
        for (let i = 0; i < ambivalenceScoreArr.length; i++) {
            if (ambivalenceScoreArr[i].type === 'QuestionAnswer') {
                ambivalenceScore += parseInt(ambivalenceScoreArr[i].answer);
            }
        }
        //calculate takingStepsScore
        for (let i = 0; i < takingStepsScoreArr.length; i++) {
            if (takingStepsScoreArr[i].type === 'QuestionAnswer') {
                takingStepsScore += parseInt(takingStepsScoreArr[i].answer);
            }
        }

        //todo: need to figure out if we can use these below, the problem is they are Asynchronous
        /*
        recognitionScore.reduce((sum, value) => {
            if(value.type !== 'QuestionAnswer') return 0;
            return sum + value.answer[0]-1;
        }, 0);

        //calculate ambivalence score
        ambivalenceScore.reduce((sum, value) => {
            if(value.type !== 'QuestionAnswer') return 0;
            return sum + value.answer[0]-1;
        }, 0);

        //calculate takingStepsScore
        takingStepsScore.reduce((sum, value) => {
            if(value.type !== 'QuestionAnswer') return 0;
            return sum + value.answer[0]-1;
        }, 0);*/

        return {
            "recognitionScore": recognitionScore,
            "ambivalenceScore": ambivalenceScore,
            "takingStepsScore": takingStepsScore
        }
    }
    else
    {
        return {
            "recognitionScore": -1,
            "ambivalenceScore": -1,
            "takingStepsScore": -1
        }
    }

}

function SADQC(responses) {
    if(responses.length != 0) {
        let sadqScore = 0;

        sadqScore= responses.reduce((sum, value) => {
            if (value.type !== 'QuestionAnswer') return 0;
            return sum + value.answer[0];
        }, 0);

        return {
            "sadqScore": sadqScore
        };
    }
    else
    {
        return {
            "sadqScore": -1
        };
    }
}

function compareByOrder(a, b) {
    return a.order - b.order;
}

function getUsrAvgBAC(gender, weight, avgDrinks) {

    let avgBAC;
    let x = -1, y = -1;
    //get the x axis value/index (corresponds to the BAC chart in the constants file) based on the users weight
    let weightRounded = weight - (weight % 20);

    if (weightRounded > 240) {
        y = 13;
    } else if (weightRounded < 100) {
        y = 1;
    } else {
        y = Constants.BAC_TABLE_INDICES.weightIndex.indexOf(weightRounded);

    }

    //get the y axis value/index (corresponds to the BAC chart in the constants file) based on the users average number of drinks
    let avgDrinkRounded = Math.round(avgDrinks);


    if (avgDrinkRounded >= 12) {
        x = 12;
    } else if (avgDrinkRounded <= 1.0 && avgDrinkRounded > 0.0) {
        x = 1;
    } else {
        x = Constants.BAC_TABLE_INDICES.avgDrinksIndex.indexOf(avgDrinkRounded);
    }


    //todo: need to add a clause above in the event that the user has an average of 0 drinks

    //return the corresponding BAC for user based on the weight of the user (x-value), and average number
    if (gender == 'Male') {
        avgBAC = Constants.BAC_TABLE.male[x][y];
    } else {
        avgBAC = Constants.BAC_TABLE.female[x][y];
    }

    return {
        "avgBAC": avgBAC,
        "x_index": x,
        "y_index": y
    }
}

function getUsrWeeklyDrinkPercentile(age, gender, totalDrinks)
{
    let percentile;
    let x = -1, y = -1;

    //Beginning to search for the y index which corresponds to the number of drinks a user consumes in a given week, see Constants.maleDrinksPerWeekPercentile
    //Note: since indices the same for males and females, chose males arbitrarily, but could choose either
    if (totalDrinks >= 40)
    {
        y = 9;
    }
    else {
        for (var i = 0; i < Constants.MALE_DRINKSPERWEEK_PERCENTILE[0].length; i++)
        {
            var tmp = Constants.MALE_DRINKSPERWEEK_PERCENTILE[0][i];
            if (totalDrinks <= tmp)
            {
                y = i;
            }
        }
    }

    //Beginning to search for the x index which corresponds to the age of the user, see Constants.maleDrinksPerWeekPercentile
    //Note: since indices the same for males and females, chose males arbitrarily, but could choose either
    if (age == null)
    {
        x = 1;
    }
    else if (age >= 65)
    {
        x = 12;
    }
    else {
        for (var j = 2; j < Constants.MALE_DRINKSPERWEEK_PERCENTILE.length; j++)
        {
            var tmp2 = Constants.MALE_DRINKSPERWEEK_PERCENTILE[j][0];
            if (age <= tmp2)
            {
                x = j;
            }
        }
    }

    //return the corresponding BAC for user based on the weight of the user (x-value), and average number
    if (gender == 'Male') {
        percentile = Constants.MALE_DRINKSPERWEEK_PERCENTILE[x][y];
    } else {
        percentile = Constants.FEMALE_DRINKSPERWEEK_PERCENTILE[x][y];
    }

    return percentile;
}

function Depression(responses) {
    if(responses.length != 0) {
        //sort response by order number
        responses = responses.sort(compareByOrder);

        let depressionScore = 0;
        let depressionRange = "";
        let depressionScoreWithText = "";

        responses.forEach(function (response) {
            if (invertAnswerWeight(response.order)) {
                depressionScore += (3 - Number(response.answer[0]));
            } else {
                depressionScore += Number(response.answer[0]);
            }
        });

        if (depressionScore < 15) {
            depressionRange = "<p style='color: #2B710A;'>Low</p>";
            depressionScoreWithText = "Your score " + depressionScore + " means that you do no appear to be experiencing high levels of depression right now.";
        } else if (depressionScore >= 15 && depressionScore < 26) {
            depressionRange = "<p style='color: #C0A548;'>Mild to Moderate</p>";
            depressionScoreWithText = "Your score " + depressionScore + " means that you seem to be experiencing mild to moderate symptoms of depression right now. Please consider discussing this with your primary care provider. Depression is treatable.";
        } else {
            depressionRange = "<p style='color: #C21B1B;'>High</p>";
            depressionScoreWithText = "Your score " + depressionScore + " means that you seem to be experiencing high levels of symptoms of depression right now. Please consider discussing this with your primary care provider. Depression is treatable.";
        }

        return {
            "depressionScore": depressionScore,
            "depressionRange": depressionRange,
            "depressionScoreWithText": depressionScoreWithText,
            "depressionCounselorSpeech": "The scores on this screening for depression range from 0 to 60. Your score of " +
            depressionScoreWithText + " means that you appear to be experiencing " + depressionRange + " levels of symptoms of depression." +
            " Please consider discussing this with your primary care provider. Depression is treatable."
        };

        function invertAnswerWeight(questionNumber) {
            switch (questionNumber) {
                case 2:
                case 5:
                case 6:
                case 11:
                case 12:
                case 14:
                case 16:
                case 17:
                case 18:
                case 20:
                    return true;
                default:
                    return false;
            }
        }
    }
    else {
        return {
            "depressionScore": -1,
            "depressionRange": -1,
            "depressionScoreWithText": -1,
            "depressionCounselorSpeech": -1
        };
    }
}

function Mast(responses) {
    if(responses.length != 0) {
        /*To-do: need to check size of responses if not 24 therefore all questions have not been answered and need not to do the rest*/

        let mastScore = 0;
        let mastScoreWithText = "";

        //sort response by order number
        responses = responses.sort(compareByOrder);

        //helper functions
        //check if the answer weight is Yes: 0 and No: 2
        function isZeroTwo(questionNumber) {
            switch (questionNumber) {
                case 1:
                case 6:
                case 7:
                    return true;
                default:
                    return false;
            }
        }

        //check if the answer weight is Yes: 2 and No: 0
        function isReverseZeroTwo(questionNumber) {
            switch (questionNumber) {
                case 2:
                case 4:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 17:
                case 21:
                case 22:
                    return true;
                default:
                    return false;
            }
        }

        //check if the answer weight is Yes: 1 and No: 0
        function isOneZero(questionNumber) {
            switch (questionNumber) {
                case 3:
                case 5:
                case 9:
                case 16:
                    return true;
                default:
                    return false;
            }
        }

        //check if the answer weight is Yes: 5 and No: 0
        function isFiveZero(questionNumber) {
            switch (questionNumber) {
                case 8:
                case 18:
                case 19:
                case 20:
                    return true;
                default:
                    return false;
            }
        }

        //check if the answer weight is Special case
        function isSpeicalCase(questionNumber) {
            switch (questionNumber) {
                case 23:
                case 24:
                    return true;
                default:
                    return false;
            }
        }

        responses.forEach(function (response, index) {
            if (isZeroTwo(index + 1)) {
                if (response.answer[0] == 1) {
                    mastScore += 2;
                }
            } else if (isReverseZeroTwo(index + 1)) {
                if (response.answer[0] == 0) {
                    mastScore += 2;
                }
            } else if (isOneZero(index + 1)) {
                if (response.answer[0] == 0) {
                    mastScore += 1;
                }
            } else if (isFiveZero(index + 1)) {
                if (response.answer[0] == 0) {
                    mastScore += 5;
                }
            } else {
                mastScore += (Number(response.answer[0]) * 2);
            }
        });

        if (mastScore <= 10) {
            mastScoreWithText = "Your score of " + mastScore + " on the MAST puts you in the group that had the highest rate of moderate drinkers at follow-up. (The group had MAST scores between 0 and 10.) Of those who were successful, nearly twice as many people were moderating their drinking than were totally abstinent. Unfortunately, not everyone who had a score in this range was successful. About one third were drinking at least 50% less but still having at least one alcohol-related problem. About one quarter reduced their drinking by less than 50% and were still having alcohol-related problems.";

        } else if (mastScore <= 18) {
            mastScoreWithText = "Your score of " + mastScore + " on the MAST puts you in the group that had nearly the highest rate of moderate drinkers at follow-up. (The group had MAST scores between 11 and 18.) Of those who were successful, half were abstaining and half were moderating their drinking. Unfortunately, not everyone who had a score in this range was successful. About one-fifth were drinking at least 50% less but still having at least one alcohol-related problem. About 4 in 10 reduced their drinking by less than 50% and were still having alcohol-related problems.";

        } else if (mastScore <= 28) {
            mastScoreWithText = "Your score of " + mastScore + " on the MAST puts you in the group that had the nearly lowest rate of moderate drinkers at follow-up. (The group had MAST scores between 19 and 28.) Of those who were successful, five times as many were abstaining as were moderating their drinking. Unfortunately, not everyone who had a score in this range was successful. About one in six were drinking at least 50% less but still having at least one alcohol-related problem. About one third reduced their drinking by less than 50% and were still having alcohol-related problems.";

        } else {
            mastScoreWithText = "Your score of " + mastScore + " on the MAST puts you in the group that had the lowest rate of moderate drinkers at follow-up. (The group had MAST scores of 29 or more.) While nearly a third of this group " +
                "had no alcohol-related problems, all " +
                "of them did so by abstaining. " +
                "In other words, of those who were successful in getting rid of " +
                "their alcohol-related problems, no one was moderating his or her " +
                "drinking.  Unfortunately, not everyone who had a score in this " +
                "range was successful with the early versions of moderation training.  About one third were " +
                "drinking at least 50% less but still having at least one alcohol-related " +
                "problem. More than 4 in 10 reduced their drinking by less than 50% and were still having alcohol-related problems. " +
                "What this suggests is that moderation may not be the most helpful " +
                "way for you to get rid of your alcohol-related problems. " +
                "We encourage you to consider a goal " +
                "of abstaining, either now or in the future. Please think about it " +
                "and perhaps discuss it with a therapist who has expertise in heavy drinking."
        }

        return {
            "mastScore": mastScore,
            "mastScoreWithText": mastScoreWithText,
            "mastCounselorSpeech": "Your score of " + mastScore + " on the MAST puts you in the group that had the nearly" +
            " lowest rate of moderate drinkers at follow-up. (The group had MAST scores between 19 and 28.)" +
            " Of those who were successful, five times as many were abstaining as were moderating their drinking." +
            " Unfortunately, not everyone who had a score in this range was successful. About one in six were " +
            "drinking at least 50% less but still having at least one alcohol-related problem." +
            " About one third reduced their drinking by less than 50% and were still having alcohol-related problems."
        };
    }
    else
    {
        return {
            "mastScore": -1,
            "mastScoreWithText": -1,
            "mastCounselorSpeech": -1
        };
    }
}

function AgeOnsetFamilyHis(responses) {
 if(responses.length != 0) {
     //sort response by order number
     responses = responses.sort(compareByOrder);


     let ageOnsetScore = 0;
     let ageOnsetRange = "";
     let familyHistoryScore = 0;
     let familyHistoryRange = "";

     responses.forEach(function (response, index) {


         let answerStr = response.answer[0];

         if (isForAgeOnset(index)) {
             ageOnsetScore += Number(response.answer[0]);

         } else if (isForFamilyHistory(index)) {
             if (response.order == 4) {
                 familyHistoryScore += response.answer[0].length;
             } else {
                 familyHistoryScore += (2 * Number(response.answer[0]));
             }
         }


     });

     ageOnsetScore = (ageOnsetScore / 2);

     //range for age of onset
     if (ageOnsetScore > 0 && ageOnsetScore < 25) {
         ageOnsetRange = "<p style='color: #C21B1B;'>High Risk</p>";
     } else if (ageOnsetScore < 39.9) {
         ageOnsetRange = "<p style='color: #C0A548;'>Medium Risk</p>";
     } else {
         ageOnsetRange = "<p style='color: #2B710A;'>Low Risk</p>";
     }

     //range for family history score
     if (familyHistoryScore <= 1) {
         familyHistoryRange = "<p style='color: #2B710A;'>Low Risk</p>";
     } else if (familyHistoryScore <= 3) {
         familyHistoryRange = "<p style='color: #C0A548;'>Medium Risk</p>";
     } else if (familyHistoryScore <= 6) {
         familyHistoryRange = "<p style='color: #C21B1B;'>High Risk</p>";
     } else {
         familyHistoryRange = "<p style='color: #761414;'>Very High Risk</p>";
     }

     //helper functions
     //isForAgeOnset
     function isForAgeOnset(questionNum) {
         switch (questionNum) {
             case 1:
             case 2:
                 return true;
             default:
                 return false;
         }
     }

     //isForFamilyHistory
     function isForFamilyHistory(questionNum) {
         switch (questionNum) {
             case 3:
             case 4:
             case 5:
             case 6:
             case 7:
             case 8:
             case 9:
                 return true;
             default:
                 return false;
         }
     }

     return {
         "ageOnsetScore": ageOnsetScore,
         "ageOnsetRange": ageOnsetRange,
         "familyHistoryScore": familyHistoryScore,
         "familyHistoryRange": familyHistoryRange,
         "ageOnsetCounselorSpeech": "For your risk for future alcohol-related problems, the age of onset of drinking or alcohol problems is " +
         ageOnsetRange + " and the family history is " + familyHistoryRange
     };
 }
 else {
     return {
         "ageOnsetScore": -1,
         "ageOnsetRange": -1,
         "familyHistoryScore": -1,
         "familyHistoryRange": -1,
         "ageOnsetCounselorSpeech": -1
     };
 }
}

function OtherDrugs(responses) {

    // let ever = responses[0].answer[0];
    // let last3months = responses[1].answer[0];
    // let weekly = responses[2].answer[0];
    //
    // let otherDrugRange = "";

    // //for high range the user has used:
    // //cocaine ever, opiods ever, marijuana weekly, tranquilizers weekly, stimulants weekly, or sedatives weekly
    // if (ever.includes(2) | ever.includes(3) | weekly.includes(0) | weekly.includes(7) | weekly.includes(1) | weekly.includes(9)) {
    //     otherDrugRange = "High";
    //     return {"otherDrugRange": otherDrugRange};
    // }
    // //for medium range the user has used:
    // //Marijuana ever, stimulants ever, tranquilizers ever, sedatives ever
    // else if (weekly.includes(9) | ever.includes(0) | ever.includes(1) | ever.includes(7) | ever.includes(9)) {
    //     otherDrugRange = "Medium";
    //     return {"otherDrugRange": otherDrugRange};
    // }
    // //for all other return low
    // else {
    //     otherDrugRange = "Low";
    //     return {
    //         "otherDrugRange": otherDrugRange,
    //         "otherDrugsCounselorSpeech": "For your risk for future alcohol-related problems, the other drug use (history or current use) is " + otherDrugRange
    //     };
    // }

    if(responses.length == 3) {

        console.log("parse responses");
        console.log(responses.length);
        let ever = responses[0].answer[0];
        let last3months = responses[1].answer[0];
        let weekly = responses[2].answer[0];

        let otherDrugRange = "";

        //for high range the user has used:
        //cocaine ever, opiods ever, marijuana weekly, tranquilizers weekly, stimulants weekly, or sedatives weekly
        if (ever.includes(2) | ever.includes(3) | weekly.includes(0) | weekly.includes(7) | weekly.includes(1) | weekly.includes(9)) {
            otherDrugRange = "<p style='color: #C21B1B;'>High</p>";
            return {"otherDrugRange": otherDrugRange};
        }
        //for medium range the user has used:
        //Marijuana ever, stimulants ever, tranquilizers ever, sedatives ever
        else if (weekly.includes(9) | ever.includes(0) | ever.includes(1) | ever.includes(7) | ever.includes(9)) {
            otherDrugRange = "<p style='color: #C0A548;'>Medium</p>";
            return {"otherDrugRange": otherDrugRange};
        }
        //for all other return low
        else {
            otherDrugRange = "<p style='color: #2B710A;'>Low</p>";
            return {
                "otherDrugRange": otherDrugRange,
                "otherDrugsCounselorSpeech": "For your risk for future alcohol-related problems, the other drug use (history or current use) is " + otherDrugRange
            };
        }
    }
    else
    {
        return {
            "otherDrugRange": "unavailable",
            "otherDrugsCounselorSpeech": "For your risk for future alcohol-related problems, the other drug use (history or current use) is " + "unavailable"
        };
    }
}

function Dependence(responses)
{
    if(responses.length != 0)
    {
        //sort response by order number
        responses = responses.sort(compareByOrder);

        responses = responses.splice(1, 20);
        let icqArr = responses.splice(0, 5);
        let sadqArr = responses;

        let impairedControlScore = 0;
        let impairedControlRange = "";
        let totalScore = 0;
        let totalRange = "";

        icqArr.forEach(function (response) {

            if (invertAnswerWeight(response.order)) {
                impairedControlScore += (3 - Number(response.answer[0]));
            } else {
                impairedControlScore += Number(response.answer[0]);
            }
        });

        sadqArr.forEach(function (response) {
            totalScore += Number(response.answer[0]);
        });

        if (impairedControlScore <= 4) {
            impairedControlRange = "<p style='color: #2B710A;'>Low</p>";
        } else if (impairedControlScore <= 7) {
            impairedControlRange = "<p style='color: #C0A548;'>Medium</p>";
        } else if (impairedControlScore <= 12) {
            impairedControlRange = "<p style='color: #C21B1B;'>High</p>";
        } else {
            impairedControlRange = "<p style='color: #761414;'>Very High</p>";
        }

        if (totalScore <= 12) {
            totalRange = "<p style='color: #2B710A;'>Low</p>";
        } else if (totalScore <= 24) {
            totalRange = "<p style='color: #C0A548;'>Medium</p>";
        } else if (totalScore <= 36) {
            totalRange = "<p style='color: #C21B1B;'>High</p>";
        } else {
            totalRange = "<p style='color: #761414;'>Very High</p>";
        }


        return {
            "impairedControlScore": impairedControlScore,
            "impairedControlRange": impairedControlRange,
            "totalScore": totalScore,
            "totalRange": totalRange,
            "dependenceCounselorSpeech": "The total score for dependence is  " + totalScore + " which is considered " + totalRange +
            " and also, your score for impaired control over drinking is " + impairedControlScore + " which is considered " + impairedControlRange
        };


        function invertAnswerWeight(questionNumber) {
            switch (questionNumber) {
                case 4:
                case 7:
                    return true;
                default:
                    return false;
            }
        }
    }
    else {
        return {
            "impairedControlScore": -1,
            "impairedControlRange": -1,
            "totalScore": -1,
            "totalRange": -1,
            "dependenceCounselorSpeech": -1
        };
    }
}

function getDrincImpulsePercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentImpulseMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentImpulseFemale[score];
    }
}

function getDrincInterPercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentInterpersonalMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentInterpersonalFemale[score];
    }
}

function getDrincTotPercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentTotalMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentTotalFemale[score];
    }
}

function getDrincIntraPercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentIntrapersonalMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentIntrapersonalFemale[score];
    }
}

function getDrincPhysicalPercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentPhysicalMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentPhysicalFemale[score];
    }
}

function getDrincSocialPercentile(gender, score) {
    if (gender == 'Male') {
        return Constants.DRINC_PERCENTILES.RecentSocialMale[score];
    } else {
        return Constants.DRINC_PERCENTILES.RecentSocialFemale[score];
    }
}

function getDrincRange(percentile) {
    if (percentile < 30) {
        return "<p style='color: #163B05;'>Very Low</p>";
    } else if (percentile <= 49) {
        return "<p style='color: #2B710A;'>Low</p>";
    } else if (percentile <= 69) {
        return "<p style='color: #C0A548;'>Medium</p>";
    } else if (percentile <= 89) {
        return "<p style='color: #C21B1B;'>High</p>";
    } else {
        return "<p style='color: #761414;'>Very High</p>";
    }
}

function GoodThings(responses) {
    if(responses.length != 0) {
        var tmp = {};

        responses.forEach(function (e) {

            //console.log(e);
            if ((e.type == "Content") && (e.order == 0)) {
                tmp = e;
            }
        });

        return {
            "goodThingsResponses": tmp.answer,
            "goodThingsText": ""
        }
    }
    else{
        return {
            "goodThingsResponses": -1,
            "goodThingsText": -1
        }
    }

}

function NotGoodThings(responses) {
    if(responses.length != 0)
    {
        var tmp = {};

        responses.forEach(function(e){

            //console.log(e);
            if ((e.type == "Content") && (e.order == 0))
            {
                tmp = e;
            }});

        return {
            "notGoodThingsResponses": tmp.answer,
            "notGoodThingsText": ""
        }
    }
   else
    {
        return {
            "notGoodThingsResponses": -1,
            "notGoodThingsText": -1
        }
    }

}

function Alternatives(responses) {
    if(responses.length != 0) {
        var tmp = {};

        responses.forEach(function (e) {

            //console.log(e);
            if ((e.type == "Content") && (e.order == 0)) {
                tmp = e;
            }
        });

        return {
            "Alternatives": tmp.answer,
            "Alternatives": ""
        }
    }
    else{
        return {
            "Alternatives": -1,
            "Alternatives": -1
        }
    }

}

module.exports = {
    calculate: (formName, responses, userStats) => {
        switch (formName) {
            case Constants.AUDIT_ID:
                return Audit(responses);
            case Constants.BDP_ID:
                return BDP(responses);
            case Constants.BAC_ID:
                return BAC(responses, userStats);
            case Constants.DRINC_ID:
                return DRINC(responses, userStats);
            case Constants.SOCRATES_ID:
                return SOCRATES(responses);
            case Constants.SADQC_ID_A:
                return SADQC(responses);
            case Constants.SADQC_ID_B:
                return SADQC(responses);
            case Constants.SADQC_ID_C:
                return SADQC(responses);
            case Constants.DEPRESSION_ID:
                return Depression(responses);
            case Constants.MAST_ID:
                return Mast(responses);
            case Constants.AGEONSET_FAMILYHIS_ID:
                return AgeOnsetFamilyHis(responses);
            case Constants.OTHER_DRUGS_ID:
                return OtherDrugs(responses);
            case Constants.DEPENDENCE_ID:
                return Dependence(responses);
            case Constants.GOOD_THINGS_ID:
                return GoodThings(responses);
            case Constants.NOTGOOD_THINGS_ID:
                return NotGoodThings(responses);
            case Constants.ALTERNATIVES:
                return Alternatives(responses);
            default:
                return null;
        }
    }
};