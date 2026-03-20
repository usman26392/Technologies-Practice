

/**
 * -------------- className property ------------------
 */

// let hdgElNode = document.querySelector(".hdg-1");
// hdgElNode.className = "hdg-2";





/**
 * -------------- classList property ----------------------
 */

// let hdgElNode = document.querySelector(".hdg-1");
// console.log(hdgElNode.classList);



/**
 * -------- classList properties and Methods ---------------------
 */

let hdgElNode = document.querySelector(".hdg-1");

// single class add
// hdgElNode.classList.add("heading-1");

// add class more than one.
// hdgElNode.classList.add("heading-1","heading-2");


// remove class
// hdgElNode.classList.remove("hdg-1");



// replace class with another
// hdgElNode.classList.replace("hdg-1","hdg-2");


// toggle class
// hdgElNode.classList.toggle("hdg-1");
//again toggle
// hdgElNode.classList.toggle("hdg-1");

// toggle example with click event.
let btn = document.querySelector("button");

btn.addEventListener("click",()=> {
    hdgElNode.classList.toggle("hdg-2");
});











