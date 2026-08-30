const product = {
  name: "Laptop",
  price: 1200,
    applyDiscount(percentValue) {
      this.price = this.price - (this.price * percentValue / 100);
      console.log(`Discounted price: $${this.price}`);
    }
};

// 100% = 1200
// 1% = 1200 / 100
// 10% = (1200 / 100) * 10 = 120
product.applyDiscount(10);
product.applyDiscount(50);

// Banking account
// const bankAccount = {
//   owner: "John",
//   balance: 5000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`New balance: $${this.balance}`);
//   },
//   withdraw(amount) {
//     // if (amount <= this.balance) {
//     //   this.balance -= amount;
//     //   console.log(`Withdrawal successful. Remaining balance: $${this.balance}`);
//     // } else {
//     //   console.log("Insufficient funds!");
//     // }
//     if(amount > this.balance) return console.log("Insufficient funds!");
//     this.balance -= amount;
//     console.log(`Withdrawal successful. Remaining balance: $${this.balance}`)
//   }
// };

// bankAccount.deposit(1000);
// bankAccount.withdraw(2000);
