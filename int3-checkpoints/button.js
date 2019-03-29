// Creates variable for button
var movingButton = document.getElementById("movingButton");

// Detects mouse moving over button
movingButton.addEventListener("mousemove", changeButton);
movingButton.addEventListener("mousedown", moveButton);

// Sets original button position
var position = 220;

// Moves button down
function changeButton(){
  position += 50;
  movingButton.style.top = position + "px";
}

function moveButton(){
  movingButton.style.left = Math.random() * (window.innerWidth - 200) + "px"
}
