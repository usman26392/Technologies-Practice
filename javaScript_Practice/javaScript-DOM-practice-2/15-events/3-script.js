/**
 * ----------------------- event propagation -----------------------
 */

// example of ------------------------------ bubbling phase is default ------------------------ 
// event will move bottom to top in DOM. 
// or event will move/propagate child to parent elements in DOM. 
// false argument is default
// for demo: click on child element i.e child four

// document.querySelector("body").addEventListener("click", function() {console.log('body clicked')}, false);

// let div1 = document.querySelector("#one");
// div1.addEventListener("click", function() {console.log(`div1 clicked`)}, false);

// let div2 = document.querySelector("#two");
// div2.addEventListener("click", function() {console.log(`div2 clicked`)}, false);

// let div3 = document.querySelector("#three");
// div3.addEventListener("click", function() {console.log(`div3 clicked`)}, false);

// let div4 = document.querySelector("#four");
// div4.addEventListener("click", function() {console.log(`div4 clicked`)}, false);





// example of ----------------------------- Capture phase: ----------------------------------
// event will move from top to bottom in DOM.
// or event will move parent to child elements in DOM.
// for demo: click on child element.

// document.querySelector("body").addEventListener("click", function() {
//     console.log('body click')
// }, true );

// let div1 = document.querySelector("#one");
// div1.addEventListener("click", function() {
//     console.log(`div1 clicked`)
// }, true);


// let div2 = document.querySelector("#two");
// div2.addEventListener("click",function() {
//     console.log(`div2 clicked`)
// }, true);

// let div3 = document.querySelector("#three");
// div3.addEventListener("click",function() {
//     console.log(`div3 clicked`)
// }, true);

// let div4 = document.querySelector("#four");
// div4.addEventListener("click",function() {
//     console.log(`div4 clicked`)
// }, true);




// ------------------------ stopPropagation() for bubbling phase --------------------------
// i am using on fourth element
// for demo: click on fourth element


document.querySelector("body").addEventListener("click", function() {console.log('body clicked')}, false);

let div1 = document.querySelector("#one");
div1.addEventListener("click", function() {console.log(`div1 clicked`)}, false);

let div2 = document.querySelector("#two");
div2.addEventListener("click", function() {console.log(`div2 clicked`)}, false);

let div3 = document.querySelector("#three");
div3.addEventListener("click", function() {console.log(`div3 clicked`)}, false);

let div4 = document.querySelector("#four");
div4.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log(`div4 clicked`)
}, false);




// example of Target phase:
// event ka wo phase hoga jis element par hum click karyn gay bus.


