/** Map opening and folding **/

// Creates variables for inputs to read values
var map = document.getElementById("map");
var folded = document.getElementById("folded");
var icon = document.getElementById("icon");
var close = document.getElementById("Close");

// Checks if mouse clicks on the button
close.addEventListener("click", changeToIcon);
icon.addEventListener("click", changeToMap);

// Changes icon when x or map is pressed
function changeToIcon(){
  folded.style.display = "inline";
  map.style.display = "none";
}

function changeToMap(){
  folded.style.display = "none";
  map.style.display = "inline";
}

/** Areas **/

// Creates variables for areas to click on
var skihill = document.getElementById("Ski Hill");
var skivillage = document.getElementById("Ski Village");
var dojo = document.getElementById("Dojo");
var iceberg = document.getElementById("Iceberg");
var mine = document.getElementById("Mine");
var beach = document.getElementById("Beach");
var dock = document.getElementById("Dock");
var town = document.getElementById("Town");
var plaza = document.getElementById("Plaza");
var snowfort = document.getElementById("Snow Fort");
var cove = document.getElementById("Cove");
var stadium = document.getElementById("Stadium");
var forest = document.getElementById("Forest");
var igloo = document.getElementById("Igloo");

// Creates variables for text
var infoTitle = document.getElementById("infoTitle");
var infoDesc = document.getElementById("infoDesc");

// Checks if mouse clicks on area
skihill.addEventListener("click", updateSkiHill);
skivillage.addEventListener("click", updateSkiVillage);
dojo.addEventListener("click", updateDojo);
iceberg.addEventListener("click", updateIceberg);
mine.addEventListener("click", updateMine);
beach.addEventListener("click", updateBeach);
dock.addEventListener("click", updateDock);
town.addEventListener("click", updateTown);
plaza.addEventListener("click", updatePlaza);
snowfort.addEventListener("click", updateSnowFort);
cove.addEventListener("click", updateCove);
stadium.addEventListener("click", updateStadium);
forest.addEventListener("click", updateForest);
igloo.addEventListener("click", updateIgloo);

// Array of all area names and descriptions
var areaText = [["Ski Hill", "Bring your friends and come up the Ski Lift to the Ski Hill, where you can compete with others in Sled Racing. Enjoy playing together on different tracks of varying difficulty!"], ["Ski Village", "Come into the Ski Lodge through the Ski Village to warm up by the fireplace, and play a game of Find Four! Or, grab your fishing rod and catch some fish in Ice Fishing! Maybe check out the EPF, which is just the Everyday Phoning Facility... nothing special."], ["Dojo", "Master the elements and test your Card-Jitsu skills at the Dojo! Practice with other penguins and train yourself to become a black belt, and fight Sensei himself. Also take a shot at Card-Jitsu Water and Fire, or work together in Card Jitsu Snow!"], ["Iceberg", "Come to the iceberg and collect pearls underwater in Aqua Grabber! Don't forget to bring your construction hat and jackhammer, there's been rumors about flipping the iceberg..."], ["Mine", "Come inside and mine for some gold to spend, or do tricks on an exciting minecart ride in Cart Surfer! You can also be a hero in Puffle Rescue, to help out the puffles that got lost in tunnels."], ["The Beach", "Relax on the snow outside at the beach, or come into the lighthouse and play some music on the stage! Walk up to the top of the lighthouse and you'll find the Beacon, a telescope, and a launch pad to play Jet Pack Adventure!"], ["The Dock", "The dock is an open space to hang out in. Hop on a tube and take a ride behind a speedboat in Hydro-Hopper!"], ["Town", "Grab a cup of coffee at the coffee shop, or help out in Bean Counters. Upstairs is the Book Room, where you can read or play mancala. To the right is the Night Club, where you can throw your best dance moves in Dance Contest or make some music at DJ3K. Go upstairs to find and play some arcade games and try to get a new high score. Last but not least is the gift shop, filled with clothing to buy in the Penguin Style catalog."], ["The Plaza", "At the plaza you can come to the pet shop to adopt your very own pet puffle, help collect them in Puffle Roundup, or play with them in Puffle Launch or Pufflescape! Next to the pet shop is the stage, where you can get your costumes on and arrange your own play with other penguins. Have a nice slide of pizza, or even make some in Pizzatron 3000, at the Pizza Parlor!"], ["Snow Fort", "Snowball fight! Have a friendly battle between penguins at the center of the island! While at peace, throw snowballs at the target on the Clock Tower to power it."], ["Cove", "Go to the cove and have a nice swim, or grab a board and go surfing in Catchin' Waves! Or maybe take a break and gather around the campfire, grab a snack at the Surf Shack, and get a look of the ocean through the telescope!"], ["Stadium", "Goooooal! Play soccer and score goals in the Stadium, or sit back and watch while eating a fishdog. During the winter and spring, this place becomes an ice rink where you can play ice hockey instead."], ["Forest", "Enjoy nature in the Forest, filled with rocks and trees. Go west for the Plaza, northeast for the mine shack, and southeast for the cove. Could there be any other paths?"], ["Igloo", "Decorate your very own igloo with furniture, floors, and tables! This is also where you can keep and care for your puffles. Check out other penguins' igloos too, and even throw a party!"]];

// Text change for each area
function updateSkiHill(){
  updateInfo(0);
}
function updateSkiVillage(){
  updateInfo(1);
}
function updateDojo(){
  updateInfo(2);
}
function updateIceberg(){
  updateInfo(3);
}
function updateMine(){
  updateInfo(4);
}
function updateBeach(){
  updateInfo(5);
}
function updateDock(){
  updateInfo(6);
}
function updateTown(){
  updateInfo(7);
}
function updatePlaza(){
  updateInfo(8);
}
function updateSnowFort(){
  updateInfo(9);
}
function updateCove(){
  updateInfo(10);
}
function updateStadium(){
  updateInfo(11);
}
function updateForest(){
  updateInfo(12);
}
function updateIgloo(){
  updateInfo(13);
}

// Changes text
function updateInfo(area) {
  infoTitle.innerHTML = areaText[area][0];
  infoDesc.innerHTML = areaText[area][1];
}
