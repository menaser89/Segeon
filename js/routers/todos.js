new (Backbone.Router.extend({
  routes: module.routes,

  index: function() {
      Application.Collections.todoCollection = new Application.Collections.todos();

      var view = new Application.Views["todos/index"]({
          model: Application.Collections.todoCollection
      });

      Application.setView(view);

  }
}));