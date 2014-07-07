define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Layout = require("layoutmanager");
  var MainView = require("modules/view/basic/MainView");
  var NestedView = require("modules/view/nested/MainView");
  
  var Router = Backbone.Router.extend({
      initialize : function() {

      },
      routes: {
          "": 'index',
          "nested/": 'nested'
      },

      index: function () {
          // Use main layout and set Views.
          var mainView = new MainView();
          // Render to the page.
          mainView.render();
      },
      nested: function() {
          var nestedView = new NestedView();
          nestedView.render();
      }
  });
  
  // Defining the application router.
  module.exports = Router;
});
