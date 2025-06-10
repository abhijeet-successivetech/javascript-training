//Q1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")


const removeDuplicates = (text) => {
  if (text === undefined) {
    console.error("Error!!!");
    return;

  }
  let ans = "";
  for (let i = 0; i < text.length; i++) {
    if (ans.includes(text[i]) == false) {
      ans += text[i];
    }
  }
  return ans;
}
const [inputStr] = process.argv.slice(2);

console.log(removeDuplicates(inputStr));