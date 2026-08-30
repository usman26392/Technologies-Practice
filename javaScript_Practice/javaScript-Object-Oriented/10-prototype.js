/**
 * prototype 
 */

function User6(email, UserName) {
    this.email = email;
    this.UserName = UserName;
    this.score = 0;
}

// instance member of __proto__:Object
User6.prototype.LogIn = function() {
    console.log(`${this.email} has logged in.`);
}


let userOne = new User6("usman@corp.com","Usman");
let userTwo = new User6("farhan@corp.com","farhan");