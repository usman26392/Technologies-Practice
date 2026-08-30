/**
 * Variable hoisting:
 * variables ki program may kahen b declaration hoti hay,
 * toh javascript program ko interpret kartay hu hay
 * sary variables ki declaration top par lay ja kar karta hay.
 * 
 * or agar variables kisi block may  declare horay hayn toh,
 * un ki declaration block k top say hona shuru hoti hay. 
 */


 /**
  * Case 1
  */

//  let a = 10;
//  console.log(a);
 /**
  * javascript k engine may opar wala code aysay generate hoga.
  * let a;
  * a = 10;
  * console.log(a);
  */


  /**
  * Case 2
  */

    // a = 10;
    // console.log(a);
    // var a;
 /**
  * javascript k engine may opar wala code aysay generate hoga.
  * var a;
  * a = 10;
  * console.log(a);
  */



/**
 * Case 3
 */

//  let a = 10;
//  console.log(a + "" + b); // Error: lexical declaration of b
//  let b = 45; // with let

 /**
  * ab opar wala code javascript is tarhan interpret kary ga 
  * apnay pass.
  *     let a;
  *     let b;
  *     a = 10;
  *     console.log(a + "" + b);
  *     b = 45;
  *  
  */


/**
 * Case 4
 */

// let a = 10;
// console.log(a + "" + b); 
// // with var
// var b = 45; 

/**
 * ab opar wala code javascript is tarhan interpret kary ga 
 * apnay pass.
 *     let a;
 *     let b;
 *     a = 10;
 *     console.log(a + "" + b); // b declare hogaya hay but initialize hoga.
 *     b = 45;
 *  
 */  



 /**
  * javascript ki programming ki good practice variables ki 
  * declaration ki yey hay k , variables ko program k top level par
  * hi decalre kiya jae or agar koi block hay toh us block k
  * top par declare kiya jae.
  */



 //------------------------- variable and function hoisting ----------------------------

// example-1

// hoisting();

// //  function declaration
//  function hoisting() {
//    console.log(hoist);

//    var what = "variable and function declarations with top level!";
//    console.log(`what is hoisted:  ${what}`);

//    var hoist = "to lift or raise up.";
//    console.log(`Hoist means:  ${hoist}`);
//  }



// example-2

// function expression
var sum = function() {
  console.log(`${a + b}`);
};

sum();

var a = 10,
    b = 5;


