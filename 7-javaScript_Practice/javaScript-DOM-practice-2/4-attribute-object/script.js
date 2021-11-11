/**
 * attribute object
 */

 let myElement = document.querySelector("#hdg-1");

//  console.log(myElement.attributes);
//  console.log(myElement.attributes[0]);
//  console.log(myElement.attributes[1]);
//  console.log(myElement.attributes[0].nodeName);
//  console.log(myElement.attributes[0].nodeValue);


 /**
  * "nodeName" ki jaga ab "name" use hota hay. or
  * "nodeValue" ki jaga ab "value" use hota hay.
  */
//  console.log(myElement.attributes[0].name);
//  console.log(myElement.attributes[0].value);


// or hum set b karsakhtay hayn
myElement.attributes[0].value = "abc";