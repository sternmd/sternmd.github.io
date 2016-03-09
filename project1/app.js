var arrayOfDivColors = [];
var arrayOfLuminance = [];
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

// $("#red div :first").css("background-color",randomRed());
// $("#red div :nth-child(2)").css("background-color",randomRed());
// $("#red div :last").css("background-color",randomRed());

//Injects randomized background colors to divs.

// REDS
$(".red1").each(function() {
    $(this).css("background-color", randomRed());
});

$(".red2").each(function() {
    $(this).css("background-color", randomRed());
});

$(".red3").each(function() {
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

// Convert RGB values into LUMINANCE (perceived brightness units) and push those colors into a new arrayOfLuminance.


// If user clicks winnerDiv, then column disappears .remove() and add +1 to scoreCounter.
// $('div class winner').click(function(){
// var scoreCounter =+ 1;
// (this).remove();
// });

// if $('#red').children('div').style.left == "0") {
//             alert('gameover');

// Set condition if wrong div is click, game over.

// Set condition if column hits left side of screen, game over.

// var offScreen = $('div#').css({
//       top: 0,
//       left: 0}); or if right = 100%
//
// var gameOver = $('#gameover').text("<center><h1>G A M E O V E R</h1><center>");
//
// if OffScreen {
//   return gameOver;
// }

// Endlessly spawn new divs columns.
// var new = $('#new');
// new.style.position = "absolute";
// new.style.left = $('div#:last-child').style.right.length() - 100px;
// new.style.width: 100px;
  // height: 900px;
  // top:0px;
});


function colorSlicer(arrayOfRGB) {
  // for loop through arrayOfDivColors,
  for (var i = 0; i < 3; i++) {
    arrayOfLuminance.push(arrayOfRGB[i].slice(4, arrayOfRGB[i].length-1).split(","))
  }
  // var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  // return luminValue;

  console.log(arrayOfLuminance);

  // eventually push sliced converted luminance values into a new array , run math.max() on those to determine Winner
  // type out arryofluminac[] 0-2, loop through and then run math.max on all of those variables
  // seperate funciton that takes three argumeents (which is each max value of an array), spits out maximum Luminance

  var lum1 = Math.max.apply(Math, arrayOfLuminance[0]); //226
  var lum2 = Math.max.apply(Math, arrayOfLuminance[1]); //208
  var lum3 = Math.max.apply(Math, arrayOfLuminance[2]); //211
  determineWinner(lum1, lum2, lum3)

  console.log('lum1: ' + lum1 + " lum2: " + lum2 + " lum3: " + lum3)
  // var winner = Math.max(lum1,lum2,lum3);
  // AddClass "winner" to div with highest LuminValue .append / AddClass winner??
  // for loop
}

// write a function that takes in array of lUminance
// Calculate the lumniValue for each array in the array
function calcLum(someArray){
  var array1 = someArray[0]
  var array2 = someArray[1]
  var array3 = someArray[2]
  arrayOfCalcLuminance.push(parseLum(array1))

}

var arrayOfCalcLuminance = []

function parseLum(colorArray){
  var luminValue = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminValue
}

function determineWinner(lum1,lum2,lum3) {
  Math.max(lum1,lum2,lum3);
  console.log(Math.max(lum1,lum2,lum3));
}
