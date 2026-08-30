
/**
 * for loop:
 */

// for (let a = 0; a < 10; a++) {
//     console.log(a); 
// }


/**
 *  2's table with the help of "for loop"
 */
// for(let inc = 1; inc <= 10; inc++) {
//     document.write(`2 * ${inc} = ` + (`${2 * inc} <br>`) );
// }




/**
 * Nested for loop
 */

 for(let i = 0; i < 3; i++) {
     console.log("value of outer loop "+ i);
     for(let j = 0; j < 5; j++) {
         console.log("inner loop " + j);
     }
 }