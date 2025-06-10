//Q7. Write a program to find index of duplicate elements in an array


const firstDuplicateIndex = (arr) => {
  const value = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (value[key] === undefined) {
      value[key] = i;

    }
    else {
      if (!duplicates.includes(value[key])) {
        duplicates.push(value[key]);
      }
    }
  }
  return duplicates;
}



const inp = process.argv.slice(2);

const arr = JSON.parse(inp);
if (Array.isArray(arr)) {
  console.log(firstDuplicateIndex(arr));
}
else {
  console.log("Error!!!");
}

