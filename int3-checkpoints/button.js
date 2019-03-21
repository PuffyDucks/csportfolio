// Creates variable for button
var movingButton = document.getElementById("movingButton");

// Detects mouse moving over button
movingButton.addEventListener("mousemove", changeButton);

// Sets original button position
var position = 220;

// Moves button down
function changeButton(){
  // movingButton.style.left = Math.random() * (window.innerWidth - 200) + "px"
  // movingButton.style.top = Math.random() * (window.innerHeight - 200) + "px"
  position += 50;
  movingButton.style.top = position + "px";
}
