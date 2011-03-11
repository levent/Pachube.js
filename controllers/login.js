App.Controllers.Login = Backbone.Controller.extend({
  routes: {
            "": "login"  
          },

  login: function() {
       new App.Views.Login({ model: new User() });
     }
});

