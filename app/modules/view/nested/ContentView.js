define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");

    var ContentView = Backbone.Layout.extend({
        template : require("ldsh!/app/templates/nested/content")
    });

    module.exports = ContentView;
});
