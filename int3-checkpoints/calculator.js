// Creates variable for each button and output
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");
var output = document.getElementById("output");

// Detects mouse clicking over buttons
one.addEventListener("click", pressedOne);
two.addEventListener("click", pressedTwo);
three.addEventListener("click", pressedThree);
four.addEventListener("click", pressedFour);
five.addEventListener("click", pressedFive);
six.addEventListener("click", pressedSix);
seven.addEventListener("click", pressedSeven);
eight.addEventListener("click", pressedEight);
nine.addEventListener("click", pressedNine);
zero.addEventListener("click", pressedZero);
add.addEventListener("click", pressedAdd);
subtract.addEventListener("click", pressedSubtract);
multiply.addEventListener("click", pressedMultiply);
divide.addEventListener("click", pressedDivide);
clear.addEventListener("click", pressedClear);
equal.addEventListener("click", pressedEqual);

// Sets initialization variables
var value = "";
var previousValue = "";
var operation = "";
var outputNumber = false;

// Make calculations
function pressedOne(){
  value *= 10;
  value += 1;
  updateValue();
  outputNumber = false;
}
function pressedTwo(){
  value *= 10;
  value += 2;
  updateValue();
  outputNumber = false;
}
function pressedThree(){
  value *= 10;
  value += 3;
  updateValue();
  outputNumber = false;
}
function pressedFour(){
  value *= 10;
  value += 4;
  updateValue();
  outputNumber = false;
}
function pressedFive(){
  value *= 10;
  value += 5;
  updateValue();
  outputNumber = false;
}
function pressedSix(){
  value *= 10;
  value += 6;
  updateValue();
  outputNumber = false;
}
function pressedSeven(){
  value *= 10;
  value += 7;
  updateValue();
  outputNumber = false;
}
function pressedEight(){
  value *= 10;
  value += 8;
  updateValue();
  outputNumber = false;
}
function pressedNine(){
  value *= 10;
  value += 9;
  updateValue();
  outputNumber = false;
}
function pressedZero(){
  value *= 10;
  updateValue();
  outputNumber = false;
}
function pressedAdd(){
  if (value != "") {
    if (previousValue != "") {
      pressedEqual();
    }
    if (outputNumber == false) {
      previousValue = value;
    }
    value = "";
  }
  operation = "add";
}
function pressedSubtract(){
  if (value != "") {
    if (previousValue != "") {
      pressedEqual();
    }
    if (outputNumber == false) {
      previousValue = value;
    }
    value = "";
  }
  operation = "subtract";
}
function pressedMultiply(){
  if (value != "") {
    if (previousValue != "") {
      pressedEqual();
    }
    if (outputNumber == false) {
      previousValue = value;
    }
    value = "";
  }
  operation = "multiply";
}
function pressedDivide(){
  if (value != "") {
    if (previousValue != "") {
      pressedEqual();
    }
    if (outputNumber == false) {
      previousValue = value;
    }
    value = "";
  }
  operation = "divide";
}
function pressedClear(){
  value = 0;
  previousValue = "";
  operation = "";
  updateValue();
}
function pressedEqual(){
  if (operation == "add") {
    value = previousValue + value;
  } else if (operation == "subtract") {
    value = previousValue - value;
  } else if (operation == "multiply") {
    value = previousValue * value;
  } else if (operation == "divide") {
    value = previousValue / value;
  }
  updateValue();
  previousValue = value;
  value = "";
  outputNumber = true;
}

function updateValue(){
  output.innerHTML = value;
}
