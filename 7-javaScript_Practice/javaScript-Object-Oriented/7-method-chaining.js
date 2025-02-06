/**
 * method chaining
 */

class User3 {
    constructor(email, UserName) {
        this.email = email;
        this.UserName = UserName;
        this.score = 0;
    }
    LogIn() {
        console.log(`${this.email} has logged in.`);
        return this;
    }
    LogOut() {
        console.log(`${this.email} has logged out.`);
        return this;
    }
    UpdateScore() {
        this.score++;
        console.log(`${this.email} score is now  ${this.score}`);
        return this;
    }
}

let userOne = new User3("usman@gmail.com","Usman");
let userTwo = new User3("farhan@corp.com","farhan");

userOne.LogIn().UpdateScore().UpdateScore().LogOut();

// example:
const calculator = {
    value: 0,
    add(num) {
      this.value += num;
    //   this.value = this.value + num; // Another way
      return this; // Returning `this` allows chaining
    },
    
    subtract(num) {
      this.value -= num;
      return this;
    },
  
    multiply(num) {
      this.value *= num;
      return this;
    },
  
    divide(num) {
      this.value /= num;
      return this;
    },
    
    getResult() {
      console.log(this.value);
      return this; // Optional: return `this` to continue chaining
    }
  };
  
  calculator
    .add(5)        // 0 + 5 = 5
    .subtract(2)   // 5 - 2 = 3
    .multiply(4)   // 3 * 4 = 12
    .divide(3)     // 12 / 3 = 4
    .getResult();  // Output: 4
  


// Example: Array Methods (Chaining with Native JavaScript Methods)
const result = [1, 2, 3, 4]
  .filter(num => num > 2)   // Filters: [3, 4]
  .map(num => num * 2)      // Maps: [6, 8]
  .reduce((sum, num) => sum + num, 0); // Reduces: 6 + 8 = 14

console.log(result); // Output: 14



// Example: Native String Methods
const str = " hello world! ";
const resultString = str
  .trim()        // Removes leading/trailing spaces: "hello world!"
  .toUpperCase() // Converts to uppercase: "HELLO WORLD!"
  .replace("WORLD", "JavaScript"); // Replaces "WORLD" with "JavaScript"

console.log(resultString); // Output: "HELLO JavaScript!"


