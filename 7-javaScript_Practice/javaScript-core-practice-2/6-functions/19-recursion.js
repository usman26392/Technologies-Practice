/**
 * recursion
 */

 // program to count down numbers to 1
// function CountDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         CountDown(newNumber);
//     }
// }

// CountDown(4);



// example
let factorial = function fac(num) {
    if(num === 1) {
        return 1;
    }
    else {
        return num * fac(num - 1);
    }
};

let result = factorial(5);
console.log(result);



