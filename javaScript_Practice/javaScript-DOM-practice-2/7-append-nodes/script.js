/**
 * is may hum append karyn gay 
 * element Node or Node
 */

let myNewEl = document.createElement("li");
let myNewTxt = document.createTextNode("New updates");
myNewEl.appendChild(myNewTxt);

// other way:append textNode in element Node.
// myNewEl.textContent = "New updates";    

let myEl = document.querySelector(".list-1");
myEl.appendChild(myNewEl);





/**
 *  normalize() method
 */


// let txt_1 = document.createTextNode("This");
// let txt_2 = document.createTextNode("is");
// let txt_3 = document.createTextNode("paragraph");

// let target = document.querySelector(".list-1");

// target.appendChild(txt_1);
// target.appendChild(txt_2);
// target.appendChild(txt_3);

// console.log(target.normalize());


