describe("Jeopardy.GameBoard", function() {

  it("sets the boardInfo", function() {
    var boardInfo = {some: "thing"};
    var board = new Jeopardy.GameBoard({boardInfo: boardInfo});
    expect(board.boardInfo).toEqual(boardInfo);
  });

  it("renders the board", function() {
    setFixtures('<div id="board-template">{{some}}</div><div id="test-div"></div>');
    var boardInfo = {some: "thing"};
    var board = new Jeopardy.GameBoard({boardInfo: boardInfo, el: "#test-div"});
    board.render();
    expect($('#test-div').text()).toEqual(boardInfo["some"]);
  });

});
