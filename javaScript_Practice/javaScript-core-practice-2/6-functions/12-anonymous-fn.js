/**
 *  Anonymous function:
 *  wo fn jis ka koi name na ho aysa fn anonymous fn kahlata hay.
 */

/**
 * points:
 * 1) anonymous fn can be stored in  a variable.
 * 2) anonymous fn can be pass as a argument in a function.
 * 3) Returning anonymous function from a function.
 * 
 */



 /**
  * anonymous fn can be stored in  a variable.
  */

//   let printSome = function() {
//       console.log("This is a body of anonymous fn");
//   }
//   printSome();


/**
 *  anonymous fn can be pass as a argument in a function.
 */  

// function disp(myAnonfn) {
//     return myAnonfn();
// }

// console.log(disp(function() {
//     return "geekyshows"
// }));


/** 
 *  Returning anonymous function from a function.
*/

function disp(a) {
    return function(b) {
        return (a+b);
    };
}

let anonFn =  disp(10); 
// yahan par hum anonymous fn call karwa rahay hayn. jo disp(10) ko as a returned mila.
console.log(anonFn(2));
 

