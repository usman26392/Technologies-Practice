/**
 * overview
 */

/**
 * event binding with javaScript
 */

let hdgElNode = document.querySelector(".hdg-1");
let myButton = document.querySelector(".btn");

function changeStyle() {
    hdgElNode.style.cssText = "font-size:60px; background-color: red";
    // hdgElNode.classList.toggle("hdg-2");
}

// more manageable
myButton.onclick = changeStyle;

// or
// myButton.onclick = function changeStyle() {
//     hdgElNode.style.cssText = "font-size:60px; background-color: red";
//     // hdgElNode.classList.toggle("hdg-2");
// }

// or
// myButton.onclick = function() {
//     hdgElNode.style.cssText = "font-size:60px; background-color: red";
//     // hdgElNode.classList.toggle("hdg-2");
// }




