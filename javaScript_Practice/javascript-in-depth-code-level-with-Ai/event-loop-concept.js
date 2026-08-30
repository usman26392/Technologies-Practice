


// Simple example:  synchronous code example

// console.log("Executed code 1")
// console.log("Executed code 2")


// function logThree() {
//     console.log("Executed code 3")
// }

// function logFour() {
//     logThree();
//     console.log("Executed code 4")
// }

// logFour();
// logThree();




// synchronous code example with a long running task.
// function longRunningTask()  {
//     let count = 0;
//     for (let i = 0; i < 3e9; i++) {
//         count++;
//     }
//     console.log("Long running task completed")
// }

// function importantTask() {
//     console.log("Important")
// }

// longRunningTask();
// importantTask();




// example with asynchrnous callback code.
console.log("Executed: code 1");

setTimeout(function() {
    console.log("Executed asynchronous code 1")
}, 3000 );


setTimeout(function() {
    console.log("Executed asynchronous code 2")
}, 1000 );


console.log("Executed: code 2");
