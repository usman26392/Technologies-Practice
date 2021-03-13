



/**
 * ---------------- removeChild ---------------------------
 */

// let elPNode = document.querySelector(".list-1");
// let elCNode = document.querySelector(".li-1");
// elPNode.removeChild(elCNode);


// example-2
// let elPNode = document.querySelector(".list-1");
// elPNode.removeChild(elPNode.children[1]);


/**
 * ----------- replace Node ---------------------
 * parentNode.replaceChild(newChild,oldChild)
 */

// let pElNode = document.querySelector(".list-1");
// let oldElNodeChild = document.querySelector(".li-1");
// let newElNodeChild = document.querySelector(".li2-1")
// pElNode.replaceChild(newElNodeChild,oldElNodeChild);


// with develop element Node

let pElNode = document.querySelector(".list-1");
let myElNode = document.createElement("li");
myElNode.textContent = "my li";
pElNode.replaceChild(myElNode,pElNode.children[0]);




