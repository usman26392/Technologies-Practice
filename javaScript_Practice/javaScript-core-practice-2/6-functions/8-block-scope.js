/**
 * Block scope:
 */






/**
 * block scope with old keyword "var":
 * is keyword k sath block may koi b variable declare kiya
 * jata , toh wo apnay block say bahir b access ho jata tha,
 * toh yey aik tarhan say problem thi , toh ES5 ya ES6 may
 * aik keyword aya jo ye hay "let" is nay is problem ko 
 * door kardiya hay.
 * matlab ye hay k is keyword(let) k sath jo variable 
 * declare hoga kisi b blck may , wo sirf usi block may
 * access kiya ja sakay ga.   
 */

//  if(true) {
//      var b = 20; // variable declare and initialize with "var" 
//      console.log(b);
//  }

//  console.log(b); // b ko access kiya ja sakhta hay.



 /**
  * block scope with new keyword "let"
  * ab yey hi keyword use hota hay.
  */

  if(true) {
     let b = 20; // variable declare and initialize with "let"
     console.log(b);
 }

//  yahan par b (variable) ko access nai kiya ja sakhta.
 console.log(b);


