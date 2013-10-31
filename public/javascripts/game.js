var roundOneInfo = Config.RoundOne;
var roundTwoInfo = Config.RoundTwo;
var finalInfo = Config.Final;

var endRoundOne = function() {
  gameView.reset(roundTwoInfo);
  gameView.endGame = endRoundTwo;
  $(gameView.el).html(gameView.doubleJeopardyTemplate());
};

var endRoundTwo = function() {
  $(gameView.el).html(gameView.finalTitleTemplate(finalInfo));
};

var gameView = new Jeopardy.GameBoard({
  el: '#board',
  boardInfo: roundOneInfo,
  endGame: endRoundOne
});

$(gameView.el).html(gameView.frontPageTemplate());
