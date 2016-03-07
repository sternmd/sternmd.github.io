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

## INSTALLATION INSTRUCTIONS
