new (Backbone.Router.extend({
  routes: module.routes,

  index: function() {
      console.log('hello world');


      var collection = new Application.Collections.todos();

      var view = new Application.Views["index"] ({
          collection: collection
      });
      Application.setView(view);

  }
}));