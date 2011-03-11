App.Views.Index = Backbone.View.extend({
  initialize: function() {
                this.documents = this.options.documents;
                this.render();
              },

  render: function() {
            if(this.documents.length > 0) {
              var out = "<h3><a href='#new'>New Feed</a></h3><ul>";
              _(this.documents).each(function(item) {
                out += "<li><a href='#feeds/" + item.id + "'>" + item.escape('title') + "</a></li>";
              });
              out += "</ul>";
            } else {
              out = "<h3>You don't seem to have any Feeds. <a href='#new'>Create one here</a></h3>";
            }
            $(this.el).html(out);
            $('#app').html(this.el);
          }

});

