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
};
console.log(deepObj);

const deepClone = (objName) => {
  return JSON.parse(JSON.stringify(objName));
};
console.log(deepClone(deepObj));

// Deep copy using traversal

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const result = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}

const testCase = {
  a: 1,
  b: { c: { g: [1, 2] } },
  d: function test() {
    return true;
  },
};

const newTest = deepCopy(testCase);

newTest.a = 12;

console.log(newTest);

console.log(testCase);
