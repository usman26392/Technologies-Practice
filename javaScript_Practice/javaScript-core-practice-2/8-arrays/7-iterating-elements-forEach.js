/**
 * iterating elements of Array.
 * by forEach()
 */

/**
 * 
 */

 let colors = ["red", "green", "blue"];
 colors.forEach(function(myColorElement, myArrIndexNo) {
     console.log(`This is element of colors:${myColorElement} ,Current index No: ${myArrIndexNo}`);
 } );

/**
 * 
 */
// let random_No = [15,10,20,10,30];
// let sum = 0;
// random_No.forEach(function(myNumbers)  {
//     sum += myNumbers;
// }) 
// console.log(` This is sum of random Numbers of Array:  ${sum}`);


/**
 * example of for each with Arrow function
 */
// let random_No = [5,10,20,10,30];
// let sum = 0;
// random_No.forEach((myNumbers) => {
//     sum += myNumbers;
// }) 
    

// console.log(` This is sum of random Numbers of Array:  ${sum}`);

// example
// let arr = [
//     {
//       userName: "Usman"
//     },
//     {
//       userName: "Rehan"
//     }
//   ];

//   let check = arr.forEach(function(el) {
//     console.log(el.userName) 
//   });

//   console.log(arr)
