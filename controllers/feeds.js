App.Controllers.Feeds = Backbone.Controller.extend({
  routes: {
            "feeds/:id": "edit",
            "feeds":     "index",
            "feeds/new": "newFeed"  
          },

      edit: function(id) {
        var feed = new Feed({ id: id });
        feed.fetch({
          success: function(model: resp) {
                     new App.Views.Edit({ model: feed });
                   },
          error: function() {
                   new Error({ message: 'Sorry I could not find that feed' });
                   window.location.hash = '#';

                 }
        });
      },

      index: function() {
        $.getJSON('/feeds', function(data) {
          if(data) {
            var feeds = _(data).map(function(i) { return new Feed(i); });
            new App.Views.Index({ feeds: feeds });
          } else {
            new Error({ message: "Sorry I couldn't load your feeds" });
          }
        });
      },

      newFeed: function() {
        new App.Views.Edit({ model: new Feed() });
      }

});

