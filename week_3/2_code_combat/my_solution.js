// I worked on this challenge [by myself, with:
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Mission One: Rescue Mission
 
 this.moveUp(); // move up
 this.moveRight(); // move right
 this.moveRight(); // move right
 this.moveDown(); // move down
 this.attackNearbyEnemy(); // attack

 // Mission Two: Grab the Mushroom
 
 this.moveUp(); // move up
 this.moveRight(); // move right
 this.moveLeft(); // move left
 this.moveUp(); // move up
 
// Mission Three: Drink Me

this.moveRight(); // move right
this.attackNearbyEnemy(); // kill munchkin #1
this.moveRight(); // move right
this.moveDown(); // move down
this.moveUp(); // move up
this.moveRight(); // move right
this.attackNearbyEnemy(); // kill munchkin #2

// Mission Four: Taunt the Guards

this.moveRight(); // move right 
this.say("Hey There!"); // distract guard
this.moveLeft(); // move left
this.moveLeft(); // move left
this.say("Attack!"); // tell Phoebe to attack
this.moveRight(); // move right
this.say("Follow me."); // tell Phoebe to follow
this.moveRight(); // move right
this.moveRight(); // move right
this.moveUp(); // move up
this.moveRight(); // move right
this.say("Hey there!"); // taunt guards
this.moveDown(); // move down
this.moveRight(); // move right
this.moveUp(); // move up
this.moveRight(); // move right

// Mission Five: It's a Trap!

this.moveDown(); // move down
this.moveDown(); // move down
this.say("Hey There!"); // say hey there
this.moveUp(); // move up
this.moveUp(); // move up
this.say("Attack!"); // kill ogre!

// Mission Six: Taunt

this.say("Hey ogre, you look like a dump truck!"); // insult the orgre ("Shrek"
this.say("Your name is Shrek, right?"); // insult Shrek again
this.say("Do you feel lucky, ogre? Do you??"); // insult Shrek one more time!

// Mission Seven: Cowardly Stunt

this.moveXY(57,25); // move to call out ogres
this.say("Come on over, ogres!"); // call out ogres
this.moveXY(70,10); // don't get caught in assault on ogres!

// Mission Eight: Commanding Followers

this.say("follow me!"); // get soldiers to follow me
this.moveXY(62,42); // lead soliders to attacking position 
this.say("let's attack!"); // tell soldiers to attack

// Mission Nine: Mobile Artillery

this.moveXY(25,70); // hide behind rocks
this.attackXY(46,63); // attack ogres
this.attackXY(43,72); // attack some more
this.moveXY(25,59); // mobilize
this.moveXY(50,57); // move behind more rocks
this.attackXY(67,53); // attack ogres
this.attack(62,56); // attack some more

// Release 3

// What is "this" referring to? 
// "This" refers to the current object, the object in use
// What does the () do in JS?
// The () indicates arguments for a method. When we were using the .say method in Code Combat,
// it included the argument, "let's attack." It is also possible for there to be an empty () 
// as methods do not always explicitly need to include an argument.
// What is the point of the semicolons?
// The semicolons in JS is used to seperate statements. Semicolons are not not mandatory to 
// include after every line, but they must be used if you have two or more statements on the same line. 

// Reflection:
// Write your reflection here.

// I love playing games so I thought Code Combat would be a nice way to learn a little bit of JS while also having fun. 
// As it turned out, that wasn't really the case. The game seemed fun, interesting, and even a little bit funny but when I completed
//  the final mission, I felt like I hadn't really learned a whole lot. It might turn out that as I'm going through the next couple of 
//  exercises, I'll find I learned more than initially anticipated. I couldn't help but wonder if the time would've been better spent 
//  going through some of Codecademy's JS track and getting my feet wet that way. My sense is that I will be doing that sometime this week so
//   that I can get an even better base understanding of JS. 

















