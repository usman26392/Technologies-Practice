/**
 * class methods
 */

class User {
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

let userOne = new User("usman@corp.com","Usman");
let userTwo = new User("farhan@corp.com","farhan");