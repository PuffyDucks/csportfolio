/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(window.innerWidth, window.innerHeight * 0.945);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var r = 294;
var g = 0;
var b = 0;
var rc = 0.4;
var dc = -0.8;
var db = 0.8;

var posX;
var posY;
var x1;
var y1;
var x2;
var y2;
var x3;
var y3;

noStroke();

background(247, 242, 247);

fill(0, 0, 0);
text("Drag your mouse!", window.innerWidth / 2 - 40, window.innerHeight * 0.945 / 2);

create = function(x) {
    posX = random(0, window.innerWidth);
    posY = random(0, window.innerHeight * 0.945);
    x1 = posX + random(-x, x) / 1.5;
    y1 = posY + random(-x, x) / 1.5;
    x2 = posX + random(-x, x) / 1.5;
    y2 = posY + random(-x, x) / 1.5;
    x3 = posX + random(-x, x) / 1.5;
    y3 = posY + random(-x, x) / 1.5;
    triangle(x1, y1, x2, y2, x3, y3);
}

    mouseDragged = function() {
        create(mouseX);
    }

draw = function() {
    fill(r, g, b);

    if (r < 62 || r > 299) {
        rc = -rc;
    }
    if (b < 0 || b > 234) {
        db = -db;
    }
    if (g < 0 || g > 281) {
        dc = -dc;
    }

    r += rc;
    b += db;
    g += dc;
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
