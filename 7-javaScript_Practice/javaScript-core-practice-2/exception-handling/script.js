/**
 * --------- error or exception Handling --------------------
 */

// example:
function addAlert(param) {
  console.log(param);
}
try {
  addlert("welcome guest!"); // here func's spelling is not correct.
} catch (error) {
  //   document.getElementById("demo").innerHTML = error;
  console.log(error);
}





// Try...Catch...Finally

// try {
//   add(); // This function is not exist
//   console.log("This line is after of exception");
//   console.log("This line is after of exception");
//   console.log("This line is after of exception");
// } catch (e) {
//   console.log(`Exception Message:  ${e.message}`);
//   // console.log(`Exception type:  ${e.name}`);
//   // console.log(e.stack);
//   // or hum apna b program likh sakhtay hayn, catch block may
//   // exception handling k liyey.
//   // console.log("please declare add() function");
// } finally {
//   console.log("finally block: run regardless of the result.");
// }

/**
 * -------------- throw statement -----------------------
 *  */

// function getRectArea(w,h) {
//     if(isNaN(w) || isNaN(h)) {
//         throw `Parameters are not a number`;
//     }
//     else {
//         return w * h;
//     }
// }

// try {
//     let A =  getRectArea(10,"p");
//     console.log(A);

// } catch (e) {
//     console.log(e);
// }
