// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Theo Skolnik
//  2. Joe Hendele


// 0. "YOU SIGNED... WHO?!"

var umaThurman = {
    name: "Uma Thurman",
    age: 40,
    quote: "I must kill bill",
};

var clintEastwood = {
  name: "Clint Eastwood",
  age: 83,
  quote: "Get off my lawn!",
};

// 1. "Here they Come!"

var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home!",
};

var kristenBell = {
    name:"Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?",
};

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance?",
};

// 2. "TIME IS MONEY!"
//YOUR CODE HERE!
var Client = function (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
};

console.log(jimCarrey.name, jimCarrey.age, jimCarrey.quote);
console.log(kristenBell.name, kristenBell.age, kristenBell.quote);

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";
console.log(shooterMcGavin);

// 3. "SHOW 'EM OFF!"

console.log(shooterMcGavin)

// 4. "But wait, there's more!"
// Pick any of the client objects you created, and assign it a property called showQuote
// that stores a function that will display that client's quote. Test your code!

Client.showQuote = function(Client) {
  console.log(Client.quote);
};

console.log(Client.showQuote(jimCarrey));

// 5.  ** BONUS **


// 6.  Your Reflection:
// Having done this GPS once before in a previous cohort, I thought I had gotten everything
// out of it that I could have. I was under the impression that my previous partner and I had
// uncovered everything and had all of the right answers... man, I was so wrong! I had a totally
// different experience this time around. I felt like Theo and I really pushed for not only the 
// solutions, but also the reasoning behind everything. It took us a while to test things in node 
// and I could sense that there was some frustration mounting, but we did a nice job of overcoming
// that and really pushing to understand the material. Overall, it was a demanding session 
// (over 1.5 hours!) but one in which I got a ton out of it. I would happily pair with Theo again!
