


// Currying is a functional programming technique where a function that takes multiple arguments is transformed into a nested series of functions, each taking a single argument.
//  Instead of calling orderPizza("45", "Rehan"), you break it down so each piece of data is handled one at a time.

function orderPizza(order) {
    return function (customerName) {
        return console.log(`Pizza order is ${order} and customer name is ${customerName} `)
    }
}

orderPizza("45")("Rehan")


// You can achieve the exact same result more concisely using Arrow Functions,
// which is very common in modern JavaScript:


// const orderPizza = order => customerName => {
//     console.log(`Pizza order is ${order} and customer name is ${customerName}`);
// };

// orderPizza("45")("Rehan");

