Application.Collection.extend({
  name: "todosCollection",
  model: Application.Models["todosCollection"],
  localStorage: new Backbone.LocalStorage("TodoCollection")
});

// Instances of this collection can be created by calling:
// new Application.Collections["todos/index"]()