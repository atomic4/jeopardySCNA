describe("Jeopardy.GameBoard", function() {

  beforeEach(function() {
    setFixtures(
      '<div id="test-div"></div>' +
        '<script type="text/template" id="board-template">' +
        '<div id="target" class="clue-value" data-category="category1" data-clue="clue1">' +
        '{{ some }}</div></script>' +
        '<script type="text/template" id="clue-template"><div class="clue">{{ clue }}</div></script>'
    );
    this.boardInfo = {some: "thing", category1: {clue1: "blibbety"}};
    this.board =  new Jeopardy.GameBoard({boardInfo: this.boardInfo, el: "#test-div"});
  });

  it("sets the boardInfo", function() {
    expect(this.board.boardInfo).toEqual(this.boardInfo);
  });

  describe("events", function() {
    it("calls 'showClue' when .clue-value is clicked", function() {
      expect(this.board.events['click .clue-value']).toEqual('showClue');
    });

    it("calls 'showBoard' when .clue is clicked", function() {
      expect(this.board.events['click .clue']).toEqual('showBoard');
    });
  });

  describe("#showBoard", function() {
    it("renders the board", function() {
      this.board.showBoard();
      expect($('#test-div').text()).toEqual(this.boardInfo["some"]);
    });

    it("hides a clue value after clicking on it", function() {
      this.board.showBoard();
      $('.clue-value').click();
      $('.clue').click();
      expect($('[data-category="category1"][data-clue="clue1"]')).toHaveClass("hidden");
    });
  });

  describe("#showClue", function() {
    it("shows the clue that corresponds to the value that is clicked", function() {
      var event = {currentTarget: '#target'}
      this.board.showBoard();
      this.board.showClue(event);
      expect($('#test-div').text()).toEqual(this.boardInfo.category1.clue1);
    });
  });

});
