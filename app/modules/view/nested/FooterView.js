define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");

    var FooterView = Backbone.Layout.extend({
        template: require("ldsh!/app/templates/nested/footer"),

    });

    module.exports = FooterView;
});
