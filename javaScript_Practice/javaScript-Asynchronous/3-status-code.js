/**
 * status code
 */

//  develop a object of XMLHttpRequest.
const myRequest = new XMLHttpRequest();

//  set the Https request
 myRequest.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//  send Http request
 myRequest.send();

 myRequest.addEventListener("readystatechange", ()=> {
     if(myRequest.readyState === 4 && myRequest.status === 200 ) {
         console.log(myRequest.responseText);
     }
     else if (myRequest.readyState === 4) {
         console.log(`Could not found the data`);
     }
 });

 