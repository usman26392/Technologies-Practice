/**
 * using json data:
 * 
 */

 //  ye method (GetTodos) aik anonymous function , argument k torh par lay ga.
// const GetTodos = (callback) => {
//     //  develop a object of XMLHttpRequest.
//     const myRequest = new XMLHttpRequest();

//     //  set the Https request
//     myRequest.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//     //  send Http request
//     myRequest.send();

//     myRequest.addEventListener("readystatechange", ()=> {
//         if(myRequest.readyState === 4 && myRequest.status === 200 ) {
//             let data = JSON.parse(myRequest.responseText);
//             callback(false, data);          
//         }
//         else if (myRequest.readyState === 4) {
//             callback(`Could not found the data`, false);
//         }
//     });

// };


// // call a function with an anonymous function argument.
// // ye method (GetTodos) aik argument(anonymous function == callback function.) day ga.
// // apnay method ko.
// GetTodos((err,myData) => {
//     console.log(`callback function fired`);
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(myData);
//     }
// });









