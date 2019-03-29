// Creates variable for snowflake class
var snowflakes = document.getElementsByClassName("snowflake");

// Detects mouse moving over or clicking any snowflake
for(var i = 0; i < snowflakes.length; i++) {
  snowflakes[i].style.transform = "rotate(0deg)";
  snowflakes[i].addEventListener("mousedown", enlargeSnowflake);
  snowflakes[i].addEventListener("mousemove", rotateSnowflake);
}

// Enlarges snowflakes when clicked on
function enlargeSnowflake(evt) {
  evt.target.style.fontSize = "60px";
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
