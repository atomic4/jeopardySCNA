namespace("Config", {
  RoundTwo: {
    category1: {
      name: "It's All Assembly to Me",
      clue1: '<img src="images/c.png" class="code" />',
      clue2: '<img src="images/java.png" class="code" />',
      clue3: '<img src="images/haskell.png" class="code" />',
      clue4: '<img src="images/scala.png" class="code" />',
      clue5: '<img src="images/erlang.png" class="code" />'
    },
    category2: {
      name: 'A Platter of Patterns',
      clue1: 'In order to avoid errors, this pattern creates a predefined, neutral entity',
      clue2: 'When dealing with many objects at once, this pattern can be used to put a simpler front on the code',
      clue3: 'If you want to dynamically add some flair to an object, use this pattern',
      clue4: "Due to changing requirements, you may need to use this pattern to adjust an object's interface to conform to a different one",
      clue5: 'With this pattern, the subject will maintain a list of dependents, which will be notified of any changes'
    },
    category3: {
      name: 'You Down with HTTP?',
      clue1: 'Not Found',
      clue2: 'Not Modified',
      clue3: 'Service Unavailable',
      clue4: 'No Content',
      clue5: "I'm a teapot"
    },
    category4: {
      name: 'Language Inventors',
      clue1: 'Ruby',
      clue2: 'CoffeeScript',
      clue3: 'Perl',
      clue4: 'Smalltalk',
      clue5: 'Go'
    },
    category5: {
      name: 'Famous Bugs',
      clue1: 'When the level counter in Pac-Man reaches this number, the game will reach a kill screen, caused by the level counter being stored on a single byte',
      clue2: 'In 1997, while doing maneuvers off the coast of Virginia, the crew of the USS Yorktown (a Navy Smart Ship) entered a value in their database which caused this error (which would normally result in infinity), causing all machines on the ships network to go down',
      clue3: "This type of \"competitive\" bug in General Electric Energy's Unix-based XA/21 energy management system caused a widespread blackout in the Northeastern US in 2003",
      clue4: 'In 1999, the Mars Climate Orbiter was taken below the minimum safe altitude and disintegrated in the atmosphere because of a mixup in these units of force',
      clue5: 'Because 32-bit Unix systems interpret time as a signed 32-bit integer, which stores the number of seconds since midnight January 1, 1970, there may be a Y2K-like problem when that 32-bit integer runs out of bits in this year'
    },
    category6: {
      name: 'NTA',
      clue1: 'API',
      clue2: 'SRP',
      clue3: 'CORS',
      clue4: 'GNU',
      clue5: 'ACID'
    },
    dailyDoubles: [
      {category: 'category1', clue: 'clue5'},
      {category: 'category5', clue: 'clue3'}
    ],
    value1: '$200', value2: '$400', value3: '$600', value4: '$800', value5: '$1000'
  }
});
