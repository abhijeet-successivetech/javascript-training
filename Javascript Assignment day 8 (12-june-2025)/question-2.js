// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }


const myObject = { name: 'John', age: 30 };
for (let property in myObject) {
   console.log(property + ': ' + myObject[property]); // Fixed the dot operator with bracket
}

