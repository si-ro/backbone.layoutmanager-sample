define(function(require, exports, module) {
    'use strict';

    var Backbone = require("backbone");
    var HeaderView = require("modules/view/nested/HeaderView");
    var ContentView = require("modules/view/nested/ContentView");
    var Content2View = require("modules/view/nested/Content2View");
    var FooterView = require("modules/view/nested/FooterView");

    var MainView = Backbone.Layout.extend({
        el : 'main',

        template : require("ldsh!/app/templates/nested/main"),
        events : {
            "click #showSource" : "showContent2",
            "click #back" : "showContent"
        },
        showContent : function() {
            this.setView("section", new ContentView());
            this.render();
        },
        showContent2 : function() {
            this.setView("section", new Content2View());
            this.render();
        },
        views : {
            "header" : new HeaderView(),
            "section" : new ContentView(),
            "footer" : new FooterView()
        }
    });

    module.exports = MainView;
});
