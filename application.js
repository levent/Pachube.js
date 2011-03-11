var App = {
  Views: {},
  Controllers: {},
  init: function() {
    new App.Controllers.Feeds();
    Backbone.history.start();
  }
};

