/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(window.innerWidth, window.innerHeight * 0.945);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var pMouseX = 299;
var pMouseY = 299;

noStroke();
var draw = function() {
    background(247, 242, 247);
    if (mouseX < window.innerWidth / 2) {
        fill(255, 0, 0);
    } else {
        fill(255, 255, 0);
    }
    if (sqrt(pow(pMouseX - mouseX, 2) + pow(pMouseY - mouseY, 2)) > 0) {
        fill(random(0, 400)*cos(frameCount), random(0, 400)/2, 255);
    }
    if (mouseY > window.innerHeight * 0.945 / 2) {
        ellipse(200, 200, 20, 20);
    } else {
        rect(200, 200, 20, 20);
    }

    pMouseX = mouseX;
    pMouseY = mouseY;
}

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
