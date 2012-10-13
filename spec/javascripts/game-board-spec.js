describe("Jeopardy.GameBoard", function() {

  var boardInfo = {some: "thing", category1: {clue1: "blibbety"}};
  var board = function() {
    return new Jeopardy.GameBoard({boardInfo: boardInfo, el: "#test-div"});
  }

  it("sets the boardInfo", function() {
    expect(board().boardInfo).toEqual(boardInfo);
  });

  it("renders the board", function() {
    setFixtures('<div id="board-template">{{ some }}</div><div id="test-div"></div>');
    board().render();
    expect($('#test-div').text()).toEqual(boardInfo["some"]);
  });

  it("calls 'showClue' when .clue-value is clicked", function() {
    expect(board().events['click .clue-value']).toEqual('showClue');
  });

  it("shows the clue that is clicked", function() {
    setFixtures(
      '<div id="test-div"></div>' +
        '<div id="target" class="clue-value" data-category="category1" data-clue="clue1"></div>' +
        '<script type="text/template" id="board-template"><div>{{ some }}</div></script>' +
        '<script type="text/template" id="clue-template"><div class="clue">{{ clue }}</div></script>'
    );
    var event = {currentTarget: '#target'}
    board().showClue(event);
    expect($('#test-div').text()).toEqual(boardInfo.category1.clue1);
  });

});
