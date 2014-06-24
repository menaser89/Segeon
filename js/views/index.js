Application.View.extend({
  name: "index",

  initialize: function() {
      this.collection.fetch();
  },

  events: {
      "submit form": function (event) {
          event.preventDefault(); //No hace un evio de formulario le quita este valor por defecto
          this.collection.create(this.serialize());
          this.$('input[name=title]').val('');
      }
  }

});

// Instances of this view can be created by calling:
// new Application.Views["todos/index"]()