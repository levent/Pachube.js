App.Controllers.Feeds = Backbone.Controller.extend({
  routes: {
            "": "config",
            "feeds/:id": "show",
            "feeds":     "index"
          },

      show: function(id) {
        var feed = new Feed({ id: id });
        feed.fetch({
          success: function(model, resp) {
                     new App.Views.Show({ model: feed });
                   },
          error: function() {
                   new Error({ message: 'Sorry I could not find that feed' });
                   window.location.hash = '#';

                 }
        });
      },

      index: function() {
        var username = localStorage.getItem("username");
        var api_key = localStorage.getItem("api_key");
        $.ajax({
          url: "http://api.pachube.com/v2/feeds.json?user=" + JSON.parse(username) + "&api_key=" + JSON.parse(api_key),
          success: function(data) {
            if(data["results"]) {
              var feeds = _(data["results"]).map(function(i) { return new Feed(i); });
              new App.Views.Index({ feeds: feeds });
            } else {
              new Error({ message: "Sorry I couldn't load your feeds" });
            }
          },
         dataType: 'jsonp'
        });
      },

      config: function() {
        new App.Views.Login({});
      }
});

