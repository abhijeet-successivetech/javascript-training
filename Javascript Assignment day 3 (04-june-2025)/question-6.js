//6. Write a program to display prime numbers from 1 to 50

//ANS
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function primesInRange() {
  let ans = [];
  for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
      ans.push(i);
    }
  }
  console.log(ans);
}
primesInRange();
