//Write a program to give a random output between 1 to 10
// (AC: 2 simultaneous answers could not be same)

//ANS
let prev = -1;

function generateRandom() {
  let currentNumber = Math.floor(Math.random() * 10 + 1);
  while (currentNumber == prev) {
    currentNumber = Math.floor(Math.random() * 10 + 1);
  }
  prev = currentNumber;
  console.log(currentNumber);
}

for (let i = 0; i < 10; ++i) {
  console.log("The random number is:");

  generateRandom();
}
