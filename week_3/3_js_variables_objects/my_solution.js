// I worked by myself on this challenge

// __________________________________________
// Write your code below.

// Test One
var secretNumber = 7;

// Test Two
var password = "just open the door";

// Test Three
var allowedIn = false;

// Test Four
var members = ["John", "James", "Joseph", "Mary"]


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I found this to be a really useful first step in Test Driven Development (TDD).
// Having never actually used node, it felt good to get in the terminal and work through
// a structured exercise. I think I might have even been a little too eager to jump in 
// because I had no idea what was going on when I started getting Reference Errors
// indicating that my variables were not defined. I went back to the instructions, calmed
// down, defined my variables, and tried the tests again. When the tests were performed 
// correctly and I received a friendly little "true" from my terminal, I had another one
// of those "this is really cool" moments. I know we've only just begun to barely scratch 
// the surface of TDD but I'm excited to work on the next round of tests!
// 
// 
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

