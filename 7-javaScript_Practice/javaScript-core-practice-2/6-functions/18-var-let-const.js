/**
 * var , let , const
 */

/**
 * variables declare with var
 */

//  function myVar() {
//      var a = 10;
//      if(true) {
//         var a = 30;
//          console.log(a);
//      }
//      console.log(a);
//  }

//  myVar();



/**
 * var with for loop
 */

//  for(var i = 0; i < 5; i++) {
//      console.log("inner loop value " + i);
//  }
//  console.log("outer loop value, could access " + i);




/* ----------------------------- let ---------------------------- */

/**
 *  variables declare with let 
 */
//  function myLet() {
//     let a = 10; 
//     if(true) {
//       let  a = 30;
//       // is "a" ka reference address alag hay opar walay "a" say. 
//       // yahan par ye "a" alag hay or opar wala "a" alag hay.
//       // kiyun k "let" keyword k sath declare honay wala variable 
//       // apnay scope tak hi rah pata hay.
//       console.log(a);
//     }
//     //    let a  = 45; 
//     //    yahan error a hay ga, kiyun let k sath same scope may dobara 
//     //    variable declare nai kiya ja sakhta.
//     console.log(a);
// }
// myLet();



/**
 * example-2 of let
 * 
 * */

// function myLet2() {
//     let a = 10;
//     if(true) {
//        a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// myLet2();


/**
 * let with loop
 */

// for(let i = 0; i < 5; i++) {
//     console.log("inner loop value " + i);
// }
// console.log("outer loop value, could not access " + i);