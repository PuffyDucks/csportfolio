/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

/**Things you can do:
*change the dropsize to 3 or 100(line 10)
*change the background(line 29)
*make drawings
*change the change of the var speed(line 30)
*change the 300 in line 37 to mouseY
*make a spin-off of cool things!**/
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
    dropsize = abs(50*cos(frameCount/100)) + 70;
    xpos += random(20, 60);
    pushMatrix();
    background(68, 255, 0);
    speed+= 2;
    if (xpos > 500) {
        xpos = -100
    }
    translate(0,-speed);
    for(var i in dropList){
        dropList[i].draw();
    }
    popMatrix();
    dropList.push(new drop(xpos, 500 ,speed,color(random(0, 400)*cos(frameCount), random(0, 400)/2, 255)));
};
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
