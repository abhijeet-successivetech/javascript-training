//4. Write a program to print all even number first and then all odd numbers

//ANS
const range = 20;

for (let i = 1; i <= range; ++i) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
for (let i = 1; i <= range; ++i) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
