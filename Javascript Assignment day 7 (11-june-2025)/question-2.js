//Q2. Give an example of using multiple callback functions in a single function in JavaScript

const getData = (id,nextData) => {
  setTimeout(() => {
    console.log("Fetching data",id);
    if(nextData){
      nextData();
    }
  },1000);
}

getData(1,() => {
  getData(2)
})