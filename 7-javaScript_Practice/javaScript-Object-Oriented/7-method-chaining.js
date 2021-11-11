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

let userOne = new User3("usman@corp.com","Usman");
let userTwo = new User3("farhan@corp.com","farhan");

userOne.LogIn().UpdateScore().UpdateScore().LogOut();




