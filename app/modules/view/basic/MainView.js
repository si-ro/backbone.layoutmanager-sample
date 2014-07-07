define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");
    var LoginView = require("modules/view/basic/LoginView");
    
    var MainView = Backbone.Layout.extend({
        el: 'main',
        
        template: require("ldsh!/app/templates/basic/main"),

        // In the secondary column, put a new Login View.
        views: {
          ".secondary": new LoginView()
        }
    });

    module.exports = MainView;
});
