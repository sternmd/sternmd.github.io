var arrayOfDivColors = [];
var arrayOfRGBColors = [];
var scoreCounter = 0;

$( document ).ready(function() {


function applyData(finalLumArray){
  for (var i = 0; i < finalLumArray.length; i++) {
    $('#red1').data("lumvalue",finalLumArray[0];
    // $('#red2').data( "lumvalue", finalLumArray[1] );
    // $('#red3').data( "lumvalue", finalLumArray[1] );
    // $(#red).attr('data-lumvalue',finalLumArray[0]);
  }
}

$('.red1').data('lumvalue')

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

    // $("#violet").animate({
    //     'marginLeft': '-=100%'
    // }, 15000);

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
$(".orange1").each(function() {
    $(this).css("background-color", randomOrange());
});

$(".orange2").each(function() {
    $(this).css("background-color", randomOrange());
});

$(".orange3").each(function() {
    $(this).css("background-color", randomOrange());
});

//YELLOW
$(".yellow1").each(function() {
    $(this).css("background-color", randomYellow());
});

$(".yellow2").each(function() {
    $(this).css("background-color", randomYellow());
});

$(".yellow3").each(function() {
    $(this).css("background-color", randomYellow());
});

//GREEN
$(".green1").each(function() {
    $(this).css("background-color", randomGreen());
});

$(".green2").each(function() {
    $(this).css("background-color", randomGreen());
});

$(".green3").each(function() {
    $(this).css("background-color", randomGreen());
});

//BLUE
$(".blue1").each(function() {
    $(this).css("background-color", randomBlue());
});

$(".blue2").each(function() {
    $(this).css("background-color", randomBlue());
});

$(".blue3").each(function() {
    $(this).css("background-color", randomBlue());
});

//INDIGO
$(".indigo1").each(function() {
    $(this).css("background-color", randomIndigo());
});

$(".indigo2").each(function() {
    $(this).css("background-color", randomIndigo());
});

$(".indigo3").each(function() {
    $(this).css("background-color", randomIndigo());
});

//VIOLET
$(".violet1").each(function() {
    $(this).css("background-color", randomViolet());
});

$(".violet2").each(function() {
    $(this).css("background-color", randomViolet());
});

$(".violet3").each(function() {
    $(this).css("background-color", randomViolet());

});

// Extracts all RGB values that are applied to divs within columns into an arrayOfColors.
var redColors = $('#red').children('div');
for (var inc = 0; inc < 3; inc++) {
  arrayOfDivColors.push(($(redColors[inc]).prop('style').backgroundColor));
  }

console.log(arrayOfDivColors);

//THIS RETURNS FINAL LUM ARRAY



// Set condition if wrong div is click, game over.

// Set condition if column hits left side of screen, game over.

//       left: 0}); or if right = 100%
//
// var gameOver = $('#gameover').text("<center><h1>G A M E O V E R</h1><center>");
//
// if OffScreen {
//   return gameOver;
// }

// Endlessly spawn new divs columns.
// var new = $('#new'); append?
// new.style.position = "absolute";
// new.style.left = $('div#:last-child').style.right.length() - 100px;
// new.style.width: 100px;
  // height: 900px;
  // top:0px;
});

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
// -->
function winner(arrayCalcWinner){
  Math.max.apply(Math, arrayCalcWinner)
}
//this function takes an array of RGB values - [255,0,0] - and converts it into a single LuminValue - .
function parseLum(colorArray){
  var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminValue
}

// var winner = Math.max(lum1,lum2,lum3);
//   var lum1 = Math.max.apply(Math, arrayOfRGBColors[0]); //
//   var lum2 = Math.max.apply(Math, arrayOfRGBColors[1]); //
//   var lum3 = Math.max.apply(Math, arrayOfRGBColors[2]); //
//
// console.log('lum1: ' + lum1 + " lum2: " + lum2 + " lum3: " + lum3)
//
// function determineWinner(lum1,lum2,lum3) {
//   Math.max(lum1,lum2,lum3);
//   console.log(Math.max(lum1,lum2,lum3));
// }


// $('div').click(function(){
//    $(this).parent().remove();
// });

// $('div').click(function() {
//   $(this).parent().remove();}

$('#red1').click(function(){
   $(this).parent().remove();
   $('#counter').html(function(i, val) { return +val+1 });
  //  scoreCounter =+1;
})
// calcLuminance(rgbStripper(arrayOfDivColors))
// if ($('div').css({right: 100%).prop('style').right == 100%){
//   $('h1').append("<strong>GAMEOVER</strong>")
// }
