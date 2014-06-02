// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Joe Hendele
//  2. Joey Chamberlin


// 0. "YOU SIGNED... WHO?!"
var clientList = [];


// 1. "Here they Come!"
var adamSandler = {
  name: 'Adam Sandler',
  age: 47,
  quote: 'That\'s your home! Are you too good for your home?!'
  };
  
var kristenBell = {
  name: 'Kristen Bell',
  age: 33,
  quote: 'Do you wanna build a snowman?'
  };
  
var jimCarrey = {
  name: 'Jim Carrey',
  age: 52,
  quote: '...So you\'re telling me there\'s a chance? YEAH!'
  };
  
var clintEastwood = {
  name: 'Clint Eastwood',
  age: 83,
  quote: 'Get off my lawn!'
  };
  
var morganFreeman = {
  name: 'Morgan Freeman',
  age: 76,
  quote: 'Andy Dufresne - who crawled through a river of shit and came out clean on the other side.'
  };



// 2. "TIME IS MONEY!"

var Client = function (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

var clientList = [adamSandler, kristenBell, jimCarrey, clintEastwood, morganFreeman];

// 4. "But wait, there's more!"

var showQuote = function(clientName) {
  return clientName.quote;
};

showQuote(adamSandler);

// 5.  ** BONUS **

var talentAgency = {
  name: 'Joe and Joey Represent You!',
  address: '404 Code Lane',
  email: 'agency@gmail.com'
  };

var clientListAd = [adamSandler, kristenBell, jimCarrey, clintEastwood, morganFreeman, talentAgency];

//  6.  Your Reflection:
//  
//  This GPS was a really great experience because I felt like Joey and I had to do a good amount of digging
//  and learning on the fly. We both clearly understood basic JavaScript concepts and syntax, but needed to do
//  some problem solving during the actual session. I was a bit nervous at first and wasn't sure if we were going
//  to be able to figure everything out but it really helped to talk things through and share ideas. Really, it felt
//  like a little bit of magic. To not think you can do something and then realize that you have help and shared 
//  determination to get through it, it's awesome.
//  
//  I feel like I'm learning more now at this stage in my life than I ever have before. I'm looking forward to the next
//  challenge.