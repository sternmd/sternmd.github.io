$( document ).ready(function() {
    console.log( "ready!" );


$("#red").animate({
    'marginLeft': '-=450px'
}, 10000);

//write a function that returns a random number between 1 and 50
//this is the range at which we want the colors r,g,b to vary.

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

function randomViolet() {
  return 'rgb(' + 255  + ',' + 0 + ',' + randomColor() + ')';
}

$("#red div :first").css("background-color",randomRed());
$("#red div :nth-child(2)").css("background-color",randomRed());
$("#red div :last").css("background-color",randomRed());

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


Find highest luminance of three divs. Set that to winnerDiv.

If user clicks winnerDiv, then column disappears .remove() and add +1 to scoreCounter.

// Set condition if wrong div is click, game over.
// Set condition if column hits left side of screen, game over.
});
