# Oink-Oink #

#### By Katrina Hirsch & Mark Lawson (August 24th, 2016)

## Description ##

Oink-Oink (commonly known as "Pig") is a two player game where players alternate rolling dice. JavaScript is used to simulate die rolls. For a more detailed information on the history of the game, visit the Wikipedia page [here](https://en.wikipedia.org/wiki/Pig_%28dice_game%29).

## Specifications ##

* Rolling a die returns a number within a set range.
  * Example Input: (Player 1 clicks)
  * Example Output: 3

* Store die Roll in a Turn Total variable.
  * Example Input: 3
  * Example Output: 3

* Turn Total is updated based on new die roll.
  * Example Input: 2
  * Example Output: 5

* Turn ends if die Roll returns 1 and Turn Total is set to 0.
  * Example Input: 1
  * Example Output: "Bummer, your turn is over!"

* Turn also ends if Player clicks Hold button.
  * Example Input: (Hold)
  * Example Output: "Smart move, buddy."

* Player Score is updated based on Turn Total at end of turn.
  * Example Input: 5
  * Example Output: 10

* At end of turn, switch to opposite player.
  * Example Input: (Player 1 Score is updated)
  * Example Output: "It's your turn, Player 2!"

* Game ends when a Player Score reaches 100.
  * Example Input: 100
  * Example Output: "You win!"

## Setup/Installation Instructions ##

* Copy the repository from [GitHub](https://github.com/khirsch/pig-dice/)
* Open the index.html file in a browser window
* Open the console to confirm that JavaScript and jQuery are running (In Chrome, navigate to Menu > More Tools > Developer Tools > Console)

## GitHub Pages ##

This game can be viewed on GitHub Pages [here](https://khirsch.github.io/pig-dice/).

## Known Bugs ##

There are no known bugs at this time.

## Support and Contact Details ##

Please report any bugs or issues to katrina.hirsch@gmail.com or mlawson3691@gmail.com.

## Languages/Technologies Used ##

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Atom
* Chrome

### License ###

Copyright (c) 2016 Katrina Hirsch & Mark Lawson

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._
