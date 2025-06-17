// Write a function expression that takes in another function as an argument

//ANS

function firstFunction() {
  console.log("Inside the first");
}
function secondFunction(firstFunction) {
  console.log("Inside the second");
  firstFunction(); // First function inside the second function
}

secondFunction(firstFunction); // Invoking the second function
