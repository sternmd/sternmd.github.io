# [ROYGBIV: THE GAME](https://sternmd.github.io/roygbiv/index.html)

![Roygbiv](http://s23.postimg.org/bp0prf97v/Screen_Shot_2016_03_11_at_9_34_34_AM.png)

## OUTLINE

Technologies used: HTML5/CSS3, Javascript, & jQuery.

Installation/compatibility: Google Chrome. Best played in full-screen to [ambient music](https://www.youtube.com/watch?v=Xw5AiRVqfqk).

ROYGBIV (pronounced [ROY-JEE-BIV]) is a color-matching puzzle game. The goal of the game is for a user to determine the brightest colored row in a moving stack of rows. ROYGBIV is a one-player game, but can be multiplayer (users take turns) with the purpose of a single user gaining the highest score. The player with the best colorvision wins!

## RULES

* An array of vertical stacks, or columns, are generated on the right side of the screen, and slowly move toward the left side of the screen.

* There are 6 possible columns that can be generated:

  * Red
  * Orange
  * Yellow
  * Green
  * Blue
  * Indigo
  * Violet


* Each column is comprised of 3 rows, which have equal height. Each of the rows has a slightly different hue of the respective color of the column. For example, the RED column will contain 3 different shades of the color red such as (255,0,0), (225, 0, 0), and (200, 0, 0).

* Each column disappears after the user correctly clicks on the brightest colored row, and the user receives +1 point. The player has only 1 try per each column to receive the point.

* If the user clicks the incorrectly colored row, then the game is over.

## SIMPLE PSEUDOCODE

* Use HTML5/CSS3 to construct 6 columns. Each column will contains 3 divs, or rows.

* Use jQuery .animate() and HTML/CSS to move columns across the screen, from left to right.

* Write a Math.random color function that satisfies the needs of RGB colors ranging ~60 units. Write a plusOrMinus function for colors that need units added to their base.

* Write function to set a random color to a column's respective divs. Ranges & string concatenation needed.

* Write a function to pull those colors into an array of arrays.

* Write a function to .slice any unnecessary strings such as "rgb(" and ")".

* Write a function that converts the array of arrays into pure Luminant Values. This formula determines true "perceived brightness" of the RGB value.

* Write a function to convert, parse, and pass those Luminant Values into their respective div's inline data types.

* Write a Math.max function that determines the highest Luminant value. Set that value to winner.

* Stylize the user interface with game rules, scoreCounter, and instructions with @font-face.

* Program a simple scoreCounter with jQuery & CSS.

* Set on.click if statement for if click matches (===) winner data value, then trigger column .remove() and scoreCounter == +1.

* Set on.click if statement for if click does not match (!===) winner data value, then trigger animation.stop() to sotop all movement and display GAMEOVER text.

* Set on.click if statement for if click matches (===) winner data value for the last column (violet), then trigger column .remove(), scoreCounter == +1, and display VICTORY text.

* Create a start() function/button to start the game.

### SIDENOTES, HIGHLIGHTS, & APPROACHES

Calculated rgb value color ranges for "random" colors:
```CSS
Pure Red: rgb(255, 0, 0);
/* Random red range: rgb(195-255, 0 , 0) */

Orange: rgb(255, 128, 0);
/* Random orange range: rgb(255, 100-200 , 0) */

Yellow: rgb(255, 255, 0);
/* Random yellow range: rgb(195-255, 255, 0) */

Green: rgb(0, 255, 0);
/* Random green range: rgb(0, 195-255, 0) */

Blue: rgb(0, 0, 255);
/* Random blue range: rgb(0, 0 , 195-255) */

Indigo: rgb(120, 0, 255);
/* Random indigo range: rgb(100-200, 0 , 255) */

Violet: rgb(255, 0, 255);
/* Random indigo range: rgb(255, 0 , 195-255) */
```

Functions that return a random RGB values for the ranges above:
```js

function random() {
  return Math.floor(Math.random() * 60);
};  

function randomColor() {
  return 255 - random();
};

 function plusOrMinus() {
   return (Math.random() < 0.5 ? -random() +150 : random() +150)
};

function roygbiv(){

  var randomRed = 'rgb(' + randomColor() + ',' + 0 + ',' + 0 + ')';

  var randomOrange = 'rgb(' + 255 + ',' + plusOrMinus() + ',' + 0 + ')';

  var randomYellow = 'rgb(' + 255  + ',' + randomColor() + ',' + 0 + ')';

  var randomGreen = 'rgb(' + 0  + ',' + randomColor() + ',' + 0 + ')';

  var randomBlue = 'rgb(' + 0  + ',' + 0 + ',' + randomColor() + ')';

  var randomViolet = 'rgb(' + 255  + ',' + 0 + ',' + randomColor() + ')';

};

```

Function Injects randomized background colors into divs.

```js
function injection(id1, backgroundColor) {
  $(id1).each(function() {
      $(this).css("background-color", backgroundColor());
  });
}

// Inject random reds...
injection("#red1", randomRed);
injection("#red2", randomRed);
injection("#red3", randomRed);

//...etc

```

```html
<div id="red">
  <div id="red1" class="redbox" data-lumvalue="">R1</div>
  <div id="red2" class="redbox" data-lumvalue="">R2</div>
  <div id="red3" class="redbox" data-lumvalue="">R3</div>
</div>
```


Function loops through columns' children and grabs random colors that were just applied (injection), then stores those rgb values into an array.

```js
function pushBackground(id1, div) {
var colors = $(id1).children(div);
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(colors[inc]).prop('style').backgroundColor));
  }
}
```
Function that strips RGB strings and pushes values into an array:

```js
function rgbStripper(arrayOfRGB) {
  for (var i = 0; i < 3; i++) {
    arrayOfRGBColors.push(arrayOfRGB[i].slice(4, arrayOfRGB[i].length-1).split(","))
    }

    // --> arrayOfRGBColors = [ [219,0,0],[210,0,0],[213,0,0] ]
```

Function evaluates array of 3 RGB value arrays and converts them into single array of luminance values (see function parseLum).
```js
var arrayOfCalcLuminance = [];

function calcLuminance(someArray){
  var array1 = someArray[0];
  var array2 = someArray[1];
  var array3 = someArray[2];
  arrayOfCalcLuminance.push(parseLum(array1));
  arrayOfCalcLuminance.push(parseLum(array2));
  arrayOfCalcLuminance.push(parseLum(array3));
  return arrayOfCalcLuminance
}
// --> arrayOfCalcLuminace = [57.64, 63.21, 54,76]
```

Function converts an array of RGB values - i.e. [255,0,0] - into single single luminance values.
```js
function parseLum(colorArray){
  var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminValue
}
```

Function passes an array of luminance values and determines the highest value. That value is the "brightest" color.
```js
function winner(arrayCalcWinner){
    return Math.max.apply(Math, arrayCalcWinner)
}
```

Function applies respective luminValue to the data value of the class.
```js

function applyData(finalLumArray, id1, id2, id3){
  for (var i = 0; i < finalLumArray.length; i++) {
    $(id1).data("lumvalue",finalLumArray[0]);
    $(id2).data("lumvalue",finalLumArray[1]);
    $(id3).data("lumvalue",finalLumArray[2]);
  }
}
```
User can unlock easter egg Hardmode upon winning the first round.

![Roygbiv Hardmode](http://s7.postimg.org/gplyzn7h7/Screen_Shot_2016_03_11_at_9_52_33_AM.png)


## UNSOLVED PROBLEMS

* Set condition (with 2D collision) if any column touches left side of screen, then trigger animation.stop() and display GAMEOVER text.

* Not enough time to clean up all repetitive JS code & set mobile responsiveness.

* Set a function to dynamically create new divs.

* Make new levels and higher difficulties.
