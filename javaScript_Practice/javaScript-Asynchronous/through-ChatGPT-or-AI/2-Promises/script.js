// Definition: A Promise is an object representing the eventual,
//  completion or failure of an asynchronous operation.

// When to use: Use Promises for more complex asynchronous operations,
//  especially when you need to chain multiple operations together.


// Basic syntax
// let promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   let success = true; // Just a simulation of success or failure
//   if (success) {
//     resolve("Operation succeeded!"); // Fulfilled
//   } else {
//     reject("Operation failed."); // Rejected
//   }
// });

// promise
// .then((message) => {
//   console.log(message); // "Operation succeeded!" if resolved
// })
// .catch((error) => {
//   console.error(error); // "Operation failed." if rejected
// });





// Basic example:
// function getdata() {
//   return new Promise((resolve, reject) => {
//     let data = "Hello, This is promise data!";
//     resolve(data);
//   });
// }

// function myDisplayer(someData) {
//     document.getElementById("demo").innerHTML = someData;
// }


// document.getElementById("loadButton").addEventListener("click", function() {
//     getdata().then((data)=> {
//         myDisplayer(data); 
//     });
// });


// basic example
// is example may hum nay setTimeout() function sirf samajnay k liyey use kiya hay,
// is ka muqsad yey dikhaana hay k kis tarhan server say jub data ata hay us may kesy time lag sakhta hay. 
// aik tarhan say hum nau nakli delay banaya hay, samajnay k liyey.
// is may hum static data use karray hayn, jis ki waja say hum setTimeout() function use karray ta ka yey data atay way real feel ho.
// or agar hummen real data fetch karna ho toh hum fetch API use kartay hayn , fetch API, behind the scene Promise ko hi use karti hay.

console.log('My javascript program that is synchronous! Executed ');
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously (e.g., from an API)
    setTimeout(() => {
      const data = { 
        message: "Hello, world!, Asynchronous program" 
      };
      const error = false; // Simulate no error
      if (!error) {
        resolve(data); // Resolve the promise with the fetched data
      } else {
        reject("Error fetching data"); // Reject the promise with an error message
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the fetchData function
fetchData()
  .then((data) => {
    // Data fetched successfully, do something with it (e.g., display it on the website)
    console.log(data.message); // Output: Hello, world!
    // Here you could update your website's UI with the fetched data
  })
  .catch((error) => {
    // An error occurred while fetching data, handle the error
    console.error(error);
    // Here you could display an error message on your website
  });

console.log('My other code in js file that is synchronous! Executed  ');