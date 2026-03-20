// old way:
// (function () {
//   // constructor function
//   function Person() {
//     this.age = "12";
//     this.run = function () {
//       console.log("can run");
//     };
//   }

//   Person.prototype.talk = function () {
//     return "Can talk";
//   };

//   let farhan = new Person(),
//       usman = new Person();
//   // console.log(farhan);
//   // console.log(usman);

//   //  if we update 'age'(that is not an prototype instance) for 'usman object';
//   // there will not update 'age' of 'farhan' object
//   console.log((usman.age = "30"));
//   console.log(usman);
//   console.log(farhan);

//     // if we want to add a property in prototype object with the help of Person's object
//     farhan.__proto__.skin = "Brown";

//     // if we want to add a property in prototype object with the help of Person class
//     Person.prototype.attitude = "friendly";

//     // if we update skin property (that is an prototype instance) for usman object,
//     // there will be updated skin value for "farhan object" too.
//     usman.__proto__.skin = 'wheat';

// })();

// just for understanding inheritance
// (function() {
//     let me = {
//         talk() {
//             return "Talking"
//         }
//     }

//     let you = {
//         talk() {
//             return "Talking"
//         }
//     }
//     console.log(me.talk());
//     console.log(you.talk());
// })();

// if there are millions of objects like these ? think about
// now come here a concpet a class and inheritance.

// example: 1
// (function() {

//     class Person {
//         constructor() {
//             this.age = "12";
//             this.run = function() {
//                 console.log("can run")
//             }
//         }
//         talk() {
//             return "Can talk"
//         }
//     }

//     let farhan = new Person(),
//         usman = new Person();

//         // now we check both objects
//         // console.log(farhan)
//         // console.log(usman)

//         // if we update 'age'(that is not an prototype instance) for 'usman object';
//         // there will not update 'age' of 'farhan' object
//         console.log(usman.age = "30");
//         console.log(usman);
//         console.log(farhan);

//         // if we want to add a property in prototype object with the help of Person's object
//         farhan.__proto__.skin = "Brown";

//         // if we want to add a property in prototype object with the help of Person class
//         // Person.prototype.attitude = "friendly";

//         // if we update skin property (that is an prototype instance) for usman object,
//         // there will be updated skin value for "farhan object" too.
//         usman.__proto__.skin = 'wheat';

//         //  if we update talk function (that is an prototype instance) for usman object,
//         // there will be updated talk function for "farhan object" too.
//         usman.__proto__.talk = function() {
//             return "new and improved talking!"
//         }
//         console.log(usman.talk())
//         console.log(farhan.talk())

//         // usman.__proto__ === Person.prototype;
//         // console.log(Person.prototype === usman.__proto__);
//         // console.log(usman.__proto__ === Person.prototype);
//         // console.log(farhan.__proto__ === Person.prototype);
//         // console.log(farhan.__proto__ === usman.__proto__);

// })();

// example: 2
(function() {

    class Person {
        constructor() {
            this.age = "12"
        }
        talk() {
            return "can talk"
        }
    }


    class SuperHuman extends Person {
        fly() {
            return "can fly"
        }
    }

    let you = new SuperHuman();
    console.log(you);
    console.log(you.fly())
    console.log(you.talk())
    console.log( you.age )


})();



// example: 3
// inheritance with pure object

// (function () {
//   let person = {
//     talk() {
//       return "Can talk";
//     },
//   };

//   let farhan = Object.create(person);
//   let usman = Object.create(person);

//   console.log(farhan);
//   console.log(usman);

//   console.log(farhan.talk());
//   console.log(usman.talk());
// })();



// example: 4
// set prototype with built-in method
// (function () {
//   let person = {
//     talk() {
//       return "Can talk";
//     },
//   };

//   let farhan = {};

//   Object.setPrototypeOf(farhan, person);

//   console.log(farhan)
//   console.log(farhan.talk())


// })();



