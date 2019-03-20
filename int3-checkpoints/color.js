// Creates variables for inputs to read values
var inputType = "input";
var newColorInput = document.getElementById("newColorInput");
var changeColorButton = document.getElementById("changeColorButton");
var newColorDropdown = document.getElementById("newColorDropdown");
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
var rText = document.getElementById("rText");
var gText = document.getElementById("gText");
var bText = document.getElementById("bText");
var inputs = document.getElementById("inputs");
var dropdown = document.getElementById("dropdown");
var sliders = document.getElementById("sliders");


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
  inputs.style.display = "block";
  dropdown.style.display = "none";
  sliders.style.display = "none";
}

function makeDropdown() {
  inputType = "dropdown";
  inputs.style.display = "none";
  dropdown.style.display = "block";
  sliders.style.display = "none";
}

function makeSlider() {
  inputType = "slider";
  inputs.style.display = "none";
  dropdown.style.display = "none";
  sliders.style.display = "block";
}

// Changes background depending on the input mode
function changeColor(){
  if (inputType == "input") {
    document.body.style.backgroundColor = newColorInput.value;
  } else if (inputType == "dropdown") {
    document.body.style.backgroundColor = newColorDropdown.value;
  } else if (inputType == "slider") {
    document.body.style.backgroundColor = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
    rText.textContent = r.value;
    gText.textContent = g.value;
    bText.textContent = b.value;
  }
}
