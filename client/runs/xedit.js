/*
 *   State Machine Runs
 *
 *   Authors: Guido Ruiz
 *
 *   Description: Runs are configurations that are taken in by module dependencies. We have x-editable, which is an
 *   angular addon module that allows to edit text on the spot. We use this for the state graph details section where
 *   you can add a name, description, code to run before, after, etc. This x-editable module can take settings before
 *   it loads, which happens in the 'editableOptions' inject as seen below.
 */

angular.module('app').run(xeditSettings);

xeditSettings.$inject = ['editableOptions'];

function xeditSettings(editableOptions) {
    editableOptions.theme = 'bs3';
}