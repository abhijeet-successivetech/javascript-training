//Q4. Reverse the array 

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;

  }
  return arr;
}

const inp = process.argv.slice(2);

const arr = JSON.parse(inp);

if (Array.isArray(arr)) {
  console.log(reverseArray(arr));
}
else {
  console.log("Error!!!");
}