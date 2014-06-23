Application.Model.extend({
  name: "todo",

  defaults: {
      title: "no title....",
      done: false
  }
});

// Instances of this model can be created by calling:
// new Application.Models["todos/index"]()