/**
 * classes in javaScript
 */

/**
 * These are all object literals.
 */ 

let user1 = {
    email: "usman@corp.com",
    name: "Muhammad Usman",
    Login: function() {
        console.log(`${this.email} has logged in.`);
    },
    LogOut() {
        console.log(`${this.email} has logged out.`);
    }
};

let user2 = {
    email: "usman@corp.com",
    name: "Muhammad Farhan",
    Login: function() {
        console.log(`${this.email} has logged in.`);
    },
    LogOut() {
        console.log(`${this.email} has logged out.`);
    }
};

let user3 = {
    email: "usman@corp.com",
    name: "Muhammad Rehan",
    Login: function() {
        console.log(`${this.email} has logged in.`);
    },
    LogOut() {
        console.log(`${this.email} has logged out.`);
    }
};

// opar wali approach may code same tarhan ka baar baar use hora hay
// jesy user ki property or methods.
// ab soucho k aysay users lakhon may hotay,
//  toh kitna mushkil hota manage karna program.
// ab yahan ajata hay classes ka concept


/**
 * empty class
 */

// class User {

// }
