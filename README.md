private static double jeopardy;
--------------------------------

A javascript implementation of a Jeopardy!&copy;-style game

### Setting it up
* Replace the clues and categories from these files, as shown below:
  * public/javascripts/round\_one.js
  * public/javascripts/round\_two.js
  * public/javascripts/final.js

```javascript
category4: {
  name: "The Simpsons",
  clue1: "The J. in Homer J. Simpson, stands for this"
  clue2: "Hi! You might remember this actor from such educational films as '2 - 3 = -FUN' and 'Firecrackers: The Silent Killer'",
  clue3: "Marge's sister, Selma, first added a hyphen to her name after her marriage to this chronic convict",
  clue4: "Lyle Lanley has sold monorails to Brockway, Ogdenville, and this city",
  clue5: "The cat burglar Molloy steals the world's largest one of these in the episode 'Homer the Vigilante'",
}
```

* Also set the dollar amounts that questions are worth and the locations of daily doubles, like so:

```javascript
dailyDoubles: [{category: "category4", clue: "clue5"}],
value1: "$100",
value2: "$200",
value3: "$300",
value4: "$400",
value5: "$500"
```

### Running the game
* Type `./script/game_on` in your terminal, and the game will open in your browser
* Click through the title screen and click values on the board to reveal clues
* The Daily Double sound will play automatically
* To play the "Think Theme", press `T`
* To play the "Out of Time" sound, press `X`
* To skip to the next round, press `Shift + N`

### Running tests
* Type `./script/run_tests` in your terminal, and the tests will open in your browser
