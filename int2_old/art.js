/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(window.innerWidth, window.innerHeight * 0.945);background(247, 242, 247);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

// Variables for distance and angle calculations
var mouseDistanceX;
var mouseDistanceY;
var mouseDistance;
var slope;
var tempAngle;
var angle;

// Variables for circle position and movement
var circleX = window.innerWidth / 2;
var circleY = window.innerHeight * 0.945 / 2;
var edgeMovementX;
var edgeMovementY;

// Variables for colors
var redColor = 294;
var greenColor = 0;
var blueColor = 0;
var redChange = 0.4;
var greenChange = -0.8;
var blueChange = 0.8;

// Array to store circles
var snake = [];
var snakeCircle = [];

// Calculate distance between mouse and circle
function calculateMouseDistance() {
    // Calculate triangle side lengths and slope, along with angle factor
    mouseDistanceX = mouseX - circleX;
    mouseDistanceY = mouseY - circleY;
    mouseDistance = sqrt(pow(mouseDistanceX, 2) + pow(mouseDistanceY, 2));
    slope = mouseDistanceY / mouseDistanceX;
    tempAngle = atan(slope) * 180 / PI;

    // Adjust angle for all 4 quadrants
    if (mouseX < circleX) {
        angle = abs(tempAngle + 90) + 90;
    } else if (mouseX >= circleX && mouseY < circleY) {
        angle = abs(tempAngle + 90) + 270;
    } else {
        angle = tempAngle;
    }
}

// Detects if circle is too close or outside of edges, and if so pushes it back in
function edgeCheck() {
    // Sides of box
    if (circleX < 50) {
        edgeMovementX = 3;
    } else if (circleX > window.innerWidth - 50) {
        edgeMovementX = -3;
    } else {
        edgeMovementX = 0;
    }

    // Top and bottom of box
    if (circleY < 50) {
        edgeMovementY = 3;
    } else if (circleY > window.innerHeight * 0.945 - 50) {
        edgeMovementY = -3;
    } else {
        edgeMovementY = 0;
    }
}

function moveCircle() {
    // Moves circle based on previous calculations
    if(mouseDistance < 100) {
        // fill(0, 0, 0);
        circleX += cos((angle + 180) * PI / 180) * (300 / (mouseDistance + 1)) + edgeMovementX;
        circleY += sin((angle + 180) * PI / 180) * (300 / (mouseDistance + 1)) + edgeMovementY;
    } else {
        circleX += edgeMovementX;
        circleY += edgeMovementY;
    }
}

function setColor() {
    // Sets color and changes rgb by variables
    fill(redColor, greenColor, blueColor);

    // If color is too high or low, the change reverses
    if (redColor < 62 || redColor > 299) {
        redChange = -redChange;
    }
    if (greenColor < 0 || greenColor > 234) {
        greenChange = -greenChange;
    }
    if (blueColor < 0 || blueColor > 281) {
        blueChange = -blueChange;
    }

    // Changes color
    redColor += redChange;
    greenColor += greenChange;
    blueColor += blueChange;
}

function drawCircles() {
    // Sets color and changes rgb by variables
    for (var i in snake) {
        fill(snake[i][2], snake[i][3], snake[i][4]);
        ellipse(snake[i][0], snake[i][1], snake[i][5], snake[i][5]);
        snake[i][5] -= 3;
    }

    // Draw circle
    ellipse(circleX, circleY, 60, 60);

    // Log current circle into array
    snakeCircle = [];
    snakeCircle.push(circleX);
    snakeCircle.push(circleY);
    snakeCircle.push(redColor)
    snakeCircle.push(greenColor);
    snakeCircle.push(blueColor);
    snakeCircle.push(60);
    snake.push(snakeCircle);

    // Delelte last part of snake
    if (snake.length == 50) {
        snake.shift();
    }
}

draw = function() {
    // Set background
    background(247, 242, 247);

    // Run functions
    setColor();
    noStroke();
    drawCircles();
    calculateMouseDistance();
    edgeCheck();
    moveCircle();
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
