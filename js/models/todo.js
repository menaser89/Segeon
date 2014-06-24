Application.Model.extend({
  name: "todo",

  initialize: function() {
    alert("Soy un editor en Genbeta Dev!");
  },
    
  defaults: {
      title: "",
      done: false
  }
});

// Instances of this model can be created by calling:
// new Application.Models["todos/index"]()