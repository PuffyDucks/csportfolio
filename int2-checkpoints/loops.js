/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var N = 8;
var radius = 300;
var angle = 360 / N;
var angle2 = -100;
// var angle2 = ;

var x1;
var y1;
var x2;
var y2;

var x;
var y;
var lastX = 200;
var lastY = 200;
        
var circleSize = 600;

var num = 8;
var radius2 = 0;
var angleChange = random(0, 359);
console.log(angleChange);
var r = 294;
var g = 0;
var b = 0;
var rc = 132;
var dc = -20;
var db = 33;

var stage = 1;
var circleStage = 1;

draw = function() {
    if (stage == 1) {
        if (angle2 >= 0) {
            for(var i = 0; i < N; i++) {
                fill(0, 0, 0);
                x1 = 200 + radius * cos(angle * i * (Math.PI/180));
                y1 = 200 + radius * sin(angle * i * (Math.PI/180));
                x2 = 200 + radius * cos(angle * i * (Math.PI/180) + angle2 * (Math.PI/360));
                y2 = 200 + radius * sin(angle * i * (Math.PI/180) + angle2 * (Math.PI/360));
                triangle(200, 200, x1, y1, x2, y2);
            }
        }
        angle2 += 1.6;
        if (angle2 > angle*3) {
            stage = 2;
        }
    } else if (stage == 2) {
        background(255, 255, 255);
        ellipse(200, 200, circleSize, circleSize);
        if (circleStage == 1) {
            circleSize -= 15;
            if (circleSize < 180) {
                circleStage = 2;
            }
        } else if (circleStage == 2) {
            circleSize += 2;
            if (circleSize > 190) {
                circleStage = 3;
            }
        } else {
            circleSize -= 15;
            if (circleSize < -300) {
                stage = 3;
            }
        }
        
    } else if (stage == 3) {
        stroke(r, g, b);
    
        for (var i = 0; i < num; i += 1) {
            x = 200 + radius2 * cos(angleChange * i);
            y = 200 + radius2 * sin(angleChange * i);
            
            line(lastX, lastY, x, y);
            
            lastX = x;
            lastY = y;
        }
        
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
        radius2 += 2;
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);