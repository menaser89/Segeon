Application.View.extend({
  name: "index",
  events: {
      "submit form": function (event) {
          console.log("Hola");
          event.preventDefault(); //No hace un evio de formulario le quita este valor por defecto
          var attrs = this.serialize();
          this.collection.add(attrs);
          attrs.save();
          this.$('input[name=title]').val('');
      }
  }
});

// Instances of this view can be created by calling:
// new Application.Views["todos/index"]()