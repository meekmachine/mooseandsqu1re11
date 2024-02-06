/*
 *  Counseling Services
 *
 *  Authors: Guido Ruiz, Daniel Rivero
 *
 *  Description: Pretty much code that has been split away from the counseling controller, as it is tightly coupled with
 *  just getting HTML injects on the page and modifying them as such. Think of the HTML injects as building blocks that
 *  can be changed (their size, color, shape, what they do when they are clicked, etc) and these properties are
 *  maintained and modified in here. Therefore, the counseling controller, given a series of HTML modules to show,
 *  loads them from the client and stores them here, modifying the values whenever needed. For example, the eEva WebGL
 *  Unity scene is an HTML inject module, and the size is modified from fullscreen to halfscreen with the change of
 *  a parameter within this service.
 *
 *  Format: The format is as follows:
 *      <HTML block>:
 *          <id>: uniquely identifies the block
 *          <hidden>: dictates if the element is visible or not
 *          <content>: Actual HTML for the element, a.k.a <http><a href=""></a> .....
 *          <classes>: The classes that modify the block found on the main css file
 *          <fetch>: When called, replaces <content> with HTML fetched from the .html file
 *          <click>: When the 'block' is clicked, handle the click.
 *
 *  I highly suggest you keep each block minimized in the editor and only open the one you're interested in
 */

angular.module('app').service('widgetService', widgetService);

widgetService.$inject = ['$sce', '$templateRequest', '$state', '$window'];

function widgetService($sce, $templateRequest, $state) {
    var obj = {
        // ----- MENU ITEMS ----- //
        userButton: {
            id: 'userButton',
            hidden: false,
            content: "",
            classes: { 'userButton-hidden': false },
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/menu/user.image.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                            console.log("Content has been replaced!")
                        }
                    );
            },
            click: function(){
                var self = this;
                var userMenu = obj.userMenu;
                var cameraMenu = obj.cameraMenu;
                var cameraButton = obj.cameraButton;

                //css manipulation for displaying the widgets
                userMenu.classes['userMenu-hidden'] = !userMenu.classes['userMenu-hidden'];
                self.classes['userButton-hidden'] = !self.classes['userButton-hidden'];

                if(self.classes['userButton-hidden']){
                    cameraMenu.classes['cameraMenu-hidden'] = true;
                } else if(!self.classes['userButton-hidden']){
                    if(cameraButton.classes['cameraButton-hidden'])
                        cameraMenu.classes['cameraMenu-hidden'] = false;
                }

                if(!self.classes['userButton-hidden'])
                    userMenu.classes['userMenu-hidden'] = true;
            }
        },
        cameraButton: {
            id: 'cameraButton',
            hidden: false,
            content: "",
            classes: {'cameraButton-hidden': false},
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/menu/camera.image.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                            console.log("Content has been replaced!");
                        }
                    );
            },
            click: function() {
                var self = this;
                var cameraMenu = obj.cameraMenu;
                var userMenu = obj.userMenu;
                var userButton = obj.userButton;

                //css manipulation for displaying the widgets
                cameraMenu.classes['cameraMenu-hidden'] = !cameraMenu.classes['cameraMenu-hidden'];
                self.classes['cameraButton-hidden'] = !self.classes['cameraButton-hidden'];

                if(self.classes['cameraButton-hidden'])
                    userMenu.classes['userMenu-hidden'] = true;
                else if(!self.classes['cameraButton-hidden'])
                    if(userButton.classes['userButton-hidden'])
                        userMenu.classes['userMenu-hidden'] = false;

                if(!this.classes['cameraButton-hidden'])
                    cameraMenu.classes['cameraMenu-hidden']= true;
            }
        },
        userMenu: {
            id: 'userMenu',
            hidden: false,
            content: '',
            classes: { 'userMenu-hidden': true},
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/menu/user.menu.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },
        cameraMenu: {
            id: 'cameraMenu',
            hidden: false,
            content: '',
            classes: { 'cameraMenu-hidden': true},
            fetch: function(){
                var self =this;
                $templateRequest('/views/partials/menu/user.camera.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },
        //removing pause since doesn't work slunn002 04/23/2018

        // pauseButton: {
        //     id: 'pauseButton',
        //     hidden: false,
        //     content: '',
        //     classes: { 'pauseButton-hidden' :false },
        //     fetch: function(){
        //         var self =this;
        //         $templateRequest('/views/partials/menu/pause.button.html')
        //             .then(function(template){
        //                     self.content = $sce.trustAsHtml(template);
        //                     console.log("Pause button has been replaced!");
        //                 }
        //             );
        //     },
        //     click: function() {
        //         var self = this;
        //         var resumeButton = obj.resumeButton;
        //         //window.confirm("Voice paused!");
        //         resumeButton.classes['resumeButton-hidden'] = !resumeButton.classes['resumeButton-hidden'];
        //         self.classes['pauseButton-hidden'] = !self.classes['pauseButton-hidden'];
        //     }
        // },
        // resumeButton: {
        //     id: 'resumeButton',
        //     hidden: false,
        //     content: '',
        //     classes: { 'resumeButton-hidden': true},
        //     fetch: function() {
        //         var self = this;
        //         $templateRequest('/views/partials/menu/resume.button.html')
        //             .then(function(template){
        //                     self.content = $sce.trustAsHtml(template);
        //                 }
        //             );
        //     },
        //     click: function() {
        //         var self = this;
        //         var pauseButton = obj.pauseButton;
        //         //window.confirm("Voice paused!");
        //
        //
        //         //css manipulation for displaying the widgets
        //         pauseButton.classes['pauseButton-hidden'] = !pauseButton.classes['pauseButton-hidden'];
        //         self.classes['resumeButton-hidden'] = !self.classes['resumeButton-hidden'];
        //     }
        // },
        micButton: {
            id: 'micButton',
            hidden: false,
            content: '',
            classes: { 'micButton-hidden' :false },
            fetch: function(){
                var self =this;
                $templateRequest('/views/partials/menu/mic.button.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                            console.log("Microphone button has been replaced!");
                        }
                    );
            },
            click: function() {
                if(!this.classes['micButton-hidden']) {
                    this.classes['micButton-hidden'] = true;
                    console.log("Microphone switch on");
                }
                else if(this.classes['micButton-hidden']) {
                    this.classes['micButton-hidden'] = false;
                    console.log("Microphone switch off");
                }
            }
        },
        micSlash: {
            id: 'micSlash',
            hidden: false,
            content: '',
            classes: {'micSlash-hidden' :false},
            fetch: function(){
                var self =this;
                $templateRequest('/views/partials/menu/micSlash.button.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                            console.log("Microphone Slash button has been replaced!");
                        }
                    );
            },
            click: function() {
            }
        },
        backButton: {
            id: 'backButton',
            hidden: false,
            content: '',
            classes: '',
            fetch: function(){
                var self =this;
                $templateRequest('/views/partials/menu/back.button.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {


            }
        },
        progressBar: {
            id: 'progressBar',
            hidden: false,
            content: '',
            classes: '',
            fetch: function(){
                var self =this;
                $templateRequest('/views/partials/menu/progress.bar.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {


            }
        },
        // ----- MISC ITEMS ----- //
        elementPanel: {
            id: 'elementPanel',
            hidden: true,
            content: '',
            classes: {},
            fetch: function() {
                var self = this;
                $templateRequest('views/partials/misc/element.panel.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },
        contentView: {
            id: 'contentView',
            hidden: false,
            content: '',
            classes: {'contentView':true},
            fetch: function(){
                var self = this;
                $templateRequest('views/partials/misc/content.panel.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },
        navBar: {
            id: 'navBar',
            hidden: false,
            content: '',
            classes: { },
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/misc/navbar.html')
                    .then(function(template) {
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },
        myProgress: {
            id: 'myProgress',
            hidden: true,
            content: '',
            classes: {  },
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/misc/myprogress.html')
                    .then(function(template) {
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },


        // ----- VIRTUALYS ----- //
        virtualys: {
            id: 'virtualys',
            hidden: false,
            content: '',
            classes: { 'unityEva': true, 'ue-full': true, 'ue-half': false },
            fetch: function() {
                var self = this;
                $templateRequest('/views/partials/chars/virtualys.webgl.html')
                    .then(function(template){
                            self.content = $sce.trustAsHtml(template);
                        }
                    );
            },
            click: function() {}
        },

        // ----- HAPTEK ----- //
        webglEva: {
            id: 'webgl-app',
            hidden: false,
            content: '',
            classes: {'webglEva': true},
            fetch: function(){
                var self = this;
                $templateRequest('/views/partials/chars/eva.webgl.html')
                    .then(function(template){
                        self.content = $sce.trustAsHtml(template);
                    })
            },
            click: function() {}
        },

        // ----- HELPER FUNCTIONS ----- //
        htmls: [],
        htmlUsed: function(id){
            return ($state.current.data.htmlModules.indexOf(id) >= 0);
        },
        fetchAll: function(){
            for( var widget in obj){
                if (obj[widget].id != undefined && obj.htmlUsed(obj[widget].id))
                {
                    obj[widget].fetch();
                    obj.htmls.push(obj[widget]);
                }
            }
        }
    };

    return obj;
}