/**
 * constructor of a class
 */

//  class User1 {
//      constructor(email, UserName) {
//          this.email = email;
//          this.UserName = UserName;
//      }
//  }

//  let userOne = new User1("usman@corp.com","Usman");
//  let userTwo = new User1("farhan@corp.com","farhan");


 // ------------------------------- five important concepts of understanding javascript constructor:


//  function Users() {
//      console.log(this);
//  }

//  // simple function call/invoke
//  var user1 = Users(); 

//  // here function call with new keyword
//  var user2 = new Users(); 


//  example-2

// function Users(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// }

// // var user1 = Users("Muhammad", "Usman");

// var user2 = new Users("Muhammad", "Usman");



// ------------------------------ creating safe javascript constructors --------------------

function Users(fName, lName) {
    if(this instanceof Users) {
        this.firstName = fName;
        this.lastName = lName;
    }
    else {
        return new Users(fName,lName);
    }
}

var user1 = Users("Syed", "Arsalan");

var user2 = new Users("Muhammad", "Usman");






 


 