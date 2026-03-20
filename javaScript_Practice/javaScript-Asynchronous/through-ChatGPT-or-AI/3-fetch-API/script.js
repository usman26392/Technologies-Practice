
// Definition: The Fetch API provides a modern way to make network requests. It returns a 'Promise' that resolves to the Response object.
// When to use: Use the Fetch API for 'making network requests', such as fetching data from a server.


// Basic example:
document.getElementById("loadButton").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        myDisplayer(data);
    })
    .catch(error => {
        myDisplayer(error)
    })
});

function myDisplayer(someData) {
    // console.log(someData)
    document.getElementById("demo").innerHTML = someData.title;
}