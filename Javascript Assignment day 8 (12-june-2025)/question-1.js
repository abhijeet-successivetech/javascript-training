// Q1. Find Error in below questions and rectify them

//  let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

const myArray = [1,2,3,4];
for(let i=0; i< myArray.length; ++i){ // fixed the index limit
  console.log(myArray[i]);
}
