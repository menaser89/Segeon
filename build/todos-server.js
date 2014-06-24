
Application['todos'] = (function() {
  var module = {exports: {}};
  var exports = module.exports;
  Application['todos'] = exports;

  /* router : todos */
module.name = "todos";
module.routes = {"":"index"};
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
;;
Handlebars.templates['index'] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, buffer = "\n            <li class=\"list\" ";
  stack1 = ((helper = helpers.done || (depth0 && depth0.done)),(options={"name":"done","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.done) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <input type=\"checkbox\" ";
  stack1 = ((helper = helpers.done || (depth0 && depth0.done)),(options={"name":"done","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.done) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + ">\n                "
    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n            </li>\n        ";
},"2":function(depth0,helpers,partials,data) {
  return "class=\"done\"";
  },"4":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"container\">\n    <div style=\"text-align: center\">\n        <h1>Recordatorios</h1>\n        <form>\n            <input name=\"title\">\n            <input type=\"submit\" value=\"Nueva Tarea\">\n        </form>\n        <br>\n        ";
  stack1 = helpers.collection.call(depth0, {"name":"collection","hash":{
    'tag': ("ul")
  },"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    </div>\n</div>";
},"useData":true});Application.View.extend({
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
;;
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
;;
Application.Collection.extend({
  name: "todos",

  model: Application.Models["todo"],

  localStorage: new Backbone.LocalStorage("todos-backbone")
});

// Instances of this collection can be created by calling:
// new Application.Collections["todos/index"]()
;;


  if (Application['todos'] !== module.exports) {
    console.warn("Application['todos'] internally differs from global");
  }
  return module.exports;
}).call(this);
