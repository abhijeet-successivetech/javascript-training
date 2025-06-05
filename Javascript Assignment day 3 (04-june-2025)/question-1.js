// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

//ANS

function calculate(num1, op, num2) {
  switch (op) {
    case "+":
      return "The addition of the numbers is " + num1 + num2;
    case "-":
      return "The subtraction of the numbers is " + num1 - num2;
    case "*":
      return "The multiplication of the numbers is " + num1 * num2;
    case "/":
      return "The division of the numbers is " + num1 / num2;
    default:
      return "Please enter valid operation";
  }
}

console.log(calculate(2, "*", 5));
