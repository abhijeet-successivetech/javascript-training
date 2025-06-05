//5. Write a program to print all even number
// first and then all odd numbers using only one iteration

//ANS

let even = "";
let odd = "";

const range = 20;

for (let i = 1; i <= range; ++i) {
  if (i % 2 == 0) {
    even += i + " ";
  } else {
    odd += i + " ";
  }
}
console.log(even + odd);
