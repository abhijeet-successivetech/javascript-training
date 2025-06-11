//Q2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const sortObject = (obj) => {
  return (obj.sort((a, b) => a.age - b.age));
};

const inp = process.argv.slice(2);
try {
  const obj = JSON.parse(inp);
  if (!(typeof obj == "object") || !Array.isArray(obj)) {
    console.log("Error");
  } else {
    console.log(sortObject(obj));
  }
} catch (e) {
  console.log("Error!! wrong format");
}
