/*
 *   State Machine Filters
 *
 *   Authors: Guido Ruiz
 *
 *   Description: Think of filters as helper functions that format data. Imagine you store a timestamp on the server,
 *   say 201507081456, which is really hard to read. A formatter can convert that into many different formats, say,
 *   07/08/2015 14:56. In the state machine we only use one filter that converts an id of a class to its respective
 *   name. For example, id of 0 to State_Empty to use for the start and end states. Below is the function that does this
 */

angular.module('app').filter('friendlyClass', friendlyClass);

friendlyClass.$inject = ['StateMachineService'];

function friendlyClass(StateMachineService) {
    var manager = StateMachineService;

    return function(x) {
        var res = manager.getClassById(x);

        if(res) return res.name;
        else return null;
    }
}