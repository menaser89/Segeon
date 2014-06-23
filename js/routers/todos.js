new (Backbone.Router.extend({
  routes: module.routes,

  index: function() {
      console.log('hello world');


      Application.Collections.todosCollection = new Application.Collections.todos();

//      console.log(Application.Collections.todosCollection);

      var view = new Application.Views["index"] ();
      Application.setView(view);

//      Application.Collections.todosCollection.fetch({
//
//          success: function(collection, response, options) {
//              console.log('setting view');
//              var view = new Application.Views ["index"]({
//                  collection: collection
//              });
//              Application.setView(view);
//
//
//          },
//
//          error: function (collection) {
//              console.log('collection could not be fetched')
//          }
//      })
  }
}));