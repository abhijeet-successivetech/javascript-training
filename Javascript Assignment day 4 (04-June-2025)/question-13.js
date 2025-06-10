
// Q13. Write a program to return inverse of an array.

// Ans. 
const inverseArray = (arr) => {
  const inv = [];
  for (let i = 0; i < arr.length; i++) {
    inv[arr[i]] = i;
  }
  return inv;
}

const inp = process.argv.slice(2);

const arr = JSON.parse(inp);

if (Array.isArray(arr)) {
  console.log(inverseArray(arr));
}
else {
  console.log("Error!!!");
}