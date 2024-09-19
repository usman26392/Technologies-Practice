// Definition: async and await are syntactic sugars built on Promises. async functions return a Promise. await pauses the execution of the async function until the Promise is resolved.

// When to use: Use async/await for better readability and simplicity, especially when dealing with multiple asynchronous operations that need to be performed sequentially.

// basic example:
function getData() {
  return new Promise((resolve, reject) => {
    let data = "Hello, this is async/await data!";
    resolve(data);
  });
}

function myDisplayer(someData) {
    document.getElementById("demo").innerHTML = someData;
}

document.getElementById("loadButton").addEventListener("click", async function() {
    let data = await getData();  
    myDisplayer(data);
});