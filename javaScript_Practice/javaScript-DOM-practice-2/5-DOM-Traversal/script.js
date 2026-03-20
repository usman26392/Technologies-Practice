/**
 * DOM Traversal Properties:
 * in  properties may b hum DOM k objects(elements) ki
 * selection ya finding , relationship k sath karyn gay.
 * selection ka maqsad yey hay k object ko select kar k
 * us par koi javaScript manipulation karna.
 */


/**
 * parentNode or parentElement properties.
 * yey properties returns karti hayn parent.
 * matlab yey hay k agar hum kisi element ko 
 * select kar k daykna chahatay hayn k is element ka
 * parent kon hay toh in properties k zariyey karsakhtay hayn.
 * in properties k zariye hum:  kisi child element ko
 * select kar k us k parent element par koi 
 * b javaScript manipulation karsakhtay hayn.
 * 
 */

//  let myElement = document.querySelector("html");
//  console.log(myElement.parentNode);
 // parentElement , wesy toh dono same hayn magar
 // is may agar parent element koi element na
 // ho toh yey return  "null" kardayta hay.
//  console.log(myElement.parentElement);


let element = document.querySelector(".list-1");

// console.log(element.parentNode);
// console.log(element.parentElement);

// console.log(element.childNodes);
// console.log(element.children);

console.log(element.firstChild);
// console.log(element.firstElementChild);

// console.log(element.lastChild);
// console.log(element.lastElementChild);

// console.log(element.previousSibling);
// console.log(element.previousElementSibling);


// console.log(element.nextSibling);
// console.log(element.nextElementSibling);




/**
 *  childNodes and children
 */

//  let myElement = document.querySelector("ul");
//  console.log(myElement.childNodes);
//  console.log(myElement.children);


/**
 *   firstChild and firstElementChild:
 */
//  let myElement = document.querySelector("ul");
//  console.log(myElement.firstChild);
//  console.log(myElement.firstElementChild);


 /**
  *   lastChild and lastElementChild  
  */

//   let myElement = document.querySelector("ul");
//   console.log(myElement.lastChild);
//   console.log(myElement.lastElementChild);


/**
 *  previousSibling and previousElementSiblings
 */

//  let element = document.querySelector(".second-item");
//  console.log(element.previousSibling);
//  console.log(element.previousElementSibling);


/**
 *  nextSibling and nextElementSibling
 */

//  let element = document.querySelector(".second-item");
//  console.log(element.nextSibling);
//  console.log(element.nextElementSibling);


 

