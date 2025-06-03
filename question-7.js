// All of the above questions from 3-6 needs to be done with arrow functions also

// (Using Arrow function) Write a function expression
//  that takes in another function as an argument

let firstFunction = () => {
  console.log("Inside the first");
};
let secondFunction = (firstFunction) => {
  firstFunction();
  console.log("Inside the second");
};
secondFunction(firstFunction);

// (Using Arrow function) Write a function expression that takes in a number
//  and returns its square.

let square = (number) => number ** 2;

console.log("The square of the number is", square(33));

// (Using Arrow function) Write a function expression that takes in two numbers
//  and returns their sum.

let sum = (number1, number2) => number1 + number2;

console.log("The sum of two number is", sum(33, 43));

// (Using Arrow function) Write a function expression that takes in a number
// and returns true if it's even and false if it's odd.

let isEven = (num) => (num % 2 == 0 ? true : false);

console.log("The number is even", isEven(45));
