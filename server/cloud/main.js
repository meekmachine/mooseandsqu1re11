const Scoring = require('../extras/scoring');
const Constants = require('../extras/constants');

const Promise = require("bluebird");

const Form = Parse.Object.extend('Form');
const Element = Parse.Object.extend('Element');
const User = Parse.Object.extend('User');
const Response = Parse.Object.extend('Response');
const Role = Parse.Object.extend("_Role");
const Progress = Parse.Object.extend("Progress");

//before you calculate all scores check if any surveys are complete by user
    //if no survey is complete do nothing
    //else continue with calculations



function calculateScoreByForm(user, formID){

    if(user && formID){
        let elementQuery = new Parse.Query(Element);
        let userStats = {
            "weight": user.get("weight"),
            "gender": user.get("gender"),
            "age": user.get("age")
        };


        if(formID === Constants.SADQC_ID_A || formID === Constants.SADQC_ID_B || formID === Constants.SADQC_ID_C){
            let SADQC_A_Query = new Parse.Query(Element);
            let SADQC_B_Query = new Parse.Query(Element);
            let SADQC_C_Query = new Parse.Query(Element);

            //section A
            SADQC_A_Query.equalTo("form", new Form({ id: Constants.SADQC_ID_A }));
            SADQC_A_Query.equalTo("type", "QuestionAnswer");
            //Section B
            SADQC_B_Query.equalTo("form", new Form({ id: Constants.SADQC_ID_B }));
            SADQC_B_Query.equalTo("type", "QuestionAnswer");
            //Section C
            SADQC_C_Query.equalTo("form", new Form({ id: Constants.SADQC_ID_C }));
            SADQC_C_Query.equalTo("type", "QuestionAnswer");

            elementQuery = new Parse.Query.or(SADQC_A_Query, SADQC_B_Query, SADQC_C_Query);
        } else {
            elementQuery.equalTo("form", new Form({ id: formID }));
        }

        let responseQuery = new Parse.Query(Response);

        responseQuery.equalTo("user", user);
        responseQuery.matchesQuery("element", elementQuery);
        responseQuery.include("element");

        return responseQuery.find().then(
            docs => {
                let responses = docs.map((doc) => {
                    return {
                        type: doc.get('element').get('type'),
                        order: doc.get('element').get('order'),
                        answer: doc.get('answer')
                    }
                });

                return {
                    message: 'Your score was calculated successfully',
                    score: Scoring.calculate(formID, responses, userStats)
                }
            }
        );
    }


}

// if response for element exists, just update answer. else create a new one
Parse.Cloud.define("addResponse", function(req, res) {
    let user = req.user;
    let elemID = req.params.elemID;
    let answer = req.params.answer;

    if(!user || !elemID || !answer) {
        if(!user){
            res.error("User not provided or invalid!")
        }else if(!elemID){
            res.error("Element not provided or invalid!")
        }else if(!answer){
            res.error("Answer not provided or invalid!")
        }else{
            res.error("User, entry, or answer not provided or invalid!")
        }

    } else {
        let responseQuery = new Parse.Query(Response);

        responseQuery.equalTo('element', new Element({ id: elemID }));
        responseQuery.equalTo('user', user);

        responseQuery.first().then(
            doc => {
                if(doc) {
                    doc.set('answer', answer);
                    doc.save(null);

                    res.success('Response was updated successfully');
                } else {
                    let newdoc = new Response();

                    newdoc.set('answer', answer);
                    newdoc.set('user', user);
                    newdoc.set('element', new Element({ id: elemID }));

                    newdoc.save(null);

                    res.success('New response was created.')
                }
            },
            error => res.error(error)
        );
    }
});

transferResponseToCurrent = function (toUser, answerObject) {
    let user = toUser;
    let elemID = answerObject.elemID;
    let answer = answerObject.answer;

    if(!user || !elemID || !answer) {
        if(!user){
            return "User not provided or invalid!";
        }else if(!elemID){
            return "Element not provided or invalid!";
        }else if(!answer){
            return "Answer not provided or invalid!";
        }else{
            return "User, entry, or answer not provided or invalid!";
        }

    } else {
        let responseQuery = new Parse.Query(Response);
        console.log("in xsfr helper function cloud code");

        responseQuery.equalTo('element', new Element({ id: elemID }));
        responseQuery.equalTo('user', user);

        responseQuery.first().then(
            doc => {
                if(doc) {
                    doc.set('answer', answer);
                    doc.save(null);

                    console.log('Response was updated successfully');
                    //res.success('Response was updated successfully');
                } else {
                    let newdoc = new Response();

                    newdoc.set('answer', answer);
                    newdoc.set('user', user);
                    newdoc.set('element', new Element({ id: elemID }));

                    newdoc.save(null);

                    return 'New response was created.';
                    //res.success('New response was created.')
                }
            },
            error => //res.error(error)
            {
               return error;
            }
        );
    }
};


Parse.Cloud.define("calculateFormScore", (req, res) => {
     let user = req.user;
     let formID = req.params.formID;

     if(!user || !formID) {
         res.error("User or form not provided or invalid!")
     } else {
         calculateScoreByForm(user, formID).then(
             score => res.success(score),
             error => res.error(error)
         );
     }
 });

Parse.Cloud.define("calculateAllScores", (req, res) => {
    let user = req.user;


    let promises = [
        calculateScoreByForm(user, Constants.AUDIT_ID),
        calculateScoreByForm(user, Constants.BDP_ID),
        calculateScoreByForm(user, Constants.DRINC_ID),
        calculateScoreByForm(user, Constants.SOCRATES_ID),
        calculateScoreByForm(user, Constants.SADQC_ID_A),
        calculateScoreByForm(user, Constants.BAC_ID),
        calculateScoreByForm(user, Constants.DEPRESSION_ID),
        calculateScoreByForm(user, Constants.MAST_ID),
        calculateScoreByForm(user, Constants.AGEONSET_FAMILYHIS_ID),
        calculateScoreByForm(user, Constants.OTHER_DRUGS_ID),
        calculateScoreByForm(user, Constants.DEPENDENCE_ID),
        calculateScoreByForm(user, Constants.GOOD_THINGS_ID),
        calculateScoreByForm(user, Constants.NOTGOOD_THINGS_ID),
        calculateScoreByForm(user, Constants.ALTERNATIVES),
    ];

    Parse.Promise.when(promises).then(
        scores => {
            res.success({
                audit: scores[0],
                bdp: scores[1],
                drinc: scores[2],
                socrates: scores[3],
                sadqc: scores[4],
                bac: scores[5],
                depression: scores[6],
                mast: scores[7],
                ageOnsetFamilyHis: scores[8],
                otherDrugs: scores[9],
                dependence: scores[10],
                goodThings: scores[11],
                notGoodThings: scores[12],
                alternatives: scores[13]
            });
        },
        error => res.error(error)
    )
});

Parse.Cloud.define("updatePW", (req,res) =>{

   let usrId = req.params.updateUsr;
   let newPW = req.params.newPW;

   let FindUsr = Parse.Object.extend("User");
   let usrQuery = new Parse.Query(FindUsr);

   usrQuery.equalTo("objectID", usrId);
   usrQuery.first(
       usr => {
           usr.set("password", newPW);
           usr.save(null, {masterKey: true}).then(
               success => res.success(success),
               error => res.error(error)
           )
       },
       err => res.error(err)
   );


});

Parse.Cloud.define("addToAdminGroup", (req, res) => {


    let usrID = req.params.userToAdmin;
    let roleQuery = new Parse.Query(Role);

    let queryUsrs = new Parse.Query(FindUser);
    let FindUser = Parse.Object.extend("User");

    //find user object to be added to admin group
    queryUsrs.equalTo("username", usrID);
    queryUsrs.find(
        usr => {

            //when user object is found query roles for Administrator roll
            let newAdmin = usr[0];

            //when
            roleQuery.equalTo("name", "Administrator");
            roleQuery.find(
                roles => {

                    //when administrator role is found create a new relation user the user object retrieved
                    //add that relation to the role and save
                    let roleObject = roles[0];
                    let relation = roleObject.relation("users");
                    relation.add(newAdmin);
                    roleObject.save().then(
                        success => res.success(success),
                        error => {
                            res.error(error);
                        }
                    );
                },
                error => {
                    res.error(error);
                }

            );
        },
        error => {
            res.error(error);
        }
    );


});

Parse.Cloud.define("getUserName", function(request, response) {

    const FindUser = Parse.Object.extend("User");
    const query = new Parse.Query(FindUser);
    let user = request.user;

    query.equalTo("id", user.objectId);
    query.first({
        success: function(result){
            let givenName = result.get("firstName");
            response.success({
                "userGivenName": givenName
            });
        },
        error: function(error){
            console.log("Error: " + error.code + " " + error.message);
        }
    });
});

//Todo-EJH :  Add code to register new users to administrator group


//addMultiple from temp responses
function addMultiResFromTemp(usr, multiResArray){

    let user = usr;

    let promises = [];

    multiResArray.forEach(function (ans){
        promises.push(addResponseFromTemp(user, ans));
    });

    Parse.Promise.when(promises).then(

    );


}


//used to transfer responses from temp user to current user
Parse.Cloud.define("transferResFromTemp", (req, res) => {
    let user = req.user;
    let tempUserID = req.params.tempUserID;

    if(!user || !tempUserID){
        if(!user){
            res.error("User not provided! Transfer unsuccessful.");
        } else if(! tempUserID){
            res.error("Temporary user not provided! Transfer unsuccessful.");
        }else{
            res.error("User or temporary user not provided! Transfer unsuccessful.");
        }
    }
    else{

        let responseQuery = new Parse.Query(Response);

        responseQuery.equalTo('user', new User({ id: tempUserID }));


        responseQuery.find().then(
            responses => {
                responses.forEach(function (ans){
                   let tmp = {
                       elemID: ans.get('elemID'),
                       answer: ans.get('answer')
                   };

                    transferResponseToCurrent(user, tmp);
                });
        },
            error => {
                res.error("Error transferring the responses Temp -> Current.");
            }
        );
    }
});




