/**
 * Template literals
 */

 let Num_1 = 10;
 let Num_2 = 12;

 console.log(` Sum of two numbers ${Num_1 + Num_2} `);


 /**
  * with function caller
  */
function SaySomeThing(word) {
    return word;
} 
console.log(`${SaySomeThing("Hello World")}`);