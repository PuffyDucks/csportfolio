/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var bodyX = 200;
var bodyY = 600;
var bodyW = 115;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    noStroke();
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106);
    ellipse(bodyX, bodyY-70, bodyH, 47); 
    fill(0, 0, 0);
    ellipse(bodyX, bodyY-44, bodyW*1.5, 200);
    triangle(bodyX+-20, bodyY+70, bodyX+20, bodyY+70, bodyX+0, bodyY+50);
    stroke(255, 255, 255);
    strokeWeight(6);
    line(bodyX-40, bodyY-75, bodyX-30, bodyY-75);
    line(bodyX+40, bodyY-75, bodyX+30, bodyY-75);
    noStroke();
    fill(225, 255, 0);
    triangle(bodyX+20, bodyY+-50, bodyX+-20, bodyY+-50, bodyX+0, bodyY+-36);
    stroke(125, 118, 125);
    strokeWeight(2);
    line(bodyX+55, bodyY-40, bodyX+30, bodyY+49);
    line(bodyX-30, bodyY+49, bodyX-60, bodyY-40);
    stroke(0, 0, 0);
    line(bodyX, bodyY+70, bodyX, bodyY+166);
    bodyY--;
    fill(255, 255, 255);
    noStroke();
    ellipse(bodyX, bodyY+10, bodyW-45, 80);
    if(bodyY===-200){
        bodyY = 600;
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);