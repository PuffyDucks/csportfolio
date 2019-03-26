// Creates variable for button
var snowflake1 = document.getElementById("snowflake1");
var snowflake2 = document.getElementById("snowflake2");
var snowflake3 = document.getElementById("snowflake3");
var snowflake4 = document.getElementById("snowflake4");
var snowflake5 = document.getElementById("snowflake5");
var snowflake6 = document.getElementById("snowflake6");
var snowflake7 = document.getElementById("snowflake7");
var snowflake8 = document.getElementById("snowflake8");
var snowflake9 = document.getElementById("snowflake9");
var snowflake10 = document.getElementById("snowflake10");
var snowflake11 = document.getElementById("snowflake11");
var snowflake12 = document.getElementById("snowflake12");

// Detects mouse moving over button
// movingButton.addEventListener("snowflake", changeButton);
snowflake1.addEventListener("mousemove", moveSnowflake1);
snowflake1.addEventListener("mousedown", enlargeSnowflake1);
snowflake2.addEventListener("mousemove", moveSnowflake2);
snowflake2.addEventListener("mousedown", enlargeSnowflake2);
snowflake3.addEventListener("mousemove", moveSnowflake3);
snowflake3.addEventListener("mousedown", enlargeSnowflake3);
snowflake4.addEventListener("mousemove", moveSnowflake4);
snowflake4.addEventListener("mousedown", enlargeSnowflake4);
snowflake5.addEventListener("mousemove", moveSnowflake5);
snowflake5.addEventListener("mousedown", enlargeSnowflake5);
snowflake6.addEventListener("mousemove", moveSnowflake6);
snowflake6.addEventListener("mousedown", enlargeSnowflake6);
snowflake7.addEventListener("mousemove", moveSnowflake7);
snowflake7.addEventListener("mousedown", enlargeSnowflake7);
snowflake8.addEventListener("mousemove", moveSnowflake8);
snowflake8.addEventListener("mousedown", enlargeSnowflake8);
snowflake9.addEventListener("mousemove", moveSnowflake9);
snowflake9.addEventListener("mousedown", enlargeSnowflake9);
snowflake10.addEventListener("mousemove", moveSnowflake10);
snowflake10.addEventListener("mousedown", enlargeSnowflake10);
snowflake11.addEventListener("mousemove", moveSnowflake11);
snowflake11.addEventListener("mousedown", enlargeSnowflake11);
snowflake12.addEventListener("mousemove", moveSnowflake12);
snowflake12.addEventListener("mousedown", enlargeSnowflake12);

// Sets original button position
var degrees1 = 0;
var degrees2 = 0;
var degrees3 = 0;
var degrees4 = 0;
var degrees5 = 0;
var degrees6 = 0;
var degrees7 = 0;
var degrees8 = 0;
var degrees9 = 0;
var degrees10 = 0;
var degrees11 = 0;
var degrees12 = 0;

// Moves button down
function moveSnowflake1(){
  degrees1 += 3;
  snowflake1.style.transform = "rotate(" + degrees1 + "deg)";
}
function enlargeSnowflake1(){
  snowflake1.style.fontSize = "60px"
}
function moveSnowflake2(){
  degrees2 += 3;
  snowflake2.style.transform = "rotate(" + degrees2 + "deg)";
}
function enlargeSnowflake2(){
  snowflake2.style.fontSize = "60px"
}
function moveSnowflake3(){
  degrees3 += 3;
  snowflake3.style.transform = "rotate(" + degrees3 + "deg)";
}
function enlargeSnowflake3(){
  snowflake3.style.fontSize = "60px"
}
function moveSnowflake4(){
  degrees4 += 3;
  snowflake4.style.transform = "rotate(" + degrees4 + "deg)";
}
function enlargeSnowflake4(){
  snowflake4.style.fontSize = "60px"
}
function moveSnowflake5(){
  degrees5 += 3;
  snowflake5.style.transform = "rotate(" + degrees5 + "deg)";
}
function enlargeSnowflake5(){
  snowflake5.style.fontSize = "60px"
}
function moveSnowflake6(){
  degrees6 += 3;
  snowflake6.style.transform = "rotate(" + degrees6 + "deg)";
}
function enlargeSnowflake6(){
  snowflake6.style.fontSize = "60px"
}
function moveSnowflake7(){
  degrees7 += 3;
  snowflake7.style.transform = "rotate(" + degrees7 + "deg)";
}
function enlargeSnowflake7(){
  snowflake7.style.fontSize = "60px"
}
function moveSnowflake8(){
  degrees8 += 3;
  snowflake8.style.transform = "rotate(" + degrees8 + "deg)";
}
function enlargeSnowflake8(){
  snowflake8.style.fontSize = "60px"
}
function moveSnowflake9(){
  degrees9 += 3;
  snowflake9.style.transform = "rotate(" + degrees9 + "deg)";
}
function enlargeSnowflake9(){
  snowflake9.style.fontSize = "60px"
}
function moveSnowflake10(){
  degrees10 += 3;
  snowflake10.style.transform = "rotate(" + degrees10 + "deg)";
}
function enlargeSnowflake10(){
  snowflake10.style.fontSize = "60px"
}
function moveSnowflake11(){
  degrees11 += 3;
  snowflake11.style.transform = "rotate(" + degrees11 + "deg)";
}
function enlargeSnowflake11(){
  snowflake11.style.fontSize = "60px"
}
function moveSnowflake12(){
  degrees12 += 3;
  snowflake12.style.transform = "rotate(" + degrees12 + "deg)";
}
function enlargeSnowflake12(){
  snowflake12.style.fontSize = "60px"
}
