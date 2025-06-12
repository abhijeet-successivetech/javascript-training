//Q1. Write a program to iterate over object.

const traverseObject = (obj) => {
  for (const key in obj) {
    console.log(`name ${key}  no. ${obj[key]} `);
  }
};

// Nested approach
function traverseNested(obj) {
  const ans = {};
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      const stackQ = traverse(obj[key]);
      for (const value in stackQ) ans[key + "." + value] = stackQ[value];
    } else {
      ans[key] = obj[key];
    }
  }
  return ans;
}
const testCase = {
  a: 1,
  b: { c: { d: 2 } },
  e: {
    f: {
      g: {
        h: 22,
      },
    },
  },
};

console.log(traverseNested(testCase));

const inp = process.argv.slice(2);
try {
  const obj = JSON.parse(inp);
  if (!typeof obj == "object") {
    console.log("Error");
  } else {
    traverseObject(obj);
  }
} catch (e) {
  console.log("Error!! wrong format");
}
