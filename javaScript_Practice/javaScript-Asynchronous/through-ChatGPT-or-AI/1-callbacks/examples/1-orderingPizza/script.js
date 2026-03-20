
function orderPizza(callback) {
    console.log("ordering pizza...");
    setTimeout(() => {
        console.log('Pizza is ready!')
        callback(); // This is the callback function being called after the pizza is ready
    }, 4000); // Simulate pizza making time with a 3 second delay
}

// callback function
function eatPizza() {
    console.log("Eating pizza!");
}


orderPizza(eatPizza); // Pass eatPizza as the callback function to be executed after the pizza is ready