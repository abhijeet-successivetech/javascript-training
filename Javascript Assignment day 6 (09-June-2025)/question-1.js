//Q1.  Create a class BankAccount with properties balance 
// and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Your account is credited by ${amount}`;
    }
    else{
      return `Enter amount greater than 0`;
    }

  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Your account is debited by ${amount}`;

    }
    else {
      return "Not enough balance";
    }
  }
  displayBalance() {
    return `Your current balance is ${this.balance}`;
  }
}

const user = new BankAccount(100, "Vijay");

console.log(user.deposit(10));
console.log(user.withdraw(20));
console.log(user.displayBalance());
