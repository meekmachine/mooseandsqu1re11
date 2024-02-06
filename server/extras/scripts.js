const Constants = require('../extras/constants');

let express = require('express');
let router = express.Router();

let Parse = require('parse/node');

let Added = Parse.Object.extend('Added');
let Intervention = Parse.Object.extend('Intervention');
let Element = Parse.Object.extend('Element');
let Form = Parse.Object.extend('Form');
let Response = Parse.Object.extend('Response');
let User = Parse.Object.extend('User');

let mongojs = require('mongojs');
let db = mongojs('test', ['added', 'intervention', 'form', 'element']);

// --- INTERVENTION --- //
router.get('/transfer/intervention/insert', (req, res) => {
    db.interventions.find({}, (err, docs) => {
        if(err) throw err;

        docs.forEach(doc => {
            let obj = new Intervention();

            obj.set('oldId', doc._id + '');
            obj.set('name', doc.name);

            obj.save(null);
        });

        res.send('Completed Job: transfer-intervention-insert');
    })
});

// --- FORM --- //
router.get('/transfer/form/insert', (req, res) => {
    db.forms.find({}, (err, docs) => {
        if(err) throw err;

        let query = new Parse.Query(Intervention);

        query.find({
            success: results => {
                 docs.forEach(doc => {
                    let obj = new Form();

                    obj.set('oldId', doc._id + '');
                    obj.set('name', doc.name);

                    let intRef = results.find(r => r.get('oldId') == doc.intervention_id);

                    if(intRef) {
                        obj.set('intervention', intRef);
                        obj.save(null);
                    }
                });

                res.send('Completed Job: transfer-form-insert');
            },
            error: error => res.error(error)
        });
    });
});

// --- ELEMENT --- //
router.get('/transfer/element/insert', (req, res) => {
    db.elements.find({}, (err, docs) => {
        if(err) throw err;

        let query = new Parse.Query(Form);

        query.find({
            success: results => {
                docs.forEach((doc, index) => {
                    let obj = new Element();

                    obj.set('oldId', doc._id + '');
                    obj.set('type', doc.type);
                    obj.set('order', doc.order);
                    obj.set('lang', doc.lang);
                    obj.set('deleted', doc.deleted);
                    obj.set('html', doc.html || "");


                    let phrase = (doc.text instanceof Array) ? doc.text.map(t => t.feedback_text) : [];
                    if(!(doc.text instanceof Array) && doc.text != null) phrase.push(doc.text);
                    obj.set('phrase', phrase);

                    let content = (doc.content instanceof Array) ? doc.content.map(c => c.answer_text) : [];
                    obj.set('content', content);

                    let formRef = results.find(r => r.get('oldId') == doc.form_id);

                    if(formRef) {
                        obj.set('form', formRef);
                        obj.save(null);
                    } else console.log(index + ' was not saved due to invalid form id');

                    console.log(index);
                });

                res.send('Completed Job: transfer-element-insert');
            },
            error: error => res.error(error)
        });
    });
});

// --- ADDED --- //
router.get('/transfer/added/insert', (req, res) => {
    db.added.find({}, (err, docs) => {
        if(err) throw err;

        docs.forEach(doc => {
            let obj = new Added();

            obj.set('oldId', doc._id + '');
            obj.set('name', doc.name);
            obj.set('before', doc.before || '');
            obj.set('execute', doc.execute || '');
            obj.set('primitive', doc.primitive || false);
            obj.set('desc', doc.desc || '');
            obj.set('init', doc.init);

            obj.save(null);
        });

        res.send('Completed Job: transfer-added-insert');
    });
});
router.get('/transfer/added/fix', (req, res) => {
    let query = new Parse.Query(Added);

    query.find({
        success: addeds => {
            addeds.forEach(obj => {
                let init = obj.get('init');

                init.states.forEach(state => {
                    let ref = addeds.find(o => o.get('oldId') == state.class);
                    state.class = ref.id;
                });

                obj.set('init', init);
                obj.save(null);
            });

            res.send('Completed Job: transfer-added-fix');
        },
        error: error => res.send(error)
    });
});
router.get('/transfer/added/hasParams', (req, res) => {
    let query = new Parse.Query(Added);

    query.find({
        success: results => {
            let answers = [];

            results.forEach(o => {
                let states = o.get('init').states;
                let hasParam = false;

                states.forEach(s => {
                    s.params.forEach(p => {
                        hasParam = hasParam || p;
                    })
                });

                if(hasParam) answers.push(states);
            });

            res.send(answers);
        },
        error: error => res.error(error)
    })
});




// --- Generate user results for SADQC --- //
router.get('/populate/usrResponses/SADQC', (req, res) => {
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

    //main query
    let SADQC_Query = new Parse.Query.or(SADQC_A_Query, SADQC_B_Query, SADQC_C_Query);



    SADQC_Query.find({
        success: results => {

            results.forEach(doc => {
                let obj = new Response();

                let randomAns = [];

                randomAns.push(Math.floor(Math.random() * 4) + 1);
                let el = Element.createWithoutData(doc.id);
                let usr = User.createWithoutData('udimWZI6Yi');

                obj.set ('user', usr);
                obj.set ('element', el);
                obj.set ('answer', randomAns);


                obj.save(null);



            });

            res.send('Completed Job: populate-usrResponses-SADQC');
        },
        error: error => res.error(error)
    });

});

// --- Generate user results for Audit --- //
router.get('/populate/usrResponses/Audit', (req, res) => {
    let audit_query = new Parse.Query(Element);


    //find all elements associated with the audit intervention
    audit_query.equalTo("form", new Form({ id: Constants.AUDIT_ID }));
    audit_query.equalTo("type", "QuestionAnswer");

    audit_query.find({
        success: results => {

            results.forEach(doc => {
                let obj = new Response();

                //create random response populate number between 1 and 4
                let randomAns = [];
                randomAns.push(Math.floor(Math.random() * 4) + 1);

                //create the element pointer and the usr pointer to be added to the the response object
                let el = Element.createWithoutData(doc.id);
                //manually pass the user's id that the responses will be associated with
                let usr = User.createWithoutData('udimWZI6Yi');

                obj.set ('user', usr);
                obj.set ('element', el);
                obj.set ('answer', randomAns);


                obj.save(null);



            });

            res.send('Completed Job: populate-usrResponses-Audit');
        },
        error: error => res.error(error)
    });

});

// --- Generate user results for SOCRATES --- //
router.get('/populate/usrResponses/SOCRATES', (req, res) => {
    let SOCRATES_query = new Parse.Query(Element);


    //find all elements associated with the SOCRATES intervention
    SOCRATES_query.equalTo("form", new Form({ id: Constants.SOCRATES_ID }));
    SOCRATES_query.equalTo("type", "QuestionAnswer");

    SOCRATES_query.find({
        success: results => {

            results.forEach(doc => {
                let obj = new Response();

                //create random response populate number between 1 and 4
                let randomAns = [];
                randomAns.push(Math.floor(Math.random() * 4) + 1);

                //create the element pointer and the usr pointer to be added to the the response object
                let el = Element.createWithoutData(doc.id);
                //manually pass the user's id that the responses will be associated with
                let usr = User.createWithoutData('udimWZI6Yi');

                obj.set ('user', usr);
                obj.set ('element', el);
                obj.set ('answer', randomAns);


                obj.save(null);



            });

            res.send('Completed Job: populate-usrResponses-SOCRATES');
        },
        error: error => res.error(error)
    });

});

// --- Generate user results for DRINC --- //
router.get('/populate/usrResponses/DRINC', (req, res) => {
    let DRINC_query = new Parse.Query(Element);


    //find all elements associated with the DRINC intervention
    DRINC_query.equalTo("form", new Form({ id: Constants.DRINC_ID }));
    DRINC_query.equalTo("type", "QuestionAnswer");

    DRINC_query.find({
        success: results => {

            results.forEach(doc => {
                let obj = new Response();

                //create random response populate number between 0 and 3
                let randomAns = [];
                randomAns.push(Math.floor(Math.random() * 4));

                //create the element pointer and the usr pointer to be added to the the response object
                let el = Element.createWithoutData(doc.id);
                //manually pass the user's id that the responses will be associated with
                let usr = User.createWithoutData('udimWZI6Yi');

                obj.set ('user', usr);
                obj.set ('element', el);
                obj.set ('answer', randomAns);


                obj.save(null);



            });

            res.send('Completed Job: populate-usrResponses-DRINC');
        },
        error: error => res.error(error)
    });

});

// --- Generate user results for DRINC --- //
router.get('/populate/usrResponses/DRINC', (req, res) => {
    let DRINC_query = new Parse.Query(Element);


    //find all elements associated with the DRINC intervention
    DRINC_query.equalTo("form", new Form({ id: 'nAHq0wNk4j' }));
    DRINC_query.equalTo("type", "QuestionAnswer");

    DRINC_query.find({
        success: results => {

            results.forEach(doc => {
                let obj = new Response();

                //create random response populate number between 1 and 4
                let randomAns = [];
                randomAns.push(Math.floor(Math.random() * 4) + 1);

                //create the element pointer and the usr pointer to be added to the the response object
                let el = Element.createWithoutData(doc.id);
                //manually pass the user's id that the responses will be associated with
                let usr = User.createWithoutData('KD4A9QVpzt');

                obj.set ('user', usr);
                obj.set ('element', el);
                obj.set ('answer', randomAns);


                obj.save(null);


            });

            res.send('Completed Job: populate-usrResponses-DRINC');
        },
        error: error => res.error(error)
    });

});

// --- initialize elementflags to false --- ///
router.get('/populate/initElementFlags', (req, res) => {
    let elementQuery = new Parse.Query(Element);

    elementQuery.limit(1000);
    elementQuery.find({
        success: results =>{
            results.forEach(doc => {

                //initialize all element flags to false
                doc.set('isRecorded', false);
                doc.set('displayBackBtn', false);
                doc.set('displayProgress', false);
                doc.save(null);
            });
            res.send('Completed Job: init element flags to false!!!');

        },
        error: error => res.error(error)
    });
});

// --- retro add missing elementflags --- ///
router.get('/populate/retroElementFlags', (req, res) => {
    let elementQuery = new Parse.Query(Element);
    let allGreen = [
        "entTOZcC7x",
        "jSbe0y9yo8",
        "UwhNedrfDF",
        "brRbraVeTe",
        "tpEo1xFKXk",
        "pKnT4rw0q0",
        "f5poCM6Gwq",
        "WfgNctUyc9",
        "uLqHs3Cdon",
        "VtxPtGv9Vv",
        "RnNNlOBTQd",
        "ZBV1DmYjhP",
        "EvAGJWHkWQ",
        "DRMwnfMBq2",
        "Z6SYhFUMv7",
        "10oWTuZIat",
        "APluU5Dc6l",
        "IISlXLUAzC",
        "wNj7vCeMXz",
        "pleBxUHgyt",
        "mR3X2pZszK",
        "rvYjxAukwA",
        "qPjT3Q1sXr",
        "lfaPYb8211",
        "VOKthC7rpT",
        "b3OOreWXJ5",
        "Ud8heugqCQ",
        "r6ZkJCdBEz",
        "f8B0ihkAKr",
        "VLutfNbPnB",
        "BmqCFA3LpF",
        "XTxMZ7TJ4h",
        "7C7lYsNVrG",
        "yQhfDjY1Hv",
        "ESzTFSxNqP",
        "VNpgWGgR4M",
        "skEnfaheGA",
        "u0M8THtHeu",
        "DO85GeUxhE",
        "3z52fzxiYn",
        "ZEBeQFKqD6",
        "HsJFBrsREs",
        "AvCFAxuxUF",
        "vRMntIjuE2",
        "bYjn7kpxgy",
        "NB7AzeSBRH",
        "rSlFWovcfk",
        "cKiSS5MKkf",
        "Muxcv4Ua10",
        "6cBmIYiTKC",
        "tWHgD3sg4A",
        "YHmKYTz5Y5",
        "tBryo4ALxF",
        "GuFCbEhXOV",
        "dSQV6eGkSu",
        "PzQplrhIWi",
        "CSKw4wbij4",
        "GggkBmfJ7o",
        "XLn7eaEH96",
        "AJycKpEegc",
        "1wjSdhf2eM",
        "9WHQFfzF4J",
        "Rf7rQvJfOt",
        "udBLvwkRax",
        "KQlF0k42wm",
        "t5Vll6TJyu",
        "jLu5TZtwYU",
        "8Qz0T7pwMZ",
        "UqgD7PlgW3",
        "83FfJ9Zq3M",
        "oMop003d7A",
        "YHvVH5MqP1",
        "jUnJEgy9dm",
        "igQMYRzHJa",
        "XD5NKWQKhc",
        "S9UOlj8XAS",
        "QqcaH4ZiJM",
        "OmbUxx1Jha",
        "Et0gmveEIz",
        "rqnLEOB52H",
        "2oKhO7mWbO",
        "v9frAvBSJq",
        "a4QamiGCA3",
        "bGlMCixyKA",
        "wMWqoTE1gA",
        "k2ip8q0K2L",
        "xdA8C0leeD",
        "Wv4wzrJp0T",
        "WPjoWWTdGW",
        "7uAQj46Kc9",
        "Rvg0whSSHr",
        "ySxADohMIJ",
        "gCf1E8xcBt",
        "VlJABvnKDr",
        "6HjTndVKpf",
        "Gzv94vSMlK",
        "WDYFKBp4Ra",
        "o0gfHVKiZo",
        "8kksZw0b1i",
        "tPbHqZDc4F",
        "xX6fmHzV8a",
        "NTEyjG7JaV",
        "3b8HApHIsW",
        "9PV3mDHsYj",
        "o3Vvd9PuV4",
        "7hrQrRkroo",
        "fcrMyhewqP",
        "XnBeaqJpLP",
        "EoNDjbREoC",
        "TRbkGxXZij",
        "anKnOz2zw9",
        "NebDyUe5qg",
        "EbJlYYgmON",
        "wnj3m1I4fr",
        "da57qkCJJx",
        "lTBnnPVswQ",
        "XPNbG5yWKK",
        "FSxb56512e",
        "tZqTfnFqFk",
        "G4RdTw8AlV",
        "lkq0iDzd7Z",
        "Ww5xSMi2CC",
        "wsCQRHjYkg",
        "LW2xfnSTxl",
        "3GuR72PJfe",
        "P3h1vN21qh",
        "2M78gEZsmt",
        "sFMai1HlQC",
        "DffMpv7KJi",
        "yQyMx17bXy",
        "GivFm6vAUY",
        "AAtW0GCLKn",
        "e1yYpKX6jG"
    ];
    let recRes=[
        "PEOFZ3qPHR",
        "QGPgGLjWyA",
        "B4r2DavPKN",
        "EFwmDRi9mP",
        "Q9AJDNzBvp",
        "rWxrQmpzuQ",
        "jo4cPjzut6",
        "z4ZsW1bPDV",
        "BFD47U83Iq",
        "IJcTOH7fGb",
        "CE4Ge7Ef5C",
        "QX0r4YpuJ8",
        "ShEMQnTgqf",
        "lSiGMOMHU8",
        "78BLm9MBpE",
        "yyoxVVcAab",
        "RK8YwrJpfY",
        "AorCQw5s8E",
        "0bvCmfrQRW",
        "7OSbtDgNaJ",
        "SeVTcHFIay",
        "dGEPabn1Ep",
        "rIvJXxYLTl",
        "BlvaYxG37R",
        "X6nG0tjdY2",
        "GwiNwPQv0U",
        "x7KAIp6Rec",
        "X6WjMdqa2P",
        "PBuf3sVCCj",
        "wEl6CRXHap",
        "nrFKqQekln",
        "UY59yLDhwG",
        "wPFh7S9lhn",
        "JrWYjpNoTq",
        "P8ZORJCP2t",
        "480OIkUfRe",
        "is6vw6wRnG",
        "ifNdWJqYco"
    ];
    let disBackBtn = [
        "0OcF0WWPsl",
        "uwT5nhssr2",
        "qPjT3Q1sXr",
        "lfaPYb8211",
        "VOKthC7rpT",
        "b3OOreWXJ5",
        "Ud8heugqCQ",
        "r6ZkJCdBEz",
        "wPFh7S9lhn",
        "v6ZHzQQ3di",
        "2ryq9FqhYi",
        "f8B0ihkAKr",
        "EMQoUI4ylK",
        "F94yWz8Ail",
        "zhvTNKV7iQ",
        "VLutfNbPnB",
        "ifNdWJqYco",
        "aA9pZ22a1v",
        "UvgcjFpYCS",
        "UY59yLDhwG",
        "A8IDB7DpE6",
        "OXRtsBdAK3",
        "GgpaY6JAg0",

    ];
    let disProgress = [
        "wEl6CRXHap",
        "nrFKqQekln",
        "UY59yLDhwG",
        "wPFh7S9lhn",
        "JrWYjpNoTq",
        "P8ZORJCP2t",
        "480OIkUfRe",
        "is6vw6wRnG",
        "mLFI2ld44G",
        "QGPgGLjWyA",
        "OqC8fl1aWl",
        "B4r2DavPKN",
        "uH1D1w9skU",
        "EFwmDRi9mP",
        "uyfGCdySxH",
        "Q9AJDNzBvp",
        "Lduogjsbq4",
        "rWxrQmpzuQ",
        "pJozGIUFTq",
        "jo4cPjzut6",
        "2SHjovRpAC",
        "ifNdWJqYco",
        "0OcF0WWPsl",
        "uwT5nhssr2",
        "qPjT3Q1sXr",
        "lfaPYb8211",
        "VOKthC7rpT",
        "b3OOreWXJ5",
        "Ud8heugqCQ",
        "r6ZkJCdBEz",
        "wPFh7S9lhn",
        "v6ZHzQQ3di",
        "2ryq9FqhYi",
        "f8B0ihkAKr",
        "EMQoUI4ylK",
        "F94yWz8Ail",
        "zhvTNKV7iQ",
        "VLutfNbPnB",
        "ifNdWJqYco",
        "aA9pZ22a1v",
        "UvgcjFpYCS",
        "UY59yLDhwG",
        "A8IDB7DpE6",
        "OXRtsBdAK3",
        "GgpaY6JAg0",
    ];
    elementQuery.limit(1000);
    let needSave = false;

    elementQuery.find({
        success: results =>{
            results.forEach(doc => {

                //set all flags true
                if(allGreen.includes(doc.id)){
                    doc.set('isRecorded', true);
                    doc.set('displayBackBtn', true);
                    doc.set('displayProgress', true);
                    needSave = true;
                }else{
                    if(recRes.includes(doc.id)){//set recRes flag true
                        needSave = true;
                        doc.set('isRecorded', true);
                    }
                    if(disBackBtn.includes(doc.id)){//set disBackBtn true
                        needSave = true;
                        doc.set('displayBackBtn', true);
                    }
                    if(disProgress.includes(doc.id)){//set disProgress true
                        needSave = true;
                        doc.set('displayProgress', true);
                    }
                }

                //save element
                if(needSave){
                    needSave = false;
                    doc.save(null);
                }
        });
            res.send('Completed Job: populate element flags!!!');

        },
        error: error => res.error(error)
    });
});

module.exports = router;