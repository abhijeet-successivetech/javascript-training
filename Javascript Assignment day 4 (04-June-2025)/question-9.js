//Q9.  Write a program to find the last duplicate index in an array

// Ans.

const lastDuplicateIndex = (arr) => {
  let visited = [];
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (visited.indexOf(arr[i])!==-1) {
      lastIndex = i;
    } else {
      visited.push(arr[i]);
    }
  }
  return lastIndex;
}

const inp  = process.argv.slice(2);

const arr = JSON.parse(inp);

if(Array.isArray(arr) ){
    console.log(lastDuplicateIndex(arr));
}
else{
    console.log("Error!!!");
}