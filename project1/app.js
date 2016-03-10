var arrayOfDivColors = [];
var arrayOfRGBColors = [];
var scoreCounter = 0;

$( document ).ready(function() {

// Moves column IDs across screen.
function loopRed() {

    $('#red').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopRed();


function loopOrange() {

    $('#orange').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopOrange();


function loopYellow() {

    $('#yellow').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopYellow();


function loopGreen() {

    $('#green').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopGreen();

function loopBlue() {

    $('#blue').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopBlue();

function loopIndigo() {

    $('#indigo').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopIndigo();

function loopViolet() {

    $('#violet').animate ({
        right: '+=100%',
    }, 15000, 'linear');
}
loopViolet();

// Returns a random number between 1 and 50.
function random() {
  return Math.floor(Math.random() * 50);
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

// REDS
$("#red1").each(function() {
    $(this).css("background-color", randomRed());
});

$("#red2").each(function() {
    $(this).css("background-color", randomRed());
});

$("#red3").each(function() {
    $(this).css("background-color", randomRed());
});

//ORANGES
$("#orange1").each(function() {
    $(this).css("background-color", randomOrange());
});

$("#orange2").each(function() {
    $(this).css("background-color", randomOrange());
});

$("#orange3").each(function() {
    $(this).css("background-color", randomOrange());
});

//YELLOW
$("#yellow1").each(function() {
    $(this).css("background-color", randomYellow());
});

$("#yellow2").each(function() {
    $(this).css("background-color", randomYellow());
});

$("#yellow3").each(function() {
    $(this).css("background-color", randomYellow());
});

//GREEN
$("#green1").each(function() {
    $(this).css("background-color", randomGreen());
});

$("#green2").each(function() {
    $(this).css("background-color", randomGreen());
});

$("#green3").each(function() {
    $(this).css("background-color", randomGreen());
});

//BLUE
$("#blue1").each(function() {
    $(this).css("background-color", randomBlue());
});

$("#blue2").each(function() {
    $(this).css("background-color", randomBlue());
});

$("#blue3").each(function() {
    $(this).css("background-color", randomBlue());
});

//INDIGO
$("#indigo1").each(function() {
    $(this).css("background-color", randomIndigo());
});

$("#indigo2").each(function() {
    $(this).css("background-color", randomIndigo());
});

$("#indigo3").each(function() {
    $(this).css("background-color", randomIndigo());
});

//VIOLET
$("#violet1").each(function() {
    $(this).css("background-color", randomViolet());
});

$("#violet2").each(function() {
    $(this).css("background-color", randomViolet());
});

$("#violet3").each(function() {
    $(this).css("background-color", randomViolet());

});

// Extracts all RGB values that are applied to divs within columns into an arrayOfColors.
var redColors = $('#red').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(redColors[inc]).prop('style').backgroundColor));
  }

var orangeColors = $('#orange').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(orangeColors[inc]).prop('style').backgroundColor));
  }

var yellowColors = $('#yellow').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(yellowColors[inc]).prop('style').backgroundColor));
  }

var greenColors = $('#green').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(greenColors[inc]).prop('style').backgroundColor));
  }

var blueColors = $('#blue').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(blueColors[inc]).prop('style').backgroundColor));
  }

var indigoColors = $('#indigo').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(indigoColors[inc]).prop('style').backgroundColor));
  }

var violetColors = $('#violet').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(violetColors[inc]).prop('style').backgroundColor));
  }

console.log(arrayOfDivColors);

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
function applyData(finalLumArray){
  for (var i = 0; i < finalLumArray.length; i++) {
    $('#red1').data("lumvalue",finalLumArray[0]);
    $('#red2').data("lumvalue",finalLumArray[1]);
    $('#red3').data("lumvalue",finalLumArray[2]);
  }
}

// ON CLICK EVENTS

$('.redbox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  } else $("#gameover").show() && $("body div").stop();
})

$('.redbox').click(function(){
  arrayOfDivColors     = [];
  arrayOfRGBColors     = [];
  arrayOfCalcLuminance = [];
})

// var right = $('#red').css('right');
// if (right == '100%') {
//     alert("it's blue!")};
// if( $('#red').css('right') === '100%' ) {
//   console.log('ok');
// }

// if ($('body div').prop('style').right == 100%) {
//   alert('over');
// }

$('.orangebox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.yellowbox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.greenbox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.bluebox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.greenbox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.bluebox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.indigobox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})

$('.violetbox').click(function(){
  applyData(calcLuminance(rgbStripper(arrayOfDivColors)))
  var allMyCalc = calcLuminance(rgbStripper(arrayOfDivColors))
  console.log($(this).data('lumvalue'))
  if($(this).data('lumvalue') === winner(allMyCalc)){
    $(this).parent().remove();
    $('#counter').html(function(i, val) { return +val+1 });
  }
})


// Endlessly spawn new divs columns.
// var new = $('#new'); append?
// new.style.position = "absolute";
// new.style.left = $('div#:last-child').style.right.length() - 100px;
// new.style.width: 100px;
// height: 900px;
// top:0px;

//DONE Set condition if wrong div is click, game over.

// Set condition if column hits left side of screen, game over.

//       left: 0}); or if right = 100%
