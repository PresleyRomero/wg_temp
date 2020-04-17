define(['dojo/_base/declare', 'jimu/BaseWidget', './SubWidget'], function (declare, BaseWidget, SubWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

        // Custom widget code goes here

        baseClass: 'widget-contenedor',
        // this property is set by the framework when widget is loaded.
        // name: 'WidgetContenedor',
        // add additional properties here

        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            this.subWidget = new SubWidget({}, this.subWidgetNode);
        },

        startup: function startup() {
            this.inherited(arguments);
            this.subWidget.startup();
        }

        // onOpen: function(){
        //   console.log('WidgetContenedor::onOpen');
        // },

        // onClose: function(){
        //   console.log('WidgetContenedor::onClose');
        // },

        // onMinimize: function(){
        //   console.log('WidgetContenedor::onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('WidgetContenedor::onMaximize');
        // },

        // onSignIn: function(credential){
        //   console.log('WidgetContenedor::onSignIn', credential);
        // },

        // onSignOut: function(){
        //   console.log('WidgetContenedor::onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('WidgetContenedor::onPositionChange');
        // },

        // resize: function(){
        //   console.log('WidgetContenedor::resize');
        // }

        //methods to communication between widgets:

    });
});
//# sourceMappingURL=Widget.js.map
