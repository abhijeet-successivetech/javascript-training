//Q6. Write a program to find sum of an array

const sumArray = (array1) => {
  let sum = 0;
  for (const element of array1) {
    sum += element;
  }
  return sum;
}



const inpStr = process.argv.slice(2);
const arr = JSON.parse(inpStr);
if (Array.isArray(arr)) {
  console.log(sumArray(arr));
}
else {
  console.log("Error!!!");
}


