

// Definition: A callback is a function passed as an argument to another function,
//  which is then invoked inside the outer function to complete some kind of routine or action.

// When to use: Use callbacks for simple asynchronous operations, especially
//  in environments where Promises are not available or for event-driven code.


// example:

function getData(callback) {
    let data = "Hello, this is callback data";
    callback(data); // caller of callback
}

function myDisplayer(someData) {
    document.getElementById("demo").innerHTML = someData;
}

document.getElementById("loadButton").addEventListener("click", function() {
    getData(myDisplayer)
});