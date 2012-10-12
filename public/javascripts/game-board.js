namespace("Jeopardy", {
  GameBoard: Backbone.View.extend({

    initialize: function() {
      this.boardInfo = this.options.boardInfo;
    },

    render: function() {
      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };
      var template = _.template($('#board-template').html());
      $(this.el).append(template(this.boardInfo));
      return this;
    }

  })
});
