// Q1. 1. Give an example of using a callback function
//  to handle an asynchronous operation in JavaScript (Use any open api to make a call)
function fetchData(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => callback(data.slice(0, 3)))
    .catch(error => console.log(error))
}

const getData = (data) => {
  console.log(data);
}

fetchData(getData)