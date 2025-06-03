// Write a function expression that takes in a number and
//  returns true if it's even and false if it's odd.

//ANS
let isEven = function (number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log("The number is even:", isEven(21));
