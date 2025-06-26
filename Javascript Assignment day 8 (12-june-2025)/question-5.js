// 5. let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }

const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myNumber = myArray[4]; //changed the value of last index as it not defined
if (myNumber) {
  console.log('The number is: ' + myNumber);
} else {
  console.log('The number is undefined');
}

// There is no error in code