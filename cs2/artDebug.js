/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(window.innerWidth - 160, window.innerHeight * 0.945 / 2);background(247, 242, 247);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

// Variables for distance and angle calculations
var mouseDistanceX;
var mouseDistanceY;
var mouseDistance;
var slope;
var tempAngle;
var angle;
var direction;

var circleX = (window.innerWidth - 160) / 2;
var circleY = window.innerHeight * 0.945 / 4;

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

    direction = angle + 180;
    if (direction > 360) {
      direction -= 180;
    }
}


draw = function() {
    // Set background
    background(247, 242, 247);

    // Run functions
    calculateMouseDistance();

    fill(0, 0, 0);
    text("Distance: " + mouseDistance + "\n\nAngle: " + angle +"\n\nDirection: " + direction, (window.innerWidth - 750) / 2, window.innerHeight * 0.945 / 4);
    ellipse(circleX, circleY, 60, 60);
    line(circleX, circleY, mouseX, mouseY);
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas2"), sketch);
