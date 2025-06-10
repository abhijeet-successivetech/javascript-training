
//Q4.  Write a program to convert given string to upperCase OR lowerCase


const toLower = (text) => {
  let ans = "";
  for (let i = 0; i < text.length; ++i) {
    let value = text[i].charCodeAt();
    if (value >= 65 && value <= 90) {
      let caps = value + 32;
      ans += String.fromCharCode(caps);
    }
    else {
      ans += text[i];
    }
  }
  return ans;
}

const toUpper = (text) => {

  let ans = "";
  for (let i = 0; i < text.length; ++i) {
    let value = text[i].charCodeAt();
    if (value >= 97 && value <= 122) {
      let caps = value - 32;
      ans += String.fromCharCode(caps);
    }
    else {
      ans += text[i];
    }
  }
  return ans;
}


const [inputStr] = process.argv.slice(2);

if (typeof inputStr != 'string') {
  console.log("Error in Input");

}
else {
  console.log(toLower(inputStr));
  console.log(toUpper(inputStr));
}