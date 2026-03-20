/**
 * class methods
 */

class User2 {
    constructor(email, UserName) {
        this.email = email;
        this.UserName = UserName;
    }
    LogIn() {
        console.log(`${this.email} has logged in.`);
    }
    LogOut() {
        console.log(`${this.email} has logged out.`);
    }
}

let userOne = new User2("usman@corp.com","Usman");
let userTwo = new User2("farhan@corp.com","farhan");

userOne.LogIn();