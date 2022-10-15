/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(window.innerWidth, window.innerHeight * 0.945);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var dropsize = 100;

noStroke();
var drop = function(x,y,t,c){
    this.x=x;
    this.y=y;
    this.t=t;
    this.c=c;
    this.draw = function() {
        pushMatrix();
        fill(this.c);
        translate(0,this.t);
        ellipse(this.x,this.y,dropsize,dropsize);
        popMatrix();
    };
};
var dropList = [];
var speed = 0;
var xpos = -100;
var draw = function() {
    var stopNumber = ((window.innerWidth + 200) / 60) * ((window.innerHeight * 0.945 + 200) / 30);

    dropsize = abs(50*cos(frameCount/100)) + 130;
    xpos += 60;
    pushMatrix();
    background(247, 242, 247);
    speed+= 2;
    if (xpos > window.innerWidth + 100) {
        xpos = -100
    }
    translate(0,-speed);
    for(var i in dropList){
        dropList[i].draw();
    }

    if (dropList.length > stopNumber) {
      dropList.shift();
    }
    popMatrix();
    dropList.push(new drop(xpos, window.innerHeight * 0.945 + 100, speed, color(random(0, 400)*cos(frameCount), random(0, 400)/2, 255)));
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
