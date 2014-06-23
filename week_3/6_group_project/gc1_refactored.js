// My role in the group is: refactoring

// Here is my part of the challenge:

// Test One
var sum = function(x) {
  var sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}
	return sum;
}

// Test Two
var mean = function(y) {
	return sum(y) / y.length;
}

// Test Three

var median = function(z) {
	var median = 0;
	numsLen = z.length;
	z.sort();
	if (numsLen % 2 === 0) {
		median = (z[numsLen / 2 - 1] + z[numsLen / 2]) / 2;
	} else {
		median = z[(numsLen - 1) / 2];
	}
	return median;
}

// User Story template: As a <user>, I want <some goal or action> so that <I can do this>.

// Test One: 
// As a user I want to be able to calculate the sum of a group of numbers.
// Explanation: The sum is the result of a group of numbers being added together
// Acceptance Criteria A: If no numbers are passed, sum should equal 0
// Acceptance Criteria B: Sum will be calculated regardless of how many numbers are calculated
// Assumption: User will only be able to pass numbers and no other characters, strings, etc.


// Test Two: 
// As a user I want to be able to find the mean of a group of numbers
// Explanation: The mean is the average of a group of numbers
// Acceptance Criteria A: If no numbers are passed, the mean should equal 0
// Acceptance Criteria B: Mean will provide the average regardless of how many numbers are calculated
// Assumption: User will only be able to pass numbers and no other characters, strings, etc.


// Test Three: 
// As a user I want to be able to find the median of a group of numbers
// Explanation: The median is the middle number of a group when the numbers are listed in ascending order
// Acceptance Criteria A: If no numbers are passed, the median should equal 0
// Acceptance Criteria B: If a group of numbers has no middle number (that is, the total number of number 
// in the group is evenly divisible) then the median should display both middle numbers
// Acceptance Criteria C: The median will identify the middle number in a group regardless of how many numbers
// are included
// Assumption: User will only be able to pass numbers and no other characters, strings, etc.