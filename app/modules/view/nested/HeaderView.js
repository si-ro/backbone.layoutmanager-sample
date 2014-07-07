define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");

    var HeaderView = Backbone.Layout.extend({
        template: require("ldsh!/app/templates/nested/header"),

    });

    module.exports = HeaderView;
});
