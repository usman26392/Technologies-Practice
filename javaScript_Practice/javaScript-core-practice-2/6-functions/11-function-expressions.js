/**
 * function expressions:
 */


 /**
  * This is a function declaration:
  * fn declaration may hum fn ko fn say pahlay b
  * call karsakhtay hayn or baad may b.
  */
//  show();
//  function show(){
//      console.log("This is a javaScript");
//  }
//  show();


/**
 * This is a function expression:
 * fn expression apnay variable say call hoti hay,
 * fn expression ko declare karnay k baad hi call kiya ja sakhta
 * hay bus.
 */

//  showSome(); // can't access lexical declaration 'showSome' before initialization
// let showSome = function show(){
//     console.log("This is a javaScript from fn expression");
// };

// showSome();




// differenece between function declaration and function expression 

// fn declaration
// console.log(doSomething);
// doSomething();

// function doSomething() {
//   console.log("declare something!");
// }

// fn expression
// console.log(something);
// something();

// var something = function() {
//   console.log("express something!");
// };



// example of fn expression
var runIt = function(a) {
  console.log(a);
  a();
};

runIt(function() {
  var b = "Now";
  console.log(`Running ${b}`);
});



