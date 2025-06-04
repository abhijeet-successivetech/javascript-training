/* Write a program to display following output as shown in figure

1
2 3
4 5 6
7 8 9 10
*/

// ANS
let counter = 1;

for (let i = 1; i < 5; ++i) {
  let line = "";
  for (let j = 0; j < i; ++j) {
    line += counter + " ";
    counter++;
  }
  console.log(line);
}

/* 
1
2 2
3 3 3
4 4 4 4 */

//ANS
for (let i = 1; i < 5; i++) {
  let line = "";
  for (let j = 0; j < i; ++j) {
    line += i + " ";
  }
  console.log(line);
}

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
console.log();

//ANS
for (let i = 5; i > 1; --i) {
  let line = "";
  for (let j = 1; j <= i; ++j) {
    line += j + " ";
  }
  console.log(line);
}
for (let i = 1; i < 6; i++) {
  let line = "";
  for (let j = 1; j <= i; ++j) {
    line += j + " ";
  }
  console.log(line);
}
