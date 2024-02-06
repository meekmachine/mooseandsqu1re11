/*
 *  State Machine Services
 *
 *  Authors: Guido Ruiz
 *
 *  Description: This service is a self contained resource that has the actual <nodes> and <edges>, their names, ids,
 *  and logic as well as code and comments. This service has a series of classes that are called by the machine
 *  controller to add a new node, remove a node, add a transition, remove transition, reset a node, change the x,y
 *  position of a node, keeps what node is selected, etc. All this logic is self sustained here as a service, which
 *  means the machine controller is essentially a Facade to the complex logic of this service. The name of each function
 *  should be self explanatory.
 *
 *  I highly suggest you keep each block minimized in the editor and only open the one you're interested in
 */

angular.module('app').service('StateMachineService', StateMachineService);

StateMachineService.$inject = [];

function StateMachineService() {
    this.showLoad = true;
    this.showAdded = false;
    this.showSettings = false;
    this.selected = null;
    this.instance = null;
    this.nodeId = "1";
    this.transId = "1";
    this.left = 50;
    this.top = 50;
    this.lastExpression = "";
    this.transitionIdToObject = {};
    this.added = [];
    this.sm = {};

    this.guardTypes = ["Conditional Guard", "Event Guard"];

    this.incrementNID = () => this.nodeId++;
    this.incrementTID = () => this.transId++;

    this.addNodeAngular = class_id => {
        // add state to angular array
        let state = {};

        state.name = "nodeId_" + this.nodeId;
        state.id = "nodeId_" + this.nodeId;
        state.plumbleft = this.left + "px";
        state.plumbtop = this.top + "px";
        state.class = class_id;
        state.params = [];

        var c = this.getClassById(class_id);
        c.init.params.forEach(p => state.params.push(""));

        this.sm.init.states.push(state);

        this.left += 10;
        this.top += 10;
    };
    this.addNodePlumb = el => {
        this.instance.draggable(el, {
            drag: e => {
                let state = this.sm.init.states.find(s => s.id == e.el.id);

                if (state) {
                    state.plumbleft = e.pos[0] + "px";
                    state.plumbtop = e.pos[1] + "px";
                }
            }
        });

        this.instance.makeSource(el, {
            filter: ".ep",
            anchor: "Continuous",
            connectorStyle: {
                strokeStyle: "#5c96bc",
                lineWidth: 2,
                outlineColor: "transparent",
                outlineWidth: 4
            },
            connectionType: "basic",
            extract: {
                "action": "the-action"
            },
            maxConnections: -1,
            onMaxConnections: (info, e) => alert("Maximum connections (" + info.maxConnections + ") reached")
        });

        this.instance.makeTarget(el, {
            dropOptions: {
                hoverClass: "dragHover"
            },
            anchor: "Continuous",
            allowLoopback: true
        });

        this.incrementNID();
    };
    this.removeNode = name => {
        this.sm.init.states.splice(this.sm.init.states.indexOf(name), 1);
    };

    this.addTransition = (source, target) => {
        let transition = {};

        transition.id = "transId_" + this.transId;
        transition.from = source;
        transition.to = target;
        transition.guard = {
            "type": "",
            "expression": "",
            "onTransition": ""
        };

        this.sm.init.transitions.push(transition);
    };
    this.removeTransition = id => {
        let transIndex = this.sm.init.transitions.findIndex(t => t.id == id);

        if (transIndex > -1) this.sm.init.transitions.splice(transIndex, 1);
    };

    this.getParameterById = (x, y) => this.added.find(a => a.object.id == x).init.params[y] || null;
    this.getClassById = x => this.added.find(a => a.object.id == x) || null;

    this.reset = () => {
        this.showLoad = true;
        this.showAdded = false;
        this.showSettings = false;
        this.selected = null;
        this.instance = null;
        this.nodeId = "1";
        this.transId = "1";
        this.left = 50;
        this.top = 50;
        this.lastExpression = "";
        this.transitionIdToObject = {};
        this.added = [];
        this.sm = {}
    };
}