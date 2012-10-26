namespace("Jeopardy", {
  GameBoard: Backbone.View.extend({

    initialize: function() {
      this.setTemplateInterpolator();
      this.setViewTemplates();
      this.boardInfo = this.options.boardInfo;
      this.finishedQuestions = [];
      this.endGame = this.options.endGame;
      this.bindOutOfTime();
    },

    events: {
      'click .clue-value:not(.dailyDouble), [data-id="dailyDoubleText"]' : 'showClue',
      'click .clue, [data-id="doubleJeopardy"]' : 'showBoard',
      'click .dailyDouble' : 'showDailyDouble'
    },

    showBoard: function() {
      $(this.el).html(this.boardTemplate(this.boardInfo));
      this.hideFinishedQuestions();
      this.setDailyDoubles();
      if(this.finishedQuestions.length === $('.clue-value').length) {
        this.endGame();
      }
    },

    showClue: function(event) {
      var target = $(event.currentTarget);
      var categoryNumber = target.data('category');
      var clueNumber = target.data('clue');

      this.finishedQuestions.push(target.data());
      var clue = {clue: this.boardInfo[categoryNumber][clueNumber]};
      $(this.el).html(this.clueTemplate(clue));
    },

    showDailyDouble: function(event) {
      $(this.el).html(this.dailyDoubleTemplate($(event.currentTarget).data()));
      $('#dailyDoubleAudio').get(0).play();
    },

    reset: function(newBoardInfo) {
      this.finishedQuestions = [];
      this.boardInfo = newBoardInfo;
    },

    bindOutOfTime: function() {
      $(document).bind('keydown', function(event) {
        if(event.which == 88) {
          $('#outOfTime').get(0).play();
        }
      });
    },

    setTemplateInterpolator: function() {
      _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
      };
    },

    setViewTemplates: function() {
      this.boardTemplate = _.template($('#board-template').html());
      this.clueTemplate = _.template($('#clue-template').html());
      this.dailyDoubleTemplate = _.template($('#daily-double-template').html());
      this.doubleJeopardyTemplate = _.template($('#double-jeopardy-template').html());
    },

    hideFinishedQuestions: function() {
      this.addClassToClues(this.finishedQuestions, 'hidden');
    },

    setDailyDoubles: function() {
      this.addClassToClues(this.boardInfo.dailyDoubles, 'dailyDouble');
    },

    addClassToClues: function(collection, klass) {
      _.each(collection, function(question) {
        var selector = '.clue-value[data-category="' + question.category +
          '"][data-clue="' + question.clue + '"]';
        $(selector).addClass(klass);
      });
    }

  })
});
