define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");

    var LoginView = Backbone.Layout.extend({
        template: require("ldsh!/app/templates/basic/login"),

    });

    module.exports = LoginView;
});
