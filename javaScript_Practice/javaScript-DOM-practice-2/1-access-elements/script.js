/**
 * Element access methods
 */

/**
 * check document
 */
// console.dir(document);

/**
 * -------------  access element  By id -------------------
*/ 

//  let myElement = document.getElementById("p1");
//  console.log(myElement);
 

/**
*  ----------------access element by tag name: -------------------

* ye method , returns karta hay HTML collection
* matlab ye hay k agar may "p" element layta hun
* document may jitnay b "p" elements hun gay
* un ka collection bana kar return karday ga. 
*/

// let myelement = document.getElementsByTagName("ul");
// // return HTML Collection of ul.
// console.log(myelement);





/**
 * HTML Collection may hum specific b select karsaktay hayn kisi b element ko.
 */
// let myelement = document.getElementsByTagName("ul")[0];
// console.log(myelement);

/**
 * or
 */

// let myelement = document.getElementsByTagName("ul");
// console.log(myelement[0]);







/** aik question dimagh may ata hay k hum selection elements kiyun karray hayn
 * , jawab yey hay k ta k elements ki manipulation karsakayn:
 * is example say samajh a jahay ga.
 */

// let myelement = document.getElementsByTagName("ul");
// for(let i = 0; i < myelement.length; i++) {
//     myelement[i].style.color = "green";
// }






/**
 * asterik * element means that all element in the document.
 */

//  let allElements = document.getElementsByTagName("*");
//  console.log(allElements);


/**
 *  -----------------access element by class name -----------------
 */


//  let element = document.getElementsByClassName("list");
//  console.log(element);


//example 
// let a = document.getElementsByClassName("list");
// for(i =0; i < a.length; i++) {
//     a[i].style.backgroundColor = "red";
// }



/**
 * hum aik say zayeda b class use karsakhtay hayn.
 */

//  let element = document.getElementsByClassName("list list-2");
//  console.log(element);





/**
 *  -------------------------------------- querySelector() ---------------
 * yey method yey karta hay k, agar jesay "p" element select kiya
 * hay toh , poray HTML document may jo b first "p" element ara
 * hoga, us ko select karay ga bus, or returns kary ga.
 */


//  let elements = document.querySelectorAll(".list-1 li");
//  console.log(elements);





 // or  
//   let element = document.querySelector(".list");

//   or
// let element = document.querySelector(".list li");




/**
 * -------------------------- querySelectorAll() -------------------------
 * 
 * yey method yey karta hay k, agar jesay "p" element select kiya
 * hay toh , poray HTML document may jahan b "p" element ara
 * hoga, un sub ko select karay ga, or returns kary ga. 
 * or agar humay sub ki koi maniplution karni hay toh
 * phirh loop k zariyey karni ho gi. kiyon k yey function return 
 * NodeList karta hay array ki form may.
 */

//  let elements = document.querySelectorAll("p");
// // let elements = document.querySelectorAll(".list");
// // let elements = document.querySelectorAll(".list-2");
//  console.log(elements);

// check manipulation 
// elements.forEach((els)=> {
//     els.style.color = "red";
// });




/**
 * length property:
 * yahan par length property , elements ki tataad bataei gi
 * k HTML document may kitnay elements hayn.
 * jin elements k liyey poucha jae ga.
 */


//  let elementLength = document.querySelectorAll(".list");
//  console.log("Length is " + elementLength.length);
//  console.log(`length is ${elementLength.length}`);




/**
 * -------- difference between static collection and live collection-----------------
 * 
 */

let node1 = document.getElementsByClassName("red-text");
console.log(node1);

let node2 = document.querySelector(".red-text");
console.log(node2);


document.querySelector(".list li:nth-child(3)").className = "red-text";

console.log(node1);
console.log(node2);


