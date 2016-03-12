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
  }, 15000, 'linear');
}

animate('#red');
animate('#orange');
animate('#yellow');
animate('#green');
animate('#blue');
animate('#indigo');
animate('#violet');
}

$( document ).ready(function() {


// Returns a random number between 1 and 50.
function random() {
  return Math.floor(Math.random() * 60);
};

// Returns number ranging from 205 to 255, for RGB values.
function randomColor() {
  return 255 - random();
};

// Returns 50% chance of adding or subtracting 150.
 function plusOrMinus() {
   return (Math.random() < 0.5 ? -random() +150 : random() +150)
};

// Returns "randomized" RGB strings.
function randomRed() {
  return 'rgb(' + randomColor() + ',' + 0 + ',' + 0 + ')'
}

function randomOrange() {
  return 'rgb(' + 255 + ',' + plusOrMinus() + ',' + 0 + ')';
}

function randomYellow() {
  return 'rgb(' + 255  + ',' + randomColor() + ',' + 0 + ')';
}

function randomGreen() {
  return 'rgb(' + 0  + ',' + randomColor() + ',' + 0 + ')';
}

function randomBlue() {
  return 'rgb(' + 0  + ',' + 0 + ',' + randomColor() + ')';
}

function randomIndigo() {
  return 'rgb(' + plusOrMinus()  + ',' + 0 + ',' + 255 + ')';
}

function randomViolet() {
  return 'rgb(' + 255  + ',' + 0 + ',' + randomColor() + ')';
}

//Injects randomized background colors to divs.
function injection(id1, backgroundColor) {
  $(id1).each(function() {
      $(this).css("background-color", backgroundColor());
  });
}

// Inject random reds
injection("#red1", randomRed);
injection("#red2", randomRed);
injection("#red3", randomRed);

// Inject random oranges
injection("#orange1", randomOrange);
injection("#orange2", randomOrange);
injection("#orange3", randomOrange);

// Inject random yellows
injection("#yellow1", randomYellow);
injection("#yellow2", randomYellow);
injection("#yellow3", randomYellow);

// Inject random greens
injection("#green1", randomGreen);
injection("#green2", randomGreen);
injection("#green3", randomGreen);

// Inject random blues
injection("#blue1", randomBlue);
injection("#blue2", randomBlue);
injection("#blue3", randomBlue);

// Inject random indigos
injection("#indigo1", randomIndigo);
injection("#indigo2", randomIndigo);
injection("#indigo3", randomIndigo);

// Inject random violets
injection("#violet1", randomViolet);
injection("#violet2", randomViolet);
injection("#violet3", randomViolet);

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

$('.redbox').click(function(){
  pushBackground("#red", ".redbox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#red1", "#red2", "#red3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.orangebox').click(function(){
  pushBackground("#orange", ".orangebox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#orange1", "#orange2", "#orange3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.yellowbox').click(function(){
  pushBackground("#yellow", ".yellowbox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#yellow1", "#yellow2", "#yellow3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.greenbox').click(function(){
  pushBackground("#green", ".greenbox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#green1", "#green2", "#green3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.bluebox').click(function(){
  pushBackground("#blue", ".bluebox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#blue1", "#blue2", "#blue3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.purplebox').click(function(){
  pushBackground("#purple", ".purplebox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#purple1", "#purple2", "#purple3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.indigobox').click(function(){
  pushBackground("#indigo", ".indigobox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#indigo1", "#indigo2", "#indigo3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    clearArray();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.violetbox').click(function(){
  pushBackground("#violet", ".violetbox");
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)), "#violet1", "#violet2", "#violet3")
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    clearArray();
    $(this).parent().remove() && $("#victory").show() && $("#treasure").show() && $("#skull").show();
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
