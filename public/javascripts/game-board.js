namespace("Jeopardy", {
  GameBoard: Backbone.View.extend({

    initialize: function() {
      this.boardInfo = this.options.boardInfo;
      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };
    },

    events: {
      'click .clue-value' : 'showClue'
    },

    render: function() {
      var template = _.template($('#board-template').html());
      $(this.el).html(template(this.boardInfo));
      return this;
    },

    showClue: function(event) {
      var target = $(event.currentTarget);
      var categoryNumber = target.data('category');
      var clueNumber = target.data('clue');
      var template = _.template($("#clue-template").html());

      $(this.el).html(template({clue: this.boardInfo[categoryNumber][clueNumber]}));
    }

  })
});
