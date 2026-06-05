


function greet(name, callback) {
    setTimeout(function() {
        callback(name); // caller of displayGreeting function
    }, 2000);
}


function displayGreeting(name) {
    console.log("Hello, " + name + "!");
}

greet("Usman", displayGreeting);

