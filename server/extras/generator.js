var newline = "\n";
var tab = "\t";

function createInit(init, idToClass, isPrimitive) {
    //var variables = init.variables;
    var params = init.params;

    var transIdToName = {};

    var states = createStates(init.states, idToClass, transIdToName);
    var transitions = createTransitions(init.transitions, transIdToName);
    var during = init.during;

    during = during.split("\n").join(newline + tab + tab);

    var p_string = "",
        s_string = "",
        t_string = "",
        i_string = "";

    for (var i = 0; i < params.length; i++)
        p_string += ', ' + params[i];

    for (var i = 0; i < states.length; i++)
        s_string += tab + tab + states[i] + newline;

    for (var i = 0; i < transitions.length; i++)
        t_string += tab + tab + transitions[i] + newline;

    if(!isPrimitive)
        i_string = tab + tab + 'self.setInitialState("start");' + newline + tab + tab + 'self.setFinalState("end");';

    return 'initialize: function($super, memory, events, resBox' + p_string + ')' + newline + tab +
        '{' + newline + tab + tab +
        'var self = this;' + newline + tab + tab +
        '$super(memory, events, resBox);' + newline + tab + tab +
        during + newline + s_string + t_string + i_string + newline + tab + '},';
}
function createStates(states, idToClass, transIdToName) {
    var arr = [];

    for (var i = 0; i < states.length; i++) {
        var name = states[i].name;
        var _class = idToClass[states[i].class];
        var params = states[i].params,
            sp_string = "";

        console.log(states[i].class);

        transIdToName[states[i].id] = name;

        for (var j = 0; j < params.length; j++)
            sp_string += ', ' + params[j];

        arr.push('self.addState("' + name + '", new ' + _class + '(memory, events, resBox' + sp_string + '));');
    }

    return arr;
}
function createTransitions(transitions, transIdToName) {
    var arr = [];

    for (var i = 0; i < transitions.length; i++) {
        var from = transIdToName[transitions[i].from];
        var to = transIdToName[transitions[i].to];
        var guard = createGuards(transitions[i].guard);

        arr.push('self.addTransition("' + from + '", "' + to + '"' + guard + ');');
    }

    return arr;
}
function createGuards(guard) {
    var type = guard.type;
    var expression = guard.expression;
    var onTransition = createOnTransition(guard.onTransition);

    if (type == 'Conditional Guard')
        return ', new ConditionGuard(function(m){' + expression + '}' + onTransition + ')';
    else if (type == 'Event Guard')
        return ', new EventGuard("' + expression + '"' + onTransition + ')';
    else return '';
}
function createOnTransition(onTransition) {
    if (onTransition != "") return ', function(m){' + onTransition + '}';
    else return "";
}
function createExecute(execute, isPrimitive) {
    execute = execute.split("\n").join(newline + tab + tab);

    if(!isPrimitive) return '';

    return 'execute: function()' + newline + tab +
        '{' + newline + tab + tab +
        'var self = this;' + newline + tab + tab +
        execute + newline + tab +
        '},';
}
function createBefore(before) {
    before = before.split("\n").join(newline + tab + tab);

    return 'beforeExecution: function($super)' + newline + tab +
        '{' + newline + tab + tab +
        'var self = this;' + newline + tab + tab +
        '$super();' + newline + tab + tab +
        before + newline + tab +
        '}';
}
function createClass(isPrimitive) {
    if(isPrimitive) return 'InterventionEngineState';
    else return 'InterventionEngine';
}
function createFromTemplate(name, init, before, execute, sClass) {
    return name + ' = Class.create(' + sClass + ',' + newline +
        '{' + newline + tab +
        init + newline + tab +
        execute + newline + tab +
        before + newline +
        '});';
}

exports.smMaker = function(added, prependCode) {
    var idToClass = {};
    var result = "";

    result += prependCode + newline + newline;

    for(var i = 0; i < added.length; i++) {
        result += "var " + added[i].get('name') + " = null;" + newline;
        if(added[i].id in idToClass) return "Duplicate ID Exception! Somebody manually fix it damn it!";
        idToClass[added[i].id] = added[i].get('name');
    }

    try {
        for(var i = 0; i < added.length; i++) {
            var json = added[i];
            var state_name = json.get('name');
            var init = createInit(json.get('init'), idToClass, json.get('primitive'));
            var execute = createExecute(json.get('execute'), json.get('primitive'));
            var sClass = createClass(json.get('primitive'));
            var before = createBefore(json.get('before'));

            result += newline + newline + createFromTemplate(state_name, init, before, execute, sClass);
        }

        return result;
    } catch (e) {
        return "Could not convert input string to state machine code.";
    }
};




















