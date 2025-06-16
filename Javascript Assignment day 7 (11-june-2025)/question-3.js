//Q3.  Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

// function fetchData(callback) { 
//   setTimeout(() => 
//     { 
//       callback(null, "Data fetched successfully"); 
//     },1000); 
// }

const fetchData = (check) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    if (!check) {
      reject("Data not fetched");
    }
    resolve("Data fetched successfully");
  }, 1000));
}

fetchData(false).then(res => console.log(res)).catch((err) => console.log(err))
