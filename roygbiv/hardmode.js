//HARDMODE

var arrayOfDivColors = [];
var arrayOfRGBColors = [];
var scoreCounter = 0;

function pushBackground(id1, div) {
var colors = $(id1).children(div);
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(colors[inc]).prop('style').backgroundColor));
  }
}

function start(){

// Moves column IDs across screen.
function animate(id){
  $(id).animate ({
      right: '+=100%',
  }, 6000, 'linear');
}

animate('#white');
animate('#gray');
animate('#black');
}

$( document ).ready(function() {


// Returns a random number between 1 and 50.
function random() {
  return Math.floor(Math.random() * 10);
};

// Returns number ranging from 205 to 255, for RGB values.
function randomColor() {
  return 255 - random();
};


// Returns 50% chance of adding or subtracting 150.
 function plusOrMinus() {
   return (Math.random() < 0.5 ? -random() +150 : random() +150)
};

function randomPlus() {
  return 0 + random();
}

function GrayPlus() {
  return 220 - random();
}

// Returns "randomized" RGB strings.

function randomWhite() {
  return 'rgb(' + randomColor()  + ',' + randomColor() + ',' + randomColor() + ')';
}

function randomGray() {
  return 'rgb(' + GrayPlus()  + ',' + GrayPlus() + ',' + GrayPlus() + ')';
}

function randomBlack() {
  return 'rgb(' + randomPlus()  + ',' + randomPlus() + ',' + randomPlus() + ')';
}

//Injects randomized background colors to divs.
function injection(id1, backgroundColor) {
  $(id1).each(function() {
      $(this).css("background-color", backgroundColor());
  });
}

// Inject random reds
injection("#white1", randomWhite);
injection("#white2", randomWhite);
injection("#white3", randomWhite);

// Inject random yellows
injection("#gray1", randomGray);
injection("#gray2", randomGray);
injection("#gray3", randomGray);

// Inject random oranges
injection("#black1", randomBlack);
injection("#black2", randomBlack);
injection("#black3", randomBlack);


}); // End of onload

// This function can take the arrayOfDivColors (RGBs) and strips letters and parentheses.
// The stripped RGBs are pushed into a new array called arrayOfRGBColors --
function rgbStripper(arrayOfRGB) {
  for (var i = 0; i < 3; i++) {
    arrayOfRGBColors.push(arrayOfRGB[i].slice(4, arrayOfRGB[i].length-1).split(","))
    }
    return arrayOfRGBColors
  }
// --> arrayOfRGBColors [ [219,0,0],[210,0,0],[213,0,0] ]

// Calculate the lumniValue for each RGB array in the array
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

function winner(arrayCalcWinner){
    return Math.max.apply(Math, arrayCalcWinner)
}

//this function takes an array of RGB values - [255,0,0] - and converts it into a single LuminValue - .
function parseLum(colorArray){
  var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminValue
}

// This function applies respective luminValue to the data value of the class.
function applyData(finalLumArray, id1, id2, id3){
  for (var i = 0; i < finalLumArray.length; i++) {
    $(id1).data("lumvalue",finalLumArray[0]);
    $(id2).data("lumvalue",finalLumArray[1]);
    $(id3).data("lumvalue",finalLumArray[2]);
  }
}

// ON CLICK EVENTS

function clearArray() {
  arrayOfDivColors     = [];
  arrayOfRGBColors     = [];
  arrayOfCalcLuminance = [];
}

$('.whitebox').click(function(){
  pushBackground("#white", ".whitebox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#white1", "#white2", "#white3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    clearArray();
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.graybox').click(function(){
  pushBackground("#gray", ".graybox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#gray1", "#gray2", "#gray3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    clearArray();
    $(this).parent().remove() && $("#victory").show() && $("#treasure").show();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.blackbox').click(function(){
  pushBackground("#black", ".blackbox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#black1", "#black2", "#black3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    clearArray();
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('#start').click(function(){
    start();
    $(this).hide();
})

function blinker() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}

setInterval(blinker, 1000);
// Endlessly spawn new divs columns.
// var new = $('#new'); append?
// new.style.position = "absolute";
// new.style.left = $('div#:last-child').style.right.length() - 100px;
// new.style.width: 100px;
// height: 900px;
// top:0px;

//DONE Set condition if wrong div is click, game over.
// Make columns move off screen!
// Set condition if column hits left side of screen, game over.
// Generate new divs.

//       left: 0}); or if right = 100%

// var right = $('#red').css('right');
// if (right == '100%') {
//     alert("it's blue!")};
// if( $('#red').css('right') === '100%' ) {
//   console.log('ok');
// }

// if ($('body div').prop('style').right == 100%) {
//   alert('over');
// }
