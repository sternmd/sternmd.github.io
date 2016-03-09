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

// Extracts all RGB values that are applied to divs within columns.
var redColors = $('#red').children('div');
for (var inc = 0; inc < 3; inc++) {
  console.log($(redColors[inc]).prop('style').backgroundColor);
  }

// Returns single RGB value that is applied to divs within columns.
var redOne = redColors.prop('style').backgroundColor;

// Convert RGB values into LUMINANCE (perceived brightness units).
var color = 'rgb(255,150,0)'

function colorSlicer(color) {
  var colorArray = color.slice(4,color.length-1).split(",");
  var luminace = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminace;
}
// --> colorSlicer(black)   = 0;
// --> colorSlicker(yellow) = 226;
// The higher the luminance number, the brighter the color.

// var highest = Math.max() ... ?

// Find highest luminance of three divs. Set that to winnerDiv.
// .append / AddClass winner??
// for loop


// var winnerDiv =

// If user clicks winnerDiv, then column disappears .remove() and add +1 to scoreCounter.

// $('div class/id winner').click(function(){
// var scoreCounter =+ 1;
// (this).remove();
//});

// Set condition if wrong div is click, game over.

// Set condition if column hits left side of screen, game over.

// var offScreen = $('div#').css({
//       top: 0,
//       left: 0});
//
// var gameOver = $('#gameover').text("<center><h1>G A M E O V E R</h1><center>");
//
// if OffScreen {
//   return gameOver;
// }

});
