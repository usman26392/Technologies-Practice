/**
 * variable scope:
 * 1) Global scope:
 * 2) Local scope:
 */



/**
 * Global Scope and Local variable:
 * 
 */

//  let num_1 = 10; 
//  // num_1 is a global variable:
// //  is variable ko hum program may kahen
// //  b access karsakhtay hayn.

//  function add(num_2) { 
//      // num_2 is a local variable:
//     //  is local variable ko hum bus isi function may
//     // access karsakhtay hayn.
//      return (num_1 + num_2);
//  }

//  add(20);


/**
 * global variable inside a function
 */

//  function printSome() {
//      txt = "This is a global variable inside a function";
//  }

//  printSome();
// //  access a global variable from a function.
// // magar is k liyey zarori yey hay k pahlay function call howa wa ho.
//  console.log(txt);



/**
 * understand nesting scope.
 */

 function printSome_1() {
     let i = "This is outer function variable";
    //  yahan par j (variable) ko access nai kiya ja sakhta.
    // kiyun k wo sirf apnay block may hi access ho sakhta hay bus.
     function printSome_2() {
         let j = "This is an inner function variable";
        //  yahan par hum i (variable) ko access karsakhtay hayn.
        // i (variable) is waja say access ho sakhta hay kiyun k yey 
        // inner function b is k block ka part hay.
     }
 }


 