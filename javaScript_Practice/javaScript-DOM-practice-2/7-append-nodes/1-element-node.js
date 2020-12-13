/**
 * Append Element Node:
 */


/**
 *  hum kisi b element ko , kisi dosray element ka
 *  child bana sakhay hayn.
 *  is may hum nay yey kiya hay k jo pahlay say that element
 *  us ko dosri jaga append kiya hay bus.
 */
//  let myh1 = document.querySelector(".hdg-div h1");
//  let mySec = document.querySelector(".para-div");

//  mySec.appendChild(myh1);
 


 /**
  * ab hum pahlay aik Element Node create karyn gay,
  * or us ka content , phirh us ko append karayn gay.
  */

  let newTag = document.createElement("p");
  let newTxt = document.createTextNode("This paragraph comes from javaScript");
   newTag.appendChild(newTxt);
   
// only for checking : k kiya hay is may ab
   console.log(newTag);

  let mySec = document.querySelector(".para-div");
  mySec.appendChild(newTag);

  