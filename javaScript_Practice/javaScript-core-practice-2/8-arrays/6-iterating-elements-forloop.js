/**
 * iterating elements of Array.
 */


/**
 * --------------- by for loop ---------------------
 */

//  let colors = ["red", "green", "blue"];
//  for(let i = 0; i < colors.length; i++) {
//      console.log(colors[i]);
//  }


/**
 * example-2
 */

//  let random_No = [5,10,20,10,30];
//  let sum = 0;
//  for(let i = 0; i < random_No.length; i++ ) {
//      sum = sum + random_No[i];
//     //  OR
//     //  sum += random_No[i];
//  }
//  console.log(` This is sum of random Numbers of Array:  ${sum}`);


// example - 2
var arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * arr[i]);
// }


// OR
// forEach return nai karta.
arr.forEach(function(elm, index, theArray) {
    console.log(elm * elm);
    // console.log(theArray[index]);
    // console.log(theArray[index] = elm * elm);
});

// now change "arr" with "theArray"
console.log(arr);






