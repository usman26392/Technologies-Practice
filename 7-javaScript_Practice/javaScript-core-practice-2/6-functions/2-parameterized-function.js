/**
 * Parameterized function:
 * parameters aik tarhan k variables hotay hayn.
 * 
 */


//  parameterized function.
//  function addNumbers(num1,num2) {
//      console.log(num1+num2);
//  }

//  function call with arguments.
// addNumbers(3,5);
// addNumbers(5,5);



/**
 *  if missing argument.
 */

//  function add(num1,num2) {
//      console.log(num1);
//      console.log(num2);
//  }

// //  missing an argument.
//  add(3);


// traditional way to use default parameters
let multiplyIt = function(num1,num2) {
    num1 = (num1 === undefined) ? 2 : num1;
    num2 = (num2 === undefined) ? 5 : num2;
    return (num1 * num2);
};

console.log(multiplyIt());


// default values for function parameters
// in ES6:
// let multiplyIt = function(num1 = 2 , num2 = 5) {
//     return (num1 * num2);
// };

// console.log(multiplyIt());

