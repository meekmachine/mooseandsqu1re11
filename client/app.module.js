/*
 *   Authors: Guido Ruiz, Daniel Rivero
 *
 *   Description: You can add all the dependencies you need here. The process of adding a new
 *   angular dependency is to add the .js on the correct folder and importing it through the index.jade, then writing
 *   the module name on it (found usually on the site of the dependency) as a new item in the array.
 */

Parse.initialize("83fy28yfh238");
//note if running on local host user the following string for the Parse.serverURL:  http://localhost:3013/parse (note: 3013 is the port number that you are using to run eEVA)
//Parse.serverURL = 'https://virtualhealthcounseling.com/parse';
Parse.serverURL = 'http://localhost:3013/parse';

angular.module('app', [
    'xeditable',
    'ngAnimate',
    'ui.bootstrap',
    'angularTreeview',
    'ngclipboard',
    'ui.router',
    'ngCookies',
    'ngMaterial',
    'angular-bind-html-compile',
    'chart.js',
    'oc.lazyLoad',
    'LocalStorageModule',
    'ui.sortable',
    'ngSanitize'
]);