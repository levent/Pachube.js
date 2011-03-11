var Feed = Backbone.Model.extend({
  url : function() {
    var base = '/v2/feeds';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  }
});

