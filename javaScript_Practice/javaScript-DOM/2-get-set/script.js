
/**
 * property: innerHTML
 */
// console.log(document.getElementById("main-hdr").innerHTML);


/**
 * property: innerText
 */
// console.log(document.getElementById("main-hdr").innerText);



// another way to use :
// let getHTML = document.getElementById("main-sec").innerHTML;
// console.log(getHTML);



/**
 * Built-in method
 */
// console.log(document.getElementById("main-sec").getAttribute("class"));


/**
 * Built-in  method
 */
// console.log(document.getElementById("main-sec").getAttributeNode("class"));




/**
 * ab hum set karyn gay values DOM may:
 * 
 * */ 

// let changeContent =
//   document.getElementById("main-hdr").innerHTML = "<h1>This changed!</h1>";
  
//This only for console window:
//   console.log(changeContent);



/**
 * Built-in method: setAttribute()
 */

// document.getElementById("main-hdr").setAttribute("class","border-top");


/**
 * property: attributes
 * hum kisi b attribute ki value , property k zariyey b karsakhtay hayn.
 */
// console.log(document.getElementById("main-hdr").attributes);

// console.log(document.getElementById("main-hdr").attributes[1].value = "hdr2");



/**
 * Built-in method: removeAttribute() 
 */

// console.log(document.getElementById("main-hdr").removeAttribute("class")); 


