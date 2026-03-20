/**
 * overwriting event handler
 */

// let hdgElNode1 = document.querySelector(".hdg-1");
// let myButton1 = document.querySelector(".btn");


// function changeStyle2() {
//     hdgElNode1.style.cssText = "background-color: yellow;font-size:60px;";
// }

// function changeStyle3() {
//     hdgElNode1.style.cssText = "background-color: green;";
// }


// myButton1.onclick = changeStyle2;
// myButton1.onclick = changeStyle3;





/**
 * ------------ addEventListener() --------------
 */

// let hdgElNode = document.querySelector(".hdg-1");
// let myButton = document.querySelector(".btn");

// // way-1: with named function 'this' will point to myButton
// myButton.addEventListener("click",changeCSS);
// function changeCSS() {
//     hdgElNode.style.cssText = "font-size: 60px;";
//     console.log(this)
// }

// way-2: with normal function 'this' will point to myButton 
// myButton.addEventListener("click", function(){
//     // hdgElNode.style.cssText = "background-color:red; color: white;";
//     hdgElNode.classList.toggle("hdg-2");
//     console.log(this)
// });


// way-3: with arrow function 'this' keyword will not point to myButton
// 'this' will point to window global object
// myButton.addEventListener("click",()=> {
//     hdgElNode.style.cssText = "background-color:red; color: white;";
//     console.log(this)
// });


/**
 * cases
 */

let hdgElNode = document.querySelector(".hdg-1");
let myButton = document.querySelector(".btn");

// case-1: binding more than one events and more than one event handler on an element.
myButton.addEventListener("mouseover",function() {
    hdgElNode.style.cssText = "background-color:green; color: white;";   
});

myButton.addEventListener("click", function() {
    hdgElNode.classList.toggle("hdg-2");
});


// case-2: 





/**
 * ---------------- removeEventListener() ---------------------
 */

    // myButton.addEventListener("click",toggleClass);

    // function toggleClass() {
    //     hdgElNode.classList.toggle("hdg-2");
    // }

    // myButton.removeEventListener("click",toggleClass);
















