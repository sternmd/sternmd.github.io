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


// $($'div1').css(backgroundColor);
// Set a function to determine the brightest (most luminescent) colored
// You have to extract the three RGB components individually,
// and then use a standard formula to convert the resulting RGB values into their perceived brightness.


var color = 'rgb(255,150,0)'

function colorSlicer(color) {
  var colorArray = color.slice(4,color.length-1).split(",");
  var luminace = 0.299 * parseInt(colorArray[0]) + 0.587 * parseInt(colorArray[1]) + 0.114 * parseInt(colorArray[2]);
  return luminace;
}


});
