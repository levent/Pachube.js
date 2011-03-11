App.Views.Login = Backbone.View.extend({
  events: {
    "submit form": "login"
  },

  initialize: function() {
    this.render();
  },

  login: function() {
     var self = this;
     username = this.$('[name=username]').val();
     api_key = this.$('[name=api_key]').val();
     localStorage.setItem("username", JSON.stringify(username));
     localStorage.setItem("api_key", JSON.stringify(api_key));
     Backbone.history.saveLocation('feeds');
  },

  render: function() {
    out = "<form><label>Username:</label><input type='text' name='username' /><br /><label>API Key:</label><input type='text' name='api_key' /><input type='submit' value='Retrieve feeds' /></form>";
    $(this.el).html(out);
    $('#app').html(this.el);
  }
});

