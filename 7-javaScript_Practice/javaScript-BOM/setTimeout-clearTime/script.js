/**
 * ------- setTimeout and clearTimeout 
 */

    // window.setTimeout(()=>{
    //     let hdg = document.querySelector(".hdg-1");
    //     hdg.classList.add("hdg-2");
    // },2000);



// example of clearTimeout()

let timeOutID = window.setTimeout(()=>{
    let hdg = document.querySelector(".hdg-1");
    hdg.classList.add("hdg-2");
},2000);


let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    clearTimeout(timeOutID);
});