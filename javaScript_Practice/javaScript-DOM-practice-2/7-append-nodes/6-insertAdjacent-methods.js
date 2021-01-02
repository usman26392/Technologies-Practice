/**
 * insertAdjacent methods:
 * insertAdjacentElement()
 * insertAdjacentHTML()
 * insertAdjacentText()
 */




/**
 * insertAdjacentElement("position",ourElement)
 */

// let myEl = document.createElement("li");
// // text for li
// myEl.textContent = "three js";

// let myTargetEl = document.querySelector("#myang");
// myTargetEl.insertAdjacentElement("beforebegin",myEl);



/**
 * insertAdjacentHTML("position",HTML element)
 */
let myTargetEl = document.querySelector("#myang");
let myElement = "<li>GSAP-3</li>"
myTargetEl.insertAdjacentHTML("beforebegin",myElement);
myTargetEl.insertAdjacentHTML("afterend",myElement);

