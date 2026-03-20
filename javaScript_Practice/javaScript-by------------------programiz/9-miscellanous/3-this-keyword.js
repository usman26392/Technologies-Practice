


/**
 * ---------- this inside the global scope ----------------------
 */

// let a = this;
// console.log(a);

// this.userName = 'Usman';
// console.log(window.userName)


/**
 *  this inside the function
 */
 
// function greet() {
//     console.log(this);
// }
// greet();


/**
 *  this inside constructor function
 */
  
//   function Person() {
//       this.userName = 'Usman';
//       console.log(this);
//   }

//   let man = new Person();
  
// //   console.log(man);


/**
 * this inside Object's method
 */
  
//   const person = {
//       userName: 'usman',
//       age: '30',
//       greet() {
//           console.log(this);
//         //   console.log(this.userName);
//       }    
//   }

//   person.greet();


/**
 *  this inside inner function
 */

//  const person = {
//     userName: 'usman',
//     age: '30',
//     greet() {
//         console.log(this);
//         console.log(this.userName);
//         function innerFunc() {
//             // here this refers to the global Object
//             console.log(this);
//             console.log(this.userName);
//         }
//         innerFunc();
//     }    
// }

// person.greet();

/**
 *  this inside arrow function
 */

    // example-1:
    // const greet = ()=> {
    //     console.log(this)
    // }
    // greet();



    //  example-2
    // const person = {
    //     userName: 'usman',
    //     age: '30',
    //     greet() {
    //         console.log(this);
    //         console.log(this.userName);
    //         innerFunc = ()=> {
    //             // here this refers to its parent scope object.
    //             console.log(this);
    //             console.log(this.userName);
    //         }
    //         innerFunc();
    //     }    
    // }

    // person.greet();


/**
 *  this inside function with strict Mode
 *  
 * */  
 
// example-1: with undefined this
//   'use strict';
//   this.userName = 'Usman';
//   function greet() {
//       console.log(this.userName);
//   }
//   greet();

//   example-2: with solution of undefined

'use strict';
  this.userName = 'Usman';
  function greet() {
      console.log(this.userName);
  }
  greet.call(this);

  // call function nay greet() function ko 'this' object
  // ka method bana diya hay.


  

   
