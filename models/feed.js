var Feed = Backbone.Model.extend({
  url: function() {

    var username = localStorage.getItem("username");
    var api_key = localStorage.getItem("api_key");

    return("http://api.pachube.com/v2/feeds/" + this.id + ".json?api_key=" + JSON.parse(api_key))
  }
});

