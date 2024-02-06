angular.module('app').service('ctService', ctService);

ctService.$inject = [];

function ctService() {
    var obj = {
        editor: null,
        elementID: null,

        stopEditing: function() {
            console.log("Stopped editing");
            if(this.editor.isEditing()) this.editor.stop(this.save);
        },
        startEditing: function(){
            console.log("Started editing");
            //this.init('*[data-editable]', 'data-name', null, false);
            if(!this.editor.isEditing()) this.editor.start();
        },
        save: function(){
            this.showAlert(true);
            return angular.element(this.elementID)[0].innerHTML;
        },
        initHTML: function(defaultHTML) {
            angular.element(this.elementID)[0].innerHTML = defaultHTML;
        },
        showAlert: function(success) {
            if(success) {
                console.log("Saved");
                new ContentTools.FlashUI('ok');
            } else {
                console.log("Not Saved");
                new ContentTools.FlashUI('no')
            }
        },
        init: function(query, naming, fixture, ignition, elementID){
            ContentTools.StylePalette.add([
                new ContentTools.Style('Author', 'author', ['p'])
            ]);

            this.editor = ContentTools.EditorApp.get();
            this.editor.init(query, naming, fixture, ignition);
            this.elementID = elementID;
        }
    };

    return obj;
}