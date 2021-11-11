/**
 * ----------- event propagation -----------------------
 */

// example of bubbling phase:
// let div1 = document.querySelector("#one");
// div1.addEventListener("click",()=>{console.log(`div1 clicked`)}, false);

// let div2 = document.querySelector("#two");
// div2.addEventListener("click",()=>{console.log(`div2 clicked`)}, false);

// let div3 = document.querySelector("#three");
// div3.addEventListener("click",()=>{console.log(`div3 clicked`)}, false);

// let div4 = document.querySelector("#four");
// div4.addEventListener("click",()=>{console.log(`div4 clicked`)}, false);



// example of Capture phase:
// let div1 = document.querySelector("#one");
// div1.addEventListener("click",()=>{console.log(`div1 clicked`)}, true);

// let div2 = document.querySelector("#two");
// div2.addEventListener("click",()=>{console.log(`div2 clicked`)}, true);

// let div3 = document.querySelector("#three");
// div3.addEventListener("click",()=>{console.log(`div3 clicked`)}, true);

// let div4 = document.querySelector("#four");
// div4.addEventListener("click",()=>{console.log(`div4 clicked`)}, true);


// example of Target phase:
