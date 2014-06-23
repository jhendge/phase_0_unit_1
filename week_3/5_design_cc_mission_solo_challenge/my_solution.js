// This is a solo challenge

// Your mission description:
// Growing up, I was a massive fan of video games (Ok, I still am a huge fan but this weird
// this called 'life' gets in the way). And my second favorite game - the distinction of 'favorite
// game' will always to go Mario 3 on NES or SNES - was Mega Man 2. I loved the entire Mega Man 
// series but the second installation has always held a special place in my heart. I remember that 
// I could pass through all of the levels with relative ease and destroy every boss... except for one,
// Heat Man. I detested that level and always marveled at how difficult it was (side note: I now own 
// Mega Man 2 on my iPhone and still save the Heat Man level for the end). It had shifting and 
// disappearing standing platforms that hovered above delightfully pixelated fire/lava and also included
// relentless enemies. Anyway, I wanted my level to somehow pay homage to Mega Man 2 and more specifically, 
// the Heat Man level. Thus my level will take place in Heat Man's lair and the goal will be to take 
// control of Mega Man and destroy Heat Man (by way of moving the Mega Man object over the Heat Man object,
// of course).
//  
// 
//---------------------------------------------------------------------------------

// Pseudocode
// Create the canvas
// Set canvas dimensions
// Add it to document so that it will appear on the page
// Let's add graphics - first, the background image
// Now let's add the Mega Man image
// And finally let's add the Heat Man image
// Now we need Mega Man and Heat Man to be game objects
// The player is going to need keyboard controls!
// When a player catches Heat Man, the game needs to reset
// Update game objects based on playr's keyboard input
// Make Heat Man disappear if Mega Man is touching him
// Make sure everything will be drawn on the screen
// Give player a counter indicating how many times Heat Man has been destroyed
// Loop the game
// Provide cross browser support
// Play the game!
//---------------------------------------------------------------------------------

// Initial Code
// Create the canvas
// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");

// Set canvas dimensions
// canvas.width = 512;
// canvas.height = 480;

// Add it to document so that it will appear on the page
// document.body.appendChild(canvas);

// Let's add graphics - first, the background image
// var bgReady = false; // bgReady is used to let us know when it's safe to draw the image, as trying to draw it before it's loaded will throw a DOM error
// var bgImage = new Image();
// bgImage.onload = function () {
// 	bgReady = true;
// };
// bgImage.src = "images/background.png";

// Now let's add the Mega Man image
// var megamanReady = false;
// var megamanImage = new Image();
// megamanImage.onload = function () {
// 	megamanReady = true;
// };
// megamanImage.src = "images/megaman.png";

// And finally let's add the Heat Man image
// var heatmanReady = false;
// var heatmanImage = new Image();
// heatmanImage.onload = function () {
// 	heatmanReady = true;
// };
// heatmanImage.src = "images/heatman.png";

// Now we need Mega Man and Heat Man to be game objects
// var megaman = {
// 	speed: 256 // movement in pixels per second
// };
// var heatman = {}; // Heat Man won't move so he just has coordinates
// var heatmanCaught = 0; // heatmanCaught will store the number of times the player has caught Heat Man

// The player is going to need keyboard controls!
// var keysDown = {};

// addEventListener("keydown", function (e) {
// 	keysDown[e.keyCode] = true;
// }, false);

// addEventListener("keyup", function (e) {
// 	delete keysDown[e.keyCode];
// }, false);

// When a player catches Heat Man, the game needs to reset
// var reset = function () {
// 	megaman.x = canvas.width / 2;
// 	megaman.y = canvas.height / 2;

// Throw Heat Man somewhere on the screen randomly
// 	heatman.x = 32 + (Math.random() * (canvas.width - 64));
// 	heatman.y = 32 + (Math.random() * (canvas.height - 64));
// };

// Update game objects based on playr's keyboard input
// var update = function (modifier) {
// 	if (38 in keysDown) { // Player holding up
// 		megaman.y -= megaman.speed * modifier;
// 	}
// 	if (40 in keysDown) { // Player holding down
// 		megaman.y += megaman.speed * modifier;
// 	}
// 	if (37 in keysDown) { // Player holding left
// 		megaman.x -= megaman.speed * modifier;
// 	}
// 	if (39 in keysDown) { // Player holding right
// 		megaman.x += megaman.speed * modifier;
// 	}

// Make Heat Man disappear if Mega Man is touching him
// if (
// 		megaman.x <= (heatman.x + 32)
// 		&& heatman.x <= (megaman.x + 32)
// 		&& megaman.y <= (heatman.y + 32)
// 		&& heatman.y <= (megaman.y + 32)
// 	) {
// 		++heatmanCaught;
// 		reset();
// 	}
// };

// Make sure everything will be drawn on the screen
// var render = function () {
// 	if (bgReady) {
// 		ctx.drawImage(bgImage, 0, 0);
// 	}

// 	if (megamanReady) {
// 		ctx.drawImage(megamanImage, megaman.x, megaman.y);
// 	}

// 	if (heatmanReady) {
// 		ctx.drawImage(heatmanImage, heatman.x, heatman.y);
// 	}

// Give player a counter indicating how many times Heat Man has been destroyed
// ctx.fillStyle = "rgb(250, 250, 250)";
// 	ctx.font = "24px Arial";
// 	ctx.textAlign = "left";
// 	ctx.textBaseline = "top";
// 	ctx.fillText("Heat Mans Caught: " + monstersCaught, 32, 32);
// };

// Loop the game
// var main = function () {
// 	var now = Date.now();
// 	var delta = now - then;

// 	update(delta / 1000);
// 	render();

// 	then = now;

// Request to do this again ASAP
// 	requestAnimationFrame(main);
// };

// Provide cross browser support
// var w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Play the game!
// var then = Date.now();
// reset();
// main();

//---------------------------------------------------------------------------------

// Refactored Code
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 512;
canvas.height = 480;

// Add it to document so that it will appear on the page
document.body.appendChild(canvas);

// Let's add graphics - first, the background image
var bgReady = false; // bgReady is used to let us know when it's safe to draw the image, as trying to draw it before it's loaded will throw a DOM error
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Now let's add the Mega Man image
var megamanReady = false;
var megamanImage = new Image();
megamanImage.onload = function () {
	megamanReady = true;
};
megamanImage.src = "images/megaman.png";

// And finally let's add the Heat Man image
var heatmanReady = false;
var heatmanImage = new Image();
heatmanImage.onload = function () {
	heatmanReady = true;
};
heatmanImage.src = "images/heatman.png";

// Now we need Mega Man and Heat Man to be game objects
var megaman = {
	speed: 256 // movement in pixels per second
};
var heatman = {}; // Heat Man won't move so he just has coordinates
var heatmanCaught = 0; // heatmanCaught will store the number of times the player has caught Heat Man

// The player is going to need keyboard controls!
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// When a player catches Heat Man, the game needs to reset
var reset = function () {
	megaman.x = canvas.width / 2;
	megaman.y = canvas.height / 2;

// Throw Heat Man somewhere on the screen randomly
	heatman.x = 32 + (Math.random() * (canvas.width - 64));
	heatman.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects based on playr's keyboard input
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		megaman.y -= megaman.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		megaman.y += megaman.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		megaman.x -= megaman.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		megaman.x += megaman.speed * modifier;
	}

// Make Heat Man disappear if Mega Man is touching him
if (
		megaman.x <= (heatman.x + 32)
		&& heatman.x <= (megaman.x + 32)
		&& megaman.y <= (heatman.y + 32)
		&& heatman.y <= (megaman.y + 32)
	) {
		++heatmanCaught;
		reset();
	}
};

// Make sure everything will be drawn on the screen
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (megamanReady) {
		ctx.drawImage(megamanImage, megaman.x, megaman.y);
	}

	if (heatmanReady) {
		ctx.drawImage(heatmanImage, heatman.x, heatman.y);
	}

// Give player a counter indicating how many times Heat Man has been destroyed
ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Arial";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Heat Mans Caught: " + monstersCaught, 32, 32);
};

// Loop the game
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Provide cross browser support
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Play the game!
var then = Date.now();
reset();
main();

//---------------------------------------------------------------------------------

// Reflection
// This exercise was a beast! After initially reading the directions, I shut my computer and
// marinated in the reality of what I was up against. I barely know a little JavaScript, how 
// am I supposed to actually make any sort of game? How will I do this? Where do I start? My 
// first step was to come up with some sort of vague idea of what I wanted to create. Per my
// above "mission description," I knew I wanted to have Mega Man capture/destroy/eliminate 
// Heat Man in some fashion. I didn't exactly have ideas of grandeaur... I knew it needed to 
// be fairly simple and straightforward. After I determined my mission idea, I started re-
// searching simple JavaScript games and ways in which I could bring my idea to life. I learned 
// about how to create a canvas, how to put an image on that canvas, and how to actually put 
// usable objects on the screen. I had the basic building blocks figured out when I found an
// amazing tutorial that provided much more information and "bulk" than I ever would've imagined
// (http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/).
//
// This tutorial more than helped push me over the line for this exercise. It helped me to solidify
// my understanding of creating a canvas, adding graphics, and creating objects, and provided an
// incredible introduction to installing keyboard controls, looping the game, providing cross 
// browser support, etc. I want to be very clear when I say that in no way is all of this code 
// my own. I included much of the aforementioned not to pawn it off as my own, but to add depth
// to my level and to learn from it. Playing around with the code helped me to figure out how to 
// manipulate certain elements and I even found a way to have Mega Man "shoot" Heat Man, which I
// thought was pretty awesome. 
// 
// Although this exercise was a bit daunting, I learned way more than I thought I was going to 
// learn. I only wish that I had about another week to continue to mess around with this game and 
// see how I can further develop it! I get the feeling like this sort of thing is a course in and 
// of itself.