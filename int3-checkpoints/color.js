// Creates variables for inputs to read values
var inputType = "input";
var newColorInput = document.getElementById("newColorInput");
var changeColorButton = document.getElementById("changeColorButton");
var newColorDropdown = document.getElementById("newColorDropdown");
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");

// Checks if mouse clicks on the button
changeColorButton.addEventListener("click", changeColor);

// Checks if enter key is pressed in textbox
function enter(key){
  if(key.keyCode === 13){
    changeColor();
  }
}

// Changes input mode and hides or shows inputs
function makeInput() {
  inputType = "input";
  document.getElementById("inputs").style.display = "block";
  document.getElementById("dropdown").style.display = "none";
  document.getElementById("sliders").style.display = "none";
}

function makeDropdown() {
  inputType = "dropdown";
  document.getElementById("inputs").style.display = "none";
  document.getElementById("dropdown").style.display = "block";
  document.getElementById("sliders").style.display = "none";
}

function makeSlider() {
  inputType = "slider";
  document.getElementById("inputs").style.display = "none";
  document.getElementById("dropdown").style.display = "none";
  document.getElementById("sliders").style.display = "block";
}

// Changes background depending on the input mode
function changeColor(){
  if (inputType == "input") {
    document.body.style.backgroundColor = newColorInput.value;
  } else if (inputType == "dropdown") {
    document.body.style.backgroundColor = newColorDropdown.value;
  } else if (inputType == "slider") {
  document.body.style.backgroundColor = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
  }
}
