namespace("Jeopardy", {
  GameBoard: Backbone.View.extend({

    initialize: function() {
      this.setTemplateInterpolator();
      this.boardInfo = this.options.boardInfo;
      this.finishedQuestions = [];
      this.boardTemplate = _.template($('#board-template').html());
      this.clueTemplate = _.template($("#clue-template").html());
    },

    events: {
      'click .clue-value' : 'showClue',
      'click .clue'       : 'showBoard'
    },

    showBoard: function() {
      $(this.el).html(this.boardTemplate(this.boardInfo));
      this.hideFinishedQuestions();
    },

    showClue: function(event) {
      var target = $(event.currentTarget);
      var categoryNumber = target.data('category');
      var clueNumber = target.data('clue');

      this.finishedQuestions.push(target.data());
      $(this.el).html(this.clueTemplate({clue: this.boardInfo[categoryNumber][clueNumber]}));
    },

    setTemplateInterpolator: function() {
      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };
    },

    hideFinishedQuestions: function() {
      _.each(this.finishedQuestions, function(question) {
        var selector = '.clue-value[data-category="' + question.category +
          '"][data-clue="' + question.clue + '"]';
        $(selector).addClass('hidden');
      });
    }

  })
});
