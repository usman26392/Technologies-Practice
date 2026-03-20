/**
 * object literal
 */

/**
 * This is not part of object oriented approach.
 */ 

//  let userOneEmail = "usman@corp.com";
//  let userOneName = "Muhammad Usman";
//  let brothers = ["Muhammad Farhan","Fahad Ali","Muhammad Rehan"];

//  function Login(email) {
//      console.log(`${email} , is now online `);
//  }

//  function Brothers(brothers) {
//     brothers.forEach(brs => {
//          console.log(brs);
//      });
//  }

//  Login(userOneEmail);
//  Brothers(brothers);

/**
 *  This is an object oriented approach. 
 *  and also object literal
 */ 

 let userOne = {
     email: "usman@corp.com",
     name: "Muhammad Usman",
     brothers: ["Muhammad Farhan","Fahad Ali","Muhammad Rehan"],
     Login: function() {
         console.log(`${this.email} has logged in.`);
     },
     LogOut() {
         console.log(`${this.email} has logged out.`);
     }
 };

 