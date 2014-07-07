define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");

    var Content2View = Backbone.Layout.extend({
        template: require("ldsh!/app/templates/nested/content2"),

    });

    module.exports = Content2View;
});
