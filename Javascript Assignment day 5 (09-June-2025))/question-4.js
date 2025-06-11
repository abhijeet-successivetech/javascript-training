//Q4.  Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

// Shallow copy
const obj = {
  name: "Abhi",
  age: 21,
};

const obj2 = obj;

obj2.name = "xyz";

console.log(`Affects after shallow copy ${obj.name} and ${obj2.name}`);

// Deep Copy

const deepObj = {
  name: "Raj",
  age: 22,
  address: {
    city: "Noida",
  },
  date: new Date(),
  fn: () => {},
};
console.log(deepObj);

const deepClone = (objName) => {
  return JSON.parse(JSON.stringify(objName));
};
console.log(deepClone(deepObj));
