describe("Jeopardy.GameBoard", function() {

  beforeEach(function() {
    setFixtures(
      '<div id="test-div"></div>' +
        '<script type="text/template" id="board-template">' +
        '<div id="target" class="clue-value" data-category="category1" data-clue="clue1">' +
        '{{ some }}</div></script>' +
        '<div class="clue-value" data-category="category1" data-clue="clue2">' +
        '{{ some }}</div></script>' +
        '<script type="text/template" id="clue-template"><div class="clue">{{ clue }}</div></script>' +
        '<script type="text/template" id="daily-double-template">' +
        '<audio id="dailyDoubleAudio"></audio>' +
        '<div id="dailyDoubleText" data-category="{{ category }}" data-clue="{{ clue }}">' +
        'Daily Double</div></script>'
    );
    this.boardInfo = {
      some: "thing",
      category1: {clue1: "blibbety"},
      dailyDoubles: [{category: 'category1', clue: 'clue2'}]
    };
    this.board =  new Jeopardy.GameBoard({
      boardInfo: this.boardInfo,
      el: "#test-div",
      endGame: function() {}
    });
  });

  it("sets the boardInfo", function() {
    expect(this.board.boardInfo).toEqual(this.boardInfo);
  });

  describe("events", function() {
    it("calls 'showClue' when .clue-value is clicked", function() {
      expect(this.board.events['click .clue-value:not(.dailyDouble), .dailyDoubleText']).toEqual('showClue');
    });

    it("calls 'showBoard' when .clue is clicked", function() {
      expect(this.board.events['click .clue']).toEqual('showBoard');
    });

    it("calls 'showDailyDouble' when .dailyDouble is clicked", function() {
      expect(this.board.events['click .dailyDouble']).toEqual('showDailyDouble');
    });
  });

  describe("#showBoard", function() {
    it("renders the board", function() {
      this.board.showBoard();
      expect($('#test-div').text()).toEqual(this.boardInfo["some"]);
    });

    it("hides a clue value after clicking on it", function() {
      this.board.showBoard();
      $('.clue-value:not(.dailyDouble)').click();
      $('.clue').click();
      expect($('[data-category="category1"][data-clue="clue1"]')).toHaveClass("hidden");
    });

    it("sets the daily doubles", function() {
      this.board.showBoard();
      expect($('[data-category="category1"][data-clue="clue2"]')).toHaveClass("dailyDouble");
    });

    it("calls the endGame callback when no more clues are left", function() {
      var endGameSpy = spyOn(this.board, 'endGame');
      this.board.showBoard();
      expect(endGameSpy).not.toHaveBeenCalled();
      spyOn(this.board, 'hideFinishedQuestions');
      var fakeFinishedQuestions = {length: $('.clue-value').length};
      this.board.finishedQuestions = fakeFinishedQuestions;
      this.board.showBoard();
      expect(endGameSpy).toHaveBeenCalled();
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

  describe("#showDailyDouble", function() {
    it("shows the daily double screen", function() {
      var event = {currentTarget: '.dailyDouble'}
      this.board.showBoard();
      this.board.showDailyDouble(event);
      expect($('#test-div').text()).toEqual("Daily Double");
    });
  });

  describe("#reset", function() {
    it("resets the finishedQuestions", function() {
      this.board.finishedQuestions.push("hey there");
      this.board.reset();
      expect(this.board.finishedQuestions).toEqual([]);
    });

    it("resets the boardInfo to the given object", function() {
      this.board.reset("something totally different");
      expect(this.board.boardInfo).toEqual("something totally different");
    });
  });

});
