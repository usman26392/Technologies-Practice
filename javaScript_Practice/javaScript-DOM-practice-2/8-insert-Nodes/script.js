









/**
 * cloneNode() method.
 */

//  jis ka clone banay ga. us ko select kiya
let myEl = document.querySelector(".hdg-div");
// us node ko clone kiya.
 let cloneNode = myEl.cloneNode(true);
 
// ab jis may append karna hay cloneNode ko, us ko select kiya 
let myEl_2 = document.querySelector(".para-div");

// append karnay ka tariqa
 myEl_2.appendChild(cloneNode);