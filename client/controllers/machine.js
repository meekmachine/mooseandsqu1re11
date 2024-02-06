/*
 *   Authors: Guido Ruiz, Daniel Rivero
 *
 *   Description: Here lies all the controllers for the state machine page, in charge of creating different route maps
 *   for the virtual character (known also as interventions). The state machine page has a <node, edge> interface that
 *   makes it easy to create route maps for the virtual character, as well as allows creations of primitive element
 *   types that work with Mihai's mainframe. The mainframe is not discussed in this file.
 *
 *   There are (3) controllers at the time of this writing. The machine controller is in charge of the <node, edge>
 *   graph, with functions that add nodes, add edges, and modify the view given data (also communicates with JSPlumb).
 *   The start controller is in charge of loading a new state machine or creating a new one. The tree view controller
 *   is in charge of a tiny view on the bottom right side of the state machine page that shows a tree view structure of
 *   the elements stored in the database to easily get their IDs.
 *
 *   Good luck!
 */

angular.module('app').controller('machineController', machineController);

machineController.$inject = ['$scope',  '$state', '$timeout', '$stateParams', 'StateMachineService', 'AddedService'];

function machineController($scope, $state, $timeout, $stateParams, StateMachineService, AddedService) {
    let Added = Parse.Object.extend('Added');


    $scope.manager = StateMachineService;

    $scope.alert = null; // stores any alerts to show to the user
    $scope.nameBox = "";
    $scope.expressionBox = "";
    $scope.addLoaded = false;
    $scope.dynamicPopover = {
        templateUrl: 'views/templates/confirmbox.view.html',
        nameToDelete: '',
        title: 'Warning',
        placement: 'bottom'
    };

    $scope.Success = message => {
        $scope.alert = {
            alertClass: "alert-success",
            alertType: "Success!",
            alertText: message
        };
    };
    $scope.Error = message => {
        $scope.alert = {
            alertClass: "alert-danger",
            alertType: "Error!",
            alertText: message
        };
    };

    $scope.new = () => {
        let object = AddedService.prototype();

        AddedService.createAdded(object).then(
            success => $scope.manager.added.push(success),
            error => $scope.Error("Could not copy the state machine selected.")
        );
    };

    // -----------------------------------------------------------------------------------------------------------------
    // this function is called when you want to load a state graph for editing
    // -----------------------------------------------------------------------------------------------------------------

    $scope.load = added => {
        $state.go('machine',  { edit: added.object.id });
    };

    // -----------------------------------------------------------------------------------------------------------------
    // save logic for when user clicks save on a state graph
    // -----------------------------------------------------------------------------------------------------------------

    $scope.save = () => {
        // delete states and transitions if primitive
        if($scope.manager.sm.primitive) {
            $scope.manager.sm.init.states = [];
            $scope.manager.sm.init.transitions = [];
        } else $scope.manager.sm.execute = "";

        // upload your new state machine map to the server as a new <node>
        $scope.manager.sm.save().then(
            success => {
                $scope.Success("State machine was successfully saved into the system.");

                AddedService.getAllAdded().then(
                    success => $scope.manager.added = success,
                    error => $scope.Error("There was an error contacting the server. Please try again.")
                );
            },
            error => $scope.Error("There was an error contacting the server. Please try again.")
        );
    };

    // -----------------------------------------------------------------------------------------------------------------
    // delete a state graph from the server completely
    // -----------------------------------------------------------------------------------------------------------------

    $scope.delete = () => {
        if($scope.manager.sm) {
            $scope.manager.sm.delete().then(
                success => $state.reload(),
                error => $scope.Error('Could not delete the state machine from the server.')
            );
        }
    };

    // -----------------------------------------------------------------------------------------------------------------
    // copy a state graph and make a new one (a copy)
    // -----------------------------------------------------------------------------------------------------------------

    $scope.copy = added => {
        added.name += "_Copy";

        AddedService.createAdded(added).then(
            success => $state.go('machine', { edit: success.object.id }),
            error => $scope.Error("Could not copy the state machine selected.")
        );

    };

    // -----------------------------------------------------------------------------------------------------------------
    // in charge of updating an <edge> label in the JSPlumb scene as you edit the name of the <edge> on the side panel
    // -----------------------------------------------------------------------------------------------------------------

    let initializing = true;
    $scope.$watch('expressionBox', (newValue, oldValue) => {
        if(initializing) $timeout(() => initializing = false );
        else $scope.manager.transitionIdToObject[$scope.manager.selected.id].connection.getOverlay("label").setLabel(newValue);
    });

    // -----------------------------------------------------------------------------------------------------------------
    // fixes the size of the <edge> when the <node> changes in size due to it being renamed
    // -----------------------------------------------------------------------------------------------------------------

    $scope.updateConnection = node_Id => $scope.manager.instance.repaintEverything();

    // -----------------------------------------------------------------------------------------------------------------
    // deletes a <node> from the state graph
    // -----------------------------------------------------------------------------------------------------------------

    $scope.removeNode = node => $scope.manager.removeNode(node);

    // -----------------------------------------------------------------------------------------------------------------
    // add a <node> to the state graph from the side panel inventory
    // -----------------------------------------------------------------------------------------------------------------

    $scope.addNode = class_id => {
        // add node to angular first
        $scope.manager.addNodeAngular(class_id);

        // add node to plumb second (the visual GUI state graph)
        $scope.$$postDigest(() => {
            // add state to jsPlumb
            let el = $scope.manager.instance.getSelector("#nodeId_" + $scope.manager.nodeId)[0];
            $scope.manager.addNodePlumb(el);
        });
    };

    // -----------------------------------------------------------------------------------------------------------------
    // remove an <edge> from the state graph
    // -----------------------------------------------------------------------------------------------------------------

    $scope.removeTransition = transition => {
        // remove transition from angular first
        $scope.manager.removeTransition(transition.id);
        if(transition == $scope.manager.selected) $scope.manager.selected = null;

        // remove transition from plumb second (the visual GUI state graph)
        $scope.manager.instance.detach($scope.manager.transitionIdToObject[transition.id]);
        delete $scope.manager.transitionIdToObject[transition.id];
    };

    // -----------------------------------------------------------------------------------------------------------------
    // this function starts up jsPlumb, the graphical GUI library that shows the state graph
    // -----------------------------------------------------------------------------------------------------------------

    $scope.jsPlumbInit = () => {
        console.log("Started jsPlumb");

        // settings
        $scope.manager.instance = jsPlumb.getInstance({
            Endpoint: ["Dot", {
                radius: 2
            }],
            Connector: "StateMachine",
            HoverPaintStyle: {
                strokeStyle: "#1e8151",
                lineWidth: 2
            },
            ConnectionOverlays: [
                ["Arrow", {
                    location: 1,
                    id: "arrow",
                    length: 14,
                    foldback: 0.8
                }],
                ["Label", {
                    label: "",
                    id: "label",
                    cssClass: "aLabel"
                }]
            ],
            Container: "canvas"
        });

        // allow for anchor connections (means the <edge> 'hook' onto the <nodes>)
        $scope.manager.instance.registerConnectionType("basic", {
            anchor: "Continuous",
            connector: "StateMachine"
        });

        // event function called when an <edge> is formed within the state graph
        $scope.manager.instance.bind("connection", c => {
            let source = c.source.id;
            let target = c.target.id;

            c.connection._jsPlumb.id = "transId_" + $scope.manager.transId;

            let label = ($scope.manager.lastExpression != "") ? $scope.manager.lastExpression : " ";
            c.connection.getOverlay("label").setLabel(label);
            $scope.manager.lastExpression = "";

            $scope.manager.transitionIdToObject["transId_" + $scope.manager.transId] = c;
            $scope.manager.addTransition(source, target);
            $scope.manager.incrementTID();

            $scope.$apply();
        });

        // event function called when an <edge> is clicked within the state graph
        $scope.manager.instance.bind("click", c => {
            let selected = c._jsPlumb.id;

            let trans = $scope.manager.sm.init.transitions.find(t => t.id == selected);

            if(trans) $scope.$apply(() => $scope.manager.selected = trans);
        });

        // the actual init function of jsPlumb
        $scope.manager.instance.batch(() => {
            // add state to jsPlumb
            let els = jsPlumb.getSelector(".statemachine-demo .w");
            let highestId = "0";

            els.forEach((el, i) => {
                $scope.manager.addNodePlumb(el);

                let currId = parseInt($scope.manager.sm.init.states[i].id.split("_")[1]);
                highestId = Math.max(currId, highestId);
            });

            $scope.manager.nodeId = highestId;
            $scope.manager.incrementNID();

            // prevents infinite loop, as 'connect' jsPlumb calls the bind declared above
            let copy = angular.copy($scope.manager.sm.init.transitions);
            $scope.manager.sm.init.transitions = [];

            copy.forEach((c, i) => {
                $scope.manager.lastExpression = c.guard.expression;

                $scope.manager.instance.connect({
                    source: c.from,
                    target: c.to,
                    type: "basic"
                });

                $scope.manager.sm.init.transitions[i].guard = c.guard;
            });
        });
    };

    // jsPlumb wait timer
    $scope.initWait = () => {
        if(!$scope.addLoaded) $timeout($scope.initWait, 100);
        else $scope.jsPlumbInit();
    };

    // starts jsPlumb when angular is ready first, uses wait timer above to do this
    jsPlumb.ready($scope.initWait);

    function init() {
        $scope.manager.reset();
        $scope.manager.editing = $stateParams.edit;

        AddedService.getAllAdded().then(
            objects => {
                $scope.manager.added = objects;

                // look for current 'editing' state machine if we're editing
                let existing = $scope.manager.added.find(a => {
                    return a.object.id == $scope.manager.editing;
                });

                console.log("Finished loading added states");

                if(!existing) return;

                // id to param size
                let idToParamSize = {};

                $scope.manager.added.forEach(a => {
                    idToParamSize[a.object.id] = a.init.params.length;
                });

                $scope.manager.sm = existing;

                // update any parameters changed by a previous edit
                $scope.manager.sm.init.states.forEach(s => {
                    let oldLen = s.params.length;
                    let newLen = idToParamSize[s.class];

                    if(newLen > oldLen)
                        for(let i = 0; i < newLen - oldLen; i++) s.params.push("");
                    else if(newLen < oldLen)
                        for(let i = 0; i < oldLen - newLen; i++) s.params.pop();

                    // fix any negative positions
                    s.plumbleft = Math.max(0, parseInt(s.plumbleft.replace("px", ""))) + "px";
                    s.plumbtop = Math.max(0, parseInt(s.plumbtop.replace("px",""))) + "px";
                });

                $scope.addLoaded = true;
                $scope.manager.showLoad = false;

            }, error => $scope.Error('There was an error contacting the server. Please try again.')
        );
    }

    // initial load of empty state machine
    init();
}