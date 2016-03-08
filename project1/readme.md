# ROYGBIV: THE GAME

 Explanations of the game, technologies used, the approach taken, installation instructions, unsolved problems, etc.

## OUTLINE

ROYGBIV (pronounced [ROY-JEE-BIV]) is a color-matching puzzle game. The goal of the game is for a user to determine the brightest colored row in a moving stack of rows, before the stacks hit the opposite edge of the window.

Technologies used include HTML/CSS, Javascript, & jQuery.

## RULES

* An array of vertical stacks, or columns, are generated on the right side of the screen, and slowly move toward the left side of the screen.

* There are 6 possible columns that can be generated:

  * Red
  * Orange
  * Yellow
  * Green
  * Indigo
  * Violet


* Each column is comprised of 3 rows, which have a random height. Each of the rows has a slight different shades of the respective color of the row. For example, the RED column will contain 3 different shades of the color red such as (255,0,0), (225, 0, 0), and (200, 0, 0).

* Each column disappears after the user correctly clicks on the brightest colored row, and the user receives +1 point. The user can only click on 1 of the 3 rows in the farthest left column.

* If the user clicks the incorrectly colored row, then the game is over. If the farthest left column hits the left side of the screen, then the game is over.

* ROYGBIV is a one-player game, but can be multiplayer with the purpose of a single user gaining the highest score. The player with the best colorvision wins!

## SIMPLE PSEUDOCODE

* Simple Create 6 columns ids. Each column contains 3 divs.
* Use jQuery to inject a varying height for each div.
* Create function or loop that endless animates columns.
* Make columns move across the screen. From left to write.
* Write a randomColor function that satisfies all random colors in RGB with range 50.
* Write function to determine the brightest colored div in each column.
* Set on.click brightest colored div, make column disappears.
* Create scoreCoutner variable, set at 0. On correct click, scoreCounter + 1.
* Condition on.click wrong div, then game over.
* Condition if column touches left side of screen, then game over.

(Each column is an array of objects...?)

```CSS
#red {
    width: 100px;
    height: 500px;
    background-color: rgb(255,0,0);
    margin-left: 500px;   
}
```

Create 3 div child rows for each column. Fill a respective background-color to each child div row. Use math.random and math.floor to randomize colors.
Define colors in rgb:

```CSS
Red: rgb(255, 0, 0);

Orange: rgb(255, 128, 0);

Yellow: rgb(255, 255, 0);

Green: rgb(0, 255, 0);

Blue: rgb(0, 0, 255);

Indigo: rgb(120, 0, 255);

Violet: rgb(255, 0, 255);
```
Write a function that returns a random RGB VALUE
```js

function random() {
  return Math.floor(Math.random() * 50);
};  

function randomColor() {
  return 255 - random();
};

 function plusOrMinus() {
   return (Math.random() < 0.5 ? -random() +150 : random() +150)
};

function roygbiv(){

  var randomRed = 'rgb(' + randomColor() + ',' + 0 + ',' + 0 + ')';
  console.log(randomRed);

  var randomOrange = 'rgb(' + 255 + ',' + plusOrMinus() + ',' + 0 + ')';
  console.log(randomOrange); //SOMEHTING IS OFF HERE>..

  var randomYellow = 'rgb(' + 255  + ',' + randomColor() + ',' + 0 + ')';
  console.log(randomYellow);

  var randomGreen = 'rgb(' + 0  + ',' + randomColor() + ',' + 0 + ')';
  console.log(randomGreen);

  var randomBlue = 'rgb(' + 0  + ',' + 0 + ',' + randomColor() + ')';
  console.log(randomBlue);

  var randomViolet = 'rgb(' + 255  + ',' + 0 + ',' + randomColor() + ')';
  console.log(randomViolet);
};

roygbiv();

$($'red1').css(backgroundColor);

```

Set function to determine the brightest (most luminace) colored div in each column.
You have to extract the three RGB components individually, and then use a standard formula to convert the resulting RGB values into their perceived brightness.

```js


Assuming a RGB value character color:

var color = 'rgb(255,150,0)'

function colorSlicer(color) {
  var colorArray = color.slice(4,color.length-1).split(",");
  var luminace = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminace;
}
