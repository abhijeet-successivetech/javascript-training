/*
Write a program to display Diamond Pattern

        *
      *  *
    *  *  *
  *  *  *  *
 *  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
       *
*/

//ANS
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= i; k++) {
    pattern += "*";
    if (k == i) {
      break;
    }
    pattern += " ";
  }
  console.log(pattern);
}
for (let i = 4; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= i; k++) {
    pattern += "*";
    if (k == i) {
      break;
    }
    pattern += " ";
  }
  console.log(pattern);
}
