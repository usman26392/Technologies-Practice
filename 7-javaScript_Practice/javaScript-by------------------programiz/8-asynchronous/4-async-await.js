

// async function f() {
//     console.log('Async function');
//     return Promise.resolve(1);
// }

// f();


// example-2
// async function f() {
//     console.log('Async function');
//     return Promise.resolve(2);
// }

// f().then(function(result) {
//     console.log(result)
// })


// // example-3 with a promise
// let myPromise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('promise resolved!')
//     }, 4000);

// });

// async function f() {
//     // wait until the promise resolves
//     let result = await myPromise;

//     console.log(result);
//     console.log('Hello');
// }

// // calling the async function
// f();



// example-4 with a try-catch block
let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
    if(x==1) {
        setTimeout(() => {
            resolve('promise resolved!')
        }, 4000);
    }
    else {
        reject('promise is rejected')
    }

});

async function f() {
    try {
        // wait until the promise resolves
        let result = await myPromise;
        console.log(result);
        console.log('Hello');
        
    } catch (error) {
        console.log(error)
    }
}

// calling the async function
f();
