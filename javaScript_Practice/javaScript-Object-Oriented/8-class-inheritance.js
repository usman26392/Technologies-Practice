/**
 * class inheritance
 */

class User4 {
    constructor(email, UserName) {
        this.email = email;
        this.UserName = UserName;
        this.score = 0;
    }
    LogIn() {
        console.log(`${this.email} has logged in.`);
        
    }
    LogOut() {
        console.log(`${this.email} has logged out.`);
        
    }
    UpdateScore() {
        this.score++;
        console.log(`${this.email} score is now  ${this.score}`);
        
    }
}


/**
 * This class inherated from User class;    
 */
class Admin extends User4 {
    DeleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}



let userOne = new User4("usman@corp.com","Usman");
let userTwo = new User4("farhan@corp.com","farhan");
let ad = new Admin("admin@corp.com","admin");


let users = [userOne,userTwo];

ad.LogIn();
ad.DeleteUser(userOne);