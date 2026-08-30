/**
 * --------- setInterval() , clearInterval()
 */

// window.setInterval(()=>{
//     let myli = document.createElement("li");
//     myli.textContent = "this is new li";
//     myli.classList.add("hdg-2");
//     let myUl = document.querySelector(".list-1");
//     myUl.appendChild(myli);
// },2000);



// example 2

// (()=>{
//     let b;
//     b = 0;
//     window.setInterval(()=>{
//         let myUl = document.querySelector(".list-1");
//         if(b <= myUl.children.length-1) {
//             myUl.children[b].classList.add("hdg-2");
//             if(b > 0 ) {
//                 myUl.children[b-1].classList.remove("hdg-2");        
//             }
//             b++;      
//         }
//         else {
//             b = 0;
//             myUl.lastElementChild.classList.remove("hdg-2");
//         }
//     },2000);

// })();




/**
 * ----------- clearInterval()
 */

