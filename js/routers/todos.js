new (Backbone.Router.extend({
  routes: module.routes,

  index: function() {
      Application.Collections.todos = new Application.Collections["todos"]([]);

      var view = new Application.Views["index"] ({
          collection: Application.Collections.todos
      });
      Application.setView(view);

  }


}));