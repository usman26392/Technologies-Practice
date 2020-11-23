

/**
 * way 1:
 */
// document.querySelector(".hdr").onclick = changeColor;

// function changeColor() {
//     this.style.background = "black";    
// }


/**
 * way 2:
 */

// document.querySelector(".hdr").addEventListener("click",changeColor); 

// function changeColor() {
//     this.style.background = "black";    
// }



/**
 * way 3:
 */
document.querySelector(".hdr").addEventListener("click",function(){
    this.style.background = "yellowgreen";
});

