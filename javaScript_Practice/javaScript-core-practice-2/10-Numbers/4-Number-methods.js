/**
 * Number methods
 */

 /**
  * ------------- toString() -------------------
  */

  let number = 10;

// convert into string
console.log(typeof (number.toString()));

  // convert into Binary Number System
  console.log("Binary value of 10: " + number.toString(2));

//   convert into Octal Number System.
  console.log("Octal value of 10: " + number.toString(8));

// convert into Hexadecimal Number System.
  console.log("Hexadecimal value of 10: " + number.toString(16));  



/* -------------------- toExponential() --------------- */
let num_2 = 125344584223;
console.log(num_2.toExponential());  
console.log(num_2.toExponential(2));  
console.log(num_2.toExponential(3));  



/* ----------------------- toFixed() ----------------- */
 let num_3 = 19.658945;
 console.log(num_3.toFixed());
 console.log(num_3.toFixed(2));


/* ------------------- parseInt() -----------------------*/
// let num_4 = "10.2578";
let num_4 = "10.2578";
console.log(parseInt(num_4, 2)); // radix is a any number system like Binary, Octa ...
console.log(`Convert into integer value:  ${parseInt(num_4)}`);


/* --------------------- parseFloat() ----------------- */
let num_5 = "10.2578";
console.log( parseFloat(num_5));