/**
 * overwriting event handler
 */

// let hdgElNode1 = document.querySelector(".hdg-1");
// let myButton1 = document.querySelector(".btn");

// myButton1.onclick = changeStyle2;
// myButton1.onclick = changeStyle3;

// function changeStyle2() {
//     hdgElNode1.style.cssText = "background-color: yellow";
// }

// function changeStyle3() {
//     hdgElNode1.style.cssText = "background-color: green;";
// }



/**
 * ------------ addEventListener() --------------
 */

// let hdgElNode = document.querySelector(".hdg-1");
// let myButton = document.querySelector(".btn");

// way-1
// myButton.addEventListener("click",changeCSS);
// function changeCSS() {
//     hdgElNode.style.cssText = "font-size: 60px;";
// }

// way-2
// myButton.addEventListener("click",function(){
//     // hdgElNode.style.cssText = "background-color:red; color: white;";
//     hdgElNode.classList.toggle("hdg-2");
// });


// way-3
// myButton.addEventListener("click",()=> {
//     hdgElNode.style.cssText = "background-color:red; color: white;";
// });


/**
 * cases
 */

// case-1: binding more than one events and more than one event handler on an element.
// myButton.addEventListener("mouseover",()=>{
//     hdgElNode.style.cssText = "background-color:green; color: white;";   
// });

// myButton.addEventListener("click",()=>{
//     hdgElNode.classList.toggle("hdg-2");
// });

// case-2: 





/**
 * ---------------- removeEventListener() ---------------------
 */

    // myButton.addEventListener("click",toggleClass);

    // function toggleClass() {
    //     hdgElNode.classList.toggle("hdg-2");
    // }

    // myButton.removeEventListener("click",toggleClass);
















