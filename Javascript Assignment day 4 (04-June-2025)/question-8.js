// Q8. Write a program to remove duplicate elements from an array

// Ans.
const removeDuplicates = (arr) => {
  let count = {};
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (const element in count) {
    if (isNaN(element)) {
      newArray.push(element);
    } else {
      newArray.push(parseFloat(element));
    }
  }
  return newArray;
}

const inp  = process.argv.slice(2);

const arr = JSON.parse(inp);

if(Array.isArray(arr) ){
    console.log(removeDuplicates(arr));
}
else{
    console.log("Error!!!");
}
