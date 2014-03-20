var endRoundOne = function() {
  gameView.reset(Config.RoundTwo);
  gameView.endGame = endRoundTwo;
  $(gameView.el).html(gameView.doubleJeopardyTemplate());
};

var endRoundTwo = function() {
  $(gameView.el).html(gameView.finalTitleTemplate(Config.Final));
};

var gameView = new Jeopardy.GameBoard({
  el: '#board',
  boardInfo: Config.RoundOne,
  endGame: endRoundOne
});

$(gameView.el).html(gameView.frontPageTemplate());
