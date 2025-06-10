//Q2. Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const reverseString = (token, space = "") => {
  let reversedWord = "";

  for (let i = token.length - 1; i >= 0; i--) {
    reversedWord += token[i];
  }

  return reversedWord + space;
}
const breakWord = (word) => {
  if (word === undefined) {
    console.error("Error!!!");

    return;

  }
  let ans = "";
  const token1 = word.split(" ");
  console.log(token1);

  for (let index = 0; index < token1.length; ++index) {
    if (index == token1.length - 1) {
      ans += reverseString(token1[index]);
    } else {
      ans += reverseString(token1[index], " ");
    }
  }
  return ans;
}
const [inputStr] = process.argv.slice(2);
console.log(breakWord(inputStr));
