// Write a function to take input(age, name, phone no.) from user and display it

//ANS
let detailEntry = () => {
  let details = prompt("Enter name age and number with spaces: ").split(" ");
  return `The details of the user is: 
    name ${details[0]}, 
    age is ${details[1]} and
    number is ${details[2]}`;
};

console.log(detailEntry());
