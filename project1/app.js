$("#red").animate({
    'marginLeft': '-=450px'
}, 10000);

//write a function that returns a random number between 1 and 600 (which is the width of the square).
function randNumber(){
  return Math.floor(Math.random() * 600);
}

//write a function that returns a random RGBA VALUE
function randomColor(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = Math.random();
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a +')'
}
