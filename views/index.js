App.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.feeds = this.options.feeds;
    this.render();
  },
  render: function() {
    if(this.feeds.length > 0) {
      var out = "<h3>Your feeds</h3><ul>";
      _(this.feeds).each(function(item) {
        out += "<li class='fingerwrap'><span class='finger'>&#x261E;</span><a href='#feeds/" + item.id + "'>" + item.escape('title') + "</a></li>";
      });
      out += "</ul>";
    } else {
      out = "<h3>You don't seem to have any Feeds</h3><p><a href='#'>Enter credentials</a></p>";
    }
    $(this.el).html(out);
    $('#app').html(this.el);
  }

});

