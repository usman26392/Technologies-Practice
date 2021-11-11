/**
 * prototype inheritance:
 * ye wo logic / concept hay jo ES6 classes k backend may use 
 * hora hota hay.   
 */

//  constructor function
 function MyUser(email,userName) {
     this.email = email;
     this.userName = userName;
 }
 MyUser.prototype.LogIn = function() {
     console.log(`${this.email} has logged in.`);
 }


//  constructor function inherit from MyUser
function SuperAdmin(...args) {
    MyUser.apply(this, args);
    this.role = "super admin";
}

SuperAdmin.prototype = Object.create(MyUser.prototype);

 let myUserOne = new MyUser("usman@corp.com","usman");
 let myUserTwo = new MyUser("farhan@corp.com","farhan");
 let ad1 = new SuperAdmin("admin@corp.com","admin");



