/**
 * ---------- Text Events list ------------
 */

 let inputField = document.querySelector(".input-txt");

 inputField.addEventListener("input",(e)=>{
    console.log(e.type);
    console.log(e.data);
});