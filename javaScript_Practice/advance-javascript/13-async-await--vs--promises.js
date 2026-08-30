


/**
 * -------------------- promise vs async await ----------------------
 */

// all async functions returns a Promise by default.



// example:
// (function() {

//     function getData() {
//         return new Promise((resolve)=> {
//             setTimeout(() => {
//                 resolve('this is data')
//             }, 200);
//         } )
//     }

//     async function start() {
//         let result = await getData()
//         console.log(result)
//     }

//     start()





// })();



// example:
(function() {
    
    // this is easy to use and easy to maintain
    async function getTodo() {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let result = await data.json()
        console.log(result)
    }

    // or this is not readable
    async function getTodo2() {
         fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    getTodo()
    getTodo2()



})()