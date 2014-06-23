Application.View.extend({
  name: "todos/index",
  events: {
      "submit form": function(event) {
          event.preventDefault();
          var attrs = this.serialize();
          this.collection.add(attrs);
          this.$('input[name=title]').val('');
      }
  }
});

// Instances of this view can be created by calling:
// new Application.Views["todos/index"]()