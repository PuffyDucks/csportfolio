/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 250;
var xPos2 = xPos - 30;
noStroke();
var draw = function() {
    if (mouseY > 250) {
        fill(200, 0, 0);
    } else {
        fill(255, 0, 0);
    }
    background(255, 255, 255)
    quad(140, 400, 260, 400, xPos, 250, xPos2, 250);
    triangle(10, 400, 130, 400, (xPos+xPos2)/2-130, 250);
    beginShape();
    curveVertex(10, 400);
    curveVertex(300, 400);
    curveVertex(xPos+50, 250);
    curveVertex(xPos2-200, 250);
    endShape();
    xPos=mouseX + 35;
    xPos2=mouseX - 35;
    if(xPos > 300) {
        xPos = 300;
        xPos2 = 230;
    }
    if(xPos2 < 120) {
        xPos = 190;
        xPos2 = 120;
    }
}

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
