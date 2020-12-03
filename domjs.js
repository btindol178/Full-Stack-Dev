// grab h1 element
var header = document.querySelector("h1")

// changing color

header.style.color = 'red';


// random color changing
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i ++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// function for clairty
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// perform code over interval in miliseconds
setinterval("changeHeaderColor()", 500)
