Application.Collection.extend({
  name: "todos",

  model: Application.Models["todo"],

  localStorage: new Backbone.LocalStorage("todos-backbone")
});

// Instances of this collection can be created by calling:
// new Application.Collections["todos/index"]()