define(['dojo/_base/declare', 'jimu/BaseWidget'], function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

        // Custom widget code goes here

        baseClass: 'widget-prueba',
        // this property is set by the framework when widget is loaded.
        // name: 'WidgetPrueba',
        // add additional properties here

        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            console.log('WidgetPrueba::postCreate');
        }

        // startup: function() {
        //   this.inherited(arguments);
        //   console.log('WidgetPrueba::startup');
        // },

        // onOpen: function(){
        //   console.log('WidgetPrueba::onOpen');
        // },

        // onClose: function(){
        //   console.log('WidgetPrueba::onClose');
        // },

        // onMinimize: function(){
        //   console.log('WidgetPrueba::onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('WidgetPrueba::onMaximize');
        // },

        // onSignIn: function(credential){
        //   console.log('WidgetPrueba::onSignIn', credential);
        // },

        // onSignOut: function(){
        //   console.log('WidgetPrueba::onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('WidgetPrueba::onPositionChange');
        // },

        // resize: function(){
        //   console.log('WidgetPrueba::resize');
        // }

        //methods to communication between widgets:

    });
});
//# sourceMappingURL=Widget.js.map
