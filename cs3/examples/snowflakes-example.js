// Creates variables for snowflake classes
var snowflakes1 = document.getElementsByClassName("snowflake1");
var snowflakes2 = document.getElementsByClassName("snowflake2");

// Detects mouse moving over or clicking snowflakes
for(var i = 0; i < snowflakes1.length; i++) {
  snowflakes1[i].addEventListener("mousedown", enlargeSnowflake);
}
for(var j = 0; j < snowflakes2.length; j++) {
  snowflakes2[j].style.transform = "rotate(0deg)";
  snowflakes2[j].addEventListener("mousemove", rotateSnowflake);
}

// Enlarges snowflakes when clicked on
function enlargeSnowflake(evt) {
  evt.target.style.fontSize = "60px";
  evt.target.style.top = "25%";
}

// Adds 3 to rotation of snowflake when mouse is moved over it
function rotateSnowflake(evt) {
  var degrees = evt.target.style.transform;
  degrees = degrees.replace("rotate(", "");
  degrees = degrees.replace("deg)", "");
  degrees = parseInt(degrees, 10);
  degrees += 3;
  console.log(degrees);
  evt.target.style.transform = "rotate(" + degrees + "deg)";
}
