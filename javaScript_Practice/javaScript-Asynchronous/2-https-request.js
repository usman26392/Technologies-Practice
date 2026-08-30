/**
 * https request
 */

 
//  develop a object of XMLHttpRequest.
 const myRequest = new XMLHttpRequest();

//  set the Https request
 myRequest.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//  send Http request
 myRequest.send();

 myRequest.addEventListener("readystatechange", ()=> {
     if(myRequest.readyState === 4) {
         console.log(myRequest.responseText);
     }
 });

 