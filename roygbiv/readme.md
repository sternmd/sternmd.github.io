# ROYGBIV: THE GAME

 Explanations of the game, technologies used, the approach taken, installation instructions, unsolved problems, etc.

## OUTLINE

ROYGBIV (pronounced [ROY-JEE-BIV]) is a color-matching puzzle game. The goal of the game is for a user to determine the brightest colored row in a moving stack of rows, before the stacks hit the opposite edge of the window.

Technologies used include HTML5/CSS3, Javascript, & jQuery.

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


* Each column is comprised of 3 rows, which have a random height. Each of the rows has a slight different shades of the respective color of the row. For example, the RED column will contain 3 different shades of the color red such as (255,0,0), (225, 0, 0), and (200, 0, 0).

* Each column disappears after the user correctly clicks on the brightest colored row, and the user receives +1 point. The user can only click on 1 of the 3 rows in the farthest left column.

* If the user clicks the incorrectly colored row, then the game is over. If the farthest left column hits the left side of the screen, then the game is over.

* ROYGBIV is a one-player game, but can be multiplayer with the purpose of a single user gaining the highest score. The player with the best colorvision wins!

## SIMPLE PSEUDOCODE

* Use HTML5/CSS3 to construct 6 columns. Each column will contains 3 divs, or rows.

* Use jQuery .animate() and HTML/CSS to move columns across the screen, from left to right.

* Write a Math.random color function that satisfies the needs of RGB colors ranging 100 units. Write a plusOrMinus function for colors that need units added to their base.

* Write function to set a random color to a column's respective divs. Ranges & string concatenation needed.

* Write a function to pull those colors into an array of arrays.

* Write a function to .slice any unnecessary strings such as "rgb(" and ")".

* Write a function that converts the array of arrays into pure Luminant Values. This formula determines true "perceived brightness" of the RGB value.

* Write a function to convert, parse, and pass those Luminant Values into their respective div's inline data types.

* Write a Math.max function that determines the highest Luminant value. Set that value to winner.

* Stylize the user interface with game rules, scoreCounter, and instructions with @font-face.

* Program a simple scoreCounter with jQuery & CSS.

* Set on.click if statement for if click matches winner, then trigger column .remove() and scoreCounter +1.

* Set on.click if statement for if click matches (===) winner data value, then trigger column .remove() and scoreCounter == +1.

* Set on.click if statement for if click does not match (!===) winner data value, then trigger animation.stop() and display GAMEOVER text.

* Set on.click if statement for if click matches (===) winner data value for the last column (violet), then trigger column .remove(), scoreCounter == +1, and display VICTORY text.

* Set condition if any column touches left side of screen, then trigger animation.stop() and display GAMEOVER text.

### SIDENOTES & HIGHLIGHTS

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
  return Math.floor(Math.random() * 100);
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
Function that strips RGB strings and pushed the bare values into an array:

```js
function rgbStripper(arrayOfRGB) {
  for (var i = 0; i < 3; i++) {
    arrayOfRGBColors.push(arrayOfRGB[i].slice(4, arrayOfRGB[i].length-1).split(","))
    }
```

Function that converts an array of RGB values - i.e. [255,0,0] - into single single luminence values.
```js
function parseLum(colorArray){
  var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminValue
}
```
