//Q3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const removeID = (userList) => {
  userList.forEach((element) => delete element.id);
};

const inp = process.argv.slice(2);
const obj = JSON.parse(inp);
try {
  if (!(typeof obj == "object") || !Array.isArray(obj)) {
    console.log("Error");
  } else {
    removeID(obj);
    console.log(obj);
  }
} catch (e) {
  console.log("Error!! wrong format");
}
