/**
 * 
 */


 let txt_1 = document.createTextNode("This");
 let txt_2 = document.createTextNode("is");
 let txt_3 = document.createTextNode("paragraph");

 let target = document.querySelector(".para-div");

 target.appendChild(txt_1);
 target.appendChild(txt_2);
 target.appendChild(txt_3);

 console.log(target.normalize());
