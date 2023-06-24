// --------------------------------------- nested function --------------------------------
// example: nested function's scope
// nested function apny block , outer scopes k varaibles ka b access rakhta hay.

// (function() {
//     let a = 10;
//     function outer() {
//         let b = 20;
//         function inner() {
//             let c = 30;
//             console.log(a, b, c)
//         }
//         inner()
//     }
//     outer();
// })();

// ------------------------------------------- closure --------------------------------
// example1: closure
// (function() {
//     function outer() {
//         let counter = 0;
//         function inner() {
//             counter++;
//             console.log(counter)
//         }
//         inner();
//     }
//     outer();
//     outer();

// })();

// example2:
// (function() {

//     function outer() {
//         let counter = 0;
//         function inner() {
//             counter++;
//             console.log(counter)
//         }
//         return inner;
//     }

//     let innerFn = outer();
//     innerFn();
//     innerFn();
// })();

// ---------------------------------------- currying -----------------------------------------

// ------------------------------------- this keyword ----------------------------------------

// console.log(typeof this )
// console.log(this); // here this represents global window object

// implicit binding of this
// const person = {
//     userName: "Muhammad Usman",
//     sayMyName: function() {
//         console.log(this);
//         console.log(`My name is ${ this.userName } `)
//     }
// }

// person.sayMyName();

// example2: explicit binding of this
// const person = {
//     userName: "Muhammad Usman Nawaz Ali",
// }

// function sayMyName() {
//     console.log(this);
//     console.log(`My name is ${ this.userName } `)
// }

// // sayMyName();
// sayMyName.call(person); // for explicit binding of this

// --------------------------------- new binding for this -------------------------------
// function Person(name) {
//     this.userName = name
// }

// let p1 = new Person("Usman");
// let p2 = new Person("Rehan");

// console.log(p1)
// console.log(p2)

// ---------------------------------- default binding for this ------------------------------

// var userName = "Rehan Ali";  // in global scope
// const userName = "Amir"; // is not in global scope
// globalThis.userName = "Asim" // in global scope

// function sayMyName() {
//     console.log(this);
//     console.log(`My name is ${ this.userName } `) // here 'this' is in global scope.
// }

// sayMyName()

// ---------------------------------------- prototype -----------------------------

// example1: without prototype
// (function() {

//     function Person(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }

//     let p1 = new Person("Muhammad", "Usman");
//     let p2 = new Person("Farhan", "Ali");

//     // this instance only for p1 object.
//     p1.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     console.log(p1);
//     console.log(p2);

//     console.log(p1.getFullName())
//     console.log(p2.getFullName()) // Uncaught TypeError: p2.getFullName is not a function

// })();

// example2: with prototype object
// (function() {

//     function Person(fName, lName, houseNo) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.address = {
//             house: houseNo
//         }
//     }

//     // this instance for all objects whose type will be Person.
//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     // this instance for all objects whose type will be Person.
//     Person.prototype.city = "karachi"; // for function
//     // or
//     p2.__proto__.city2 = "larkana";  // for object property

//     let p1 = new Person("Muhammad", "Usman", "214-B, Mehmoodabad no-1");
//     let p2 = new Person("Farhan", "Ali", "229-B, Mehmoodabad no-1");

//     console.log(p1)
//     console.log(p2);

//     console.log(p1.getFullName())
//     console.log(p2.getFullName())
// })();




// ---------------------------------- prototype inheritance ------------------------------

// example1:  prototype inheritance: an old way

// (function() {

//     // parent function constructor
//     function Person(fName, lName, houseNo) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.address = {
//             house: houseNo
//         }
//     }

//     // this instance for all objects whose type will be Person.
//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     // child function constructor
//     function SuperHero(fName, lName, houseNo) {
//         // inheritance of Person function constructor.
//         Person.call(this, fName, lName, houseNo  );
//         this.isSuperHero = true
//     }

//     // create a prototype object whose type is Person and it assign to superHero's prototype object.
//     SuperHero.prototype = Object.create(Person.prototype);
//     SuperHero.prototype.constructor = SuperHero; // reset of super hero's constructor

//     SuperHero.prototype.fightCrime = function() {
//          console.log('fighting crime!')
//     }

//     const batman = new SuperHero("Asim", "Bajwa", "212-B" );

//     console.log(batman);
//     console.log(batman.getFullName())
//     batman.fightCrime();

// })();




// example2: a new way with class keyword.

(function() {
    
    // parent class
    class Person {
      constructor(fName, lName, houseNo) {
        this.firstName = fName;
        this.lastName = lName;
        this.address = {
          house: houseNo,
        };
      }
      
      // prototype instance
      getFullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
    
    // child class
    class SuperHero extends Person {
      constructor(fName, lName, houseNo) {
        super(fName, lName, houseNo); // call of Person's constructor
        this.isSuperHero = true;
      }
     // prototype instance
      fightCrime() {
        console.log("fighting crime!");
      }
    }
    
    
    let spiderman = new SuperHero("Asim", "Bajwa", "212-B" );
    
    console.log(spiderman);
    console.log(spiderman.getFullName() )
    console.log(spiderman.firstName)
    console.log(spiderman.isSuperHero)
    spiderman.fightCrime()

})();

