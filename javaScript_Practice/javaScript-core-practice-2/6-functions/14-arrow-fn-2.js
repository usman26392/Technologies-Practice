/**
 * Arrow function part 2
 */



 /**
  *  with function declaration
  */

// document.querySelector("#mybtn").addEventListener("click",changeBack);
//     function changeBack() {
//         document.querySelector("div").style.background = "yellow"; 
//     }


/**
 * with anonymous function.
 */

// document.querySelector("#mybtn").addEventListener("click",function() {
//     document.querySelector("div").style.background = "green";
// });



/**
 * with arrow function
 */
document.querySelector("#mybtn").addEventListener("click",()=> {
    document.querySelector("div").style.background = "black";       
});

       
 

 