//Q6. Implement a function that returns a resolved
//  Promise after a specified delay using async/await.

const delayedPromise = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success after", delay);
    }, delay);
  });
}

const myFun = async() => {
  console.log("Value one");
  const response =  delayedPromise(2000);
  console.log(response);
  console.log("value two");
}
myFun();
