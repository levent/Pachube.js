App.Views.Show = Backbone.View.extend({
    events: {
        "submit form": "save"
    },
    
    initialize: function() {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        this.render();
    },
    
    save: function() {
        var self = this;
        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
        
        this.model.save({ title: this.$('[name=title]').val(), body: this.$('[name=body]').val() }, {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });
                Backbone.history.saveLocation('documents/' + model.id);
            },
            error: function() {
                new App.Views.Error();
            }
        });
        
        return false;
    },
    
    render: function() {
      var out = "<span class='fingerwrap'><span class='finger'>&#x261E;</span><a href='#feeds'>All feeds</a></span>";
      out += "<h3>Title: " + this.model.get('title') + "</h3>";
      out += "<ul>";
      _(this.model.attributes).each(function(value, key) {
        if(key == "datastreams") {
          out += "<h4>Datastreams:</h4>";
          _(value).each(function(datastream) {
            console.log(datastream);
          out += "<li><ul>";
          out += "<li>id: " + datastream.id  + "</li>";
          out += "<li>at: " + datastream.at  + "</li>";
          out += "<li>current value: " + datastream.current_value  + "</li>";
          out += "<li>min value: " + datastream.min_value  + "</li>";
          out += "<li>max value: " + datastream.max_value  + "</li>";
          out +="</ul></li>";
          });
        } else {
          out += "<li>" + key + ": " + value + "</li>"
        }

      });
      out += "</ul>";

      $(this.el).html(out);
      $('#app').html(this.el);


      this.delegateEvents();
    }
});

