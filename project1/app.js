$( document ).ready(function() {

    // $("#red").animate({
    //     'marginLeft': '-=100%'
    // }, 15000);

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

        $('#indigo').animate ({
            right: '+=100%',
        }, 15000, 'linear');
    }
    loopViolet();




    // $("#orange").animate({
    //     'marginLeft': '-=100%'
    // }, 15000);

    $("#yellow").animate({
        'marginLeft': '-=100%'
    }, 15000);

    $("#green").animate({
        'marginLeft': '-=100%'
    }, 15000);

    $("#blue").animate({
        'marginLeft': '-=100%'
    }, 15000);

    $("#indigo").animate({
        'marginLeft': '-=100%'
    }, 15000);

    $("#purple").animate({
        'marginLeft': '-=100%'
    }, 15000);

    $("#violet").animate({
        'marginLeft': '-=100%'
    }, 15000);


// write a function that returns a random number between 1 and 50
// this is the range at which we want the colors r,g,b to vary.

function random() {
  return Math.floor(Math.random() * 50);
};

function randomColor() {
  return 255 - random();
};

 function plusOrMinus() {
   return (Math.random() < 0.5 ? -random() +150 : random() +150)
};

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

//REDS
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

var redColors = $('#red').children('div');
for (var inc = 0; inc < 3; inc++) {
  console.log($(redColors[inc]).prop('style').backgroundColor);
  }

//Returns all RGB values from the divs.

var redOne = redColors.prop('style').backgroundColor;

//Returns single RGB value a div.

// Set a function to determine Luminance from a RGB value.
// Extract the three RGB components individually.
// Then use a standard formula to convert the resulting RGB values into perceived brightness.

// --> colorSlicer(black)=0;
// --> colorSlicker(yellow)=226;

// The higher the luminance number, the brighter the color.

var color = 'rgb(255,150,0)'

function colorSlicer(color) {
  var colorArray = color.slice(4,color.length-1).split(",");
  var luminace = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminace;
}

// Find highest luminance of three divs. Set that to winnerDiv.

// var winnerDiv =

// If user clicks winnerDiv, then column disappears .remove() and add +1 to scoreCounter.

// Set condition if wrong div is click, game over.
// Set condition if column hits left side of screen, game over.
});
