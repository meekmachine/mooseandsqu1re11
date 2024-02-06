require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai');

let express = require('express');
let path = require('path');
let fs = require('fs');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let scripts = require('./server/extras/scripts');
let generator = require('./server/extras/generator.js');

let simpleMailGun = require('@parse/simple-mailgun-adapter');

let ParseServer = require('parse-server').ParseServer;
let ParseDashboard = require('parse-dashboard');
let Parse = require('parse/node');

Parse.initialize("83fy28yfh238");
Parse.masterKey = process.env.MASTER_KEY;

//note if running on local host user the following string for the Parse.serverURL:  http://localhost:3013/parse (note: 3013 is the port number that you are using to run eEVA)
//Parse.serverURL = 'https://virtualhealthcounseling.com/parse';
Parse.serverURL = 'http://localhost:3013/parse';

let Added = Parse.Object.extend('Added');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


let api = new ParseServer({
    databaseURI: process.env.DATABASE_URI, // Connection string for your MongoDB database
    //cloud: './eEvaParse/server/cloud/main.js', /*--IMPORTANT COMMENT THIS LINE OUT WHEN RUNNING LOCALLY see next lines's comments Absolute path to your Cloud Code----*/
    cloud: './server/cloud/main.js', /*--IMPORTANT UNCOMMENT THIS LINE WHEN RUNNING ON LOCALHOST see next lines's comments Absolute path to your Cloud Code----*/
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY, // Keep this key secret!
    fileKey: process.env.FILE_KEY,
    serverURL: process.env.SERVER_URL, // Don't forget to change to https if needed
    //Slunn002 added here to possibly allow mailgun implementation
    appName: 'eEva',
    publicServerURL: process.env.SERVER_URL,
    verifyUserEmails: true,
    emailAdapter: simpleMailGun({
        apiKey: '896b7ade212e13897f45f42b579caa54-770f03c4-f0c6cc93',
        domain: 'virtualhealthcounseling.com',
        fromAddress: 'virtualhealthcounseling@gmail.com'
    })
});

let dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": process.env.SERVER_URL,
            "appId": process.env.APP_ID,
            "masterKey": process.env.MASTER_KEY, // Keep this key secret!
            "appName": "eEva"
        }
    ]
});

app.use('/parse', api);
app.use('/dashboard', dashboard);

// TODO: must eventually become Parse Cloud code or deleted
app.use('/scripts', scripts);
app.get('/generate', (req, res) => {
    let query = new Parse.Query(Added);

    query.limit(1000);

    query.find().then(
        added => {
            let filePath = path.join(__dirname, './data/primitives');
            let prependCode = fs.readFileSync(filePath, {encoding: 'utf-8'}); //TODO: should not be sync

            res.type('text/plain');
            res.send(generator.smMaker(added, prependCode));
        },
        error => res.error(error)
    );
});
// TODO: end

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app; 