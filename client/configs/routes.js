/*
 *   Authors: Guido Ruiz, Daniel Rivero
 *
 *   Description: Below are all the routes of eEva, shared across all controllers. A route is a way of telling angular
 *   what controller / page to load when a particular URL is found on the web page. For example, localhost:3000/#/ is
 *   read by this route, and returned is the home.view.html with the controller homeController. In all the other files
 *   we've simply created the description of these controllers and web templates, but this route file is what actually
 *   puts them together, instantiates them, and gives to the user. The best way to think about this is the user visiting
 *   the home page and seeing a TV, and angular changes the chanel depending on what URL the user types (analogy of
 *   pressing buttons on a TV remote). The TV does not change, unlike older web pages, the TV (skeleton) of the site
 *   stays the same, but the content within it is swapped 'injected' with something else. This is why the web page never
 *   truly 'reloads' unlike older web pages.
 *
 *   NOTE that some routes have an extra 'htmlModules' and 'mainframeConfig'. These are used by the counseling
 *   controller because we have many different demos. We didn't want to create a separate page for each demo, instead,
 *   we let the counseling controller use these two files to know what character to load, what intervention to load,
 *   and what HTML blocks to load (camera? user button? unity or haptek? etc). You can create a custom key value pair
 *   if you need to for another controller based on the route similar to how we did it with the counseling controller.
 *
 *   You can add new routes by creating a new '.when' parameter. There is a catch '.otherwise' that handles any route
 *   in the URL not involving the ones dictated here. The routes should be self explanatory.
 */
angular.module('app').config(states);

states.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];

function states($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    //--------------------------------------------------------------------------------------------------------------
    /* PRODUCTION ROUTES */
    //--------------------------------------------------------------------------------------------------------------
/*  $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.view.html',
        controller: 'homeController'
    });
    */
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/welcome.view.html',
        controller: 'welcomeController'
    });
/*

    $stateProvider.state('home', {
        url: '/admin',
        templateUrl: 'views/home.view.html',
        controller: 'homeController'
    });
*/

    $stateProvider.state('password', {
        url: '/account/:token',
        templateUrl: 'views/password.view.html',
        controller: 'passwordController'
    });

    $stateProvider.state('machine', {
        url: '/machine/{edit}',
        params: { edit: null },
        templateUrl: "views/machine.view.html",
        controller: "machineController"
    });

    $stateProvider.state('editor', {
        templateUrl: "views/editor.view.html",
        controller: "editorController"
    });

    $stateProvider.state('welcome', {
        url: '/counseling',
        templateUrl: 'views/welcome.view.html',
        controller: 'welcomeController'
    });

    $stateProvider.state('counseling', {
        templateUrl: 'views/counseling.view.html',
        controller: 'counselingController'
    });


    //todo:  get rid of the one following state, this is for testing the feedback module
    $stateProvider.state('testUsrFeedback', {
        templateUrl: 'views/testFeedback/feedbackTEST.view.html',
        url: '/feedbackTEST'
    });
    //end of todo


    $stateProvider.state('feedback', {
        templateUrl: 'views/testFeedback/feedbackTEST.view.html',
        controller: 'scoreController'
    });

    $stateProvider.state('feedback.intervention', {
        url: '/feedbackTEST',
        templateUrl: 'views/testFeedback/selectIntervention.feedback.html'
    });

    $stateProvider.state('feedback.form', {
        templateUrl: 'views/testFeedback/selectForm.feedback.html'
    });




    $stateProvider.state('survey', {
        templateUrl: 'views/survey/newSurvey.html',
        controller: 'newSurveyController'
    });

    $stateProvider.state('survey.intervention', {
        url: '/survey',
        templateUrl: 'views/survey/selectIntervention.html'
    });

    $stateProvider.state('survey.form', {
        templateUrl: 'views/survey/selectForm.html'
    });

    $stateProvider.state('survey.element', {
        templateUrl: 'views/survey/selectElement.html'
    });

    $stateProvider.state('survey.editElement', {
        templateUrl: 'views/survey/editElement.html'
    });



    $stateProvider.state('surveyFormTest', {
        url: '/surveyFormTest',
        templateUrl: 'views/surveyFormTest.view.html'
    });

    $stateProvider.state('notYetMapped', {
        url: '/notYetMapped',
        templateUrl: 'views/not.yet.mapped.view.html',
        controller: 'notYetMappedController'
    });

    $stateProvider.state('webgl', {
        url: '/robocanes',
        data: {
            mainframeConfig: 'mainframe/configs/eEvaConfig.xml',
            htmlModules: ['userButton', 'userMenu','virtualys', 'contentView', 'cameraMenu', 'cameraButton', 'pauseButton', 'resumeButton', 'backButton', 'progressBar' ,'micButton', 'micSlash', 'myProgress']
 //           htmlModules: ['userButton', 'userMenu', 'elementPanel', 'virtualys', 'contentView', 'cameraMenu', 'cameraButton', 'pauseButton', 'resumeButton', 'backButton', 'progressBar' ,'micButton', 'micSlash', 'navBar', 'myProgress']
        },
        templateUrl: 'views/webgl.view.html',
        controller: 'webglController'
    });

    //--------------------------------------------------------------------------------------------------------------
    /* TESTING, DEBUGGING ROUTES */
    //--------------------------------------------------------------------------------------------------------------

    $stateProvider.state('office01', {
        url: "/demo/office/01",
        data: {
            mainframeConfig: 'mainframe/configs/dcuConfig.xml',
            htmlModules: ['userButton', 'userMenu', 'elementPanel', 'virtualys', 'contentView', 'cameraMenu', 'cameraButton', 'navbar', 'myProgress'],
            character: { // overrides user selected character
                id: "OFFICE_DEMO_01",
                img: "",
                type: "virtualys",
                name: "Office Demo 01",
                path: "unity/tests/FIU_WomanBlondHair_WithOffice_2017_02_16/"
            }
        },
        templateUrl: 'views/webgl.view.html',
        controller: 'webglController'
    });



    $urlRouterProvider.otherwise("/");

    localStorageServiceProvider.setPrefix('eEva');
}