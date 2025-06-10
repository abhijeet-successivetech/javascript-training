
// Q11. Write a program to sort an array (bubble sort)

// Ans.
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const inp  = process.argv.slice(2);

const arr = JSON.parse(inp);

if(Array.isArray(arr) ){
    bubbleSort(arr);
    console.log(arr);
}
else{
    console.log("Error!!!");
}

