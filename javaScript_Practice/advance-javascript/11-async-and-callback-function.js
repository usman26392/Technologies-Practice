

/**
 * ----------------- Asynchronous javascript ----------------------------
 */
/**
 * ---------- async examples
 * data fetching
 * calling backend APIs
 * loading files
 * timers & intervals
 */




// synchronous example:
// (function() {
//     let pizza;
//     function orderPizza() {
//         console.log('Order Pizza');
//         pizza = '🍕';
//         console.log('pizza was ordered')    
//     }
    
//     orderPizza();
//     console.log(`eat ${pizza}`);

// })();


// asynchronous basic example:
// (function() {
//     let pizza;
//     function orderPizza() {
//         console.log('Order Pizza');
//         setTimeout(()=> {
//             pizza = '🍕';
//             console.log(`${pizza} is ready`);

//         }, 2000)
//         console.log('pizza was ordered')    
//     }
    
//     orderPizza();
//     console.log(`eat ${pizza}`);

// })();


// asynchronous with callback example:

// (function() {    
//     // callback function:
//     // here paramter's name, it is up to you what you want use
//     function orderPizza(pizzaReady) {
//         setTimeout(()=> {
//             const pizza = '🍕';
//             pizzaReady(pizza)
//         }, 2000)
//     }

//     function pizzaReady(pizza) {
//         console.log(`Eat the ${pizza}`);
//     }
    
//     // caller of callback function:
//     orderPizza(pizzaReady);
//     console.log('do study');

// } )();


// asynchronous with addEventListener() that is callback
// (function() {
    
//     console.log('statement 1 execute');
//     function printSomeThing() {
//         console.log('statement 2 execute ')
//     }

//     // caller of callback function: here callback function is addEventListener() 
//     window.addEventListener("click", printSomeThing);

//     console.log('statement 3 execute ')

// })();


/**
 * -------------------------------------- callback hell that is a problem ------------------------------------
 * matlab yey hay k aik hi waqt may multi tasking karna .
 * matleb yey hay k aik hi waqt may nested callback k use hona.
 * jo k aik problem hay is tarhan karna.
 */

(function() {
    
    console.log('statement 1 execute')
    function thing1(callback) {
        setTimeout(()=> {
            // call pizza shop
            console.log('call pizza shop');
            callback()
        }, 500)


    }

    function thing2(callback) {
        setTimeout(()=> {
            // order the pizza
            console.log('order the pizza');
            callback();
        }, 500)
    }

    function thing3() {
        // Eat the pizza
        console.log('Eat the pizza');
    }
    
    // ab yey use karna bohat mushkhil hay,
    // is problem ko dor kiya hay promise nay.
    // wo easy to use, easy to read , easy to maintan hay.
    thing1(()=> {
        thing2(()=> {
            thing3()
        });
    });

    console.log('last statement execute')

})();













