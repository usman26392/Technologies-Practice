/**
 * Immediate Invoked Function  Expression.
 * aik fn hay jo khud call hojata hay.
 * syntax: 
 * (anonymous function)();
 */


/**
 * IIFE
 */
 (function(){console.log("wow");})();


/**
 * IIFE with arrow function.
 */
 
 (()=>console.log("IIFE with  arrow fn"))();



/**
 * IIFE with parameters
 */

 (function(num_1,num_2) {
     console.log(num_1 + num_2);
 })(10,2);