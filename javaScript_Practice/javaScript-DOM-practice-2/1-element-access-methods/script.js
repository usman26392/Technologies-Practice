/**
 * Element access methods
 */

/**
 * check document
 */
// console.dir(document);


/**
 * access element  By id
*/ 

//  let myElement = document.getElementById("p1");
//  console.log(myElement);
 

/**
* access element by tag name:
* ye method , returns karta hay HTML collection
* matlab ye hay k agar may "p" element layta hun
* document may jitnay b "p" elements hun gay
* un ka collection bana kar return karday ga. 
*/

// let myelement = document.getElementsByTagName("ul");
// // return HTML Collection of ul.
// console.log(myelement);


/**
 * asterik * element means that all element in the document.
 */

//  let allElements = document.getElementsByTagName("*");
//  console.log(allElements);


/**
 * access element by class name
 */

//  let element = document.getElementsByClassName("list-1");
//  console.log(element);


/**
 * hum aik say zayeda b class use karsakhtay hayn.
 */
 let element = document.getElementsByClassName("list list-2");
 console.log(element);





/**
 * querySelector()
 * yey method yey karta hay k, agar jesay "p" element select kiya
 * hay toh , poray HTML document may jo b first "p" element ara
 * hoga, us ko select karay ga bus, or returns kary ga.
 */

//  let elements = document.querySelector("p");
// or  let elements = document.querySelector(".list");
//  console.log(elements);




/**
 * querySelectorAll()
 * yey method yey karta hay k, agar jesay "p" element select kiya
 * hay toh , poray HTML document may jahan b "p" element ara
 * hoga, un sub ko select karay ga, or returns kary ga. 
 */

//  let elements = document.querySelectorAll("p");
// let elements = document.querySelectorAll(".list");
//  console.log(elements);



/**
 * more specific selection of elements
 */

//  let parentElement = document.querySelector(".list-2");
//  let childElement = parentElement.getElementsByTagName("li");
//  console.log(childElement);


/**
 * more more specific selection of element.
 * with the help of HTML Collection index number.
 */
// let parentElement = document.querySelector(".list-2");
// let childElement = parentElement.getElementsByTagName("li")[1];
// console.log(childElement);


/**
 * length property:
 * yahan par length property , elements ki tataad bataei gi
 * k HTML document may kitnay elements hayn.
 * jin elements k liyey poucha jae ga.
 */


//  let elementLength = document.querySelectorAll(".list");
//  console.log("Length is " + elementLength.length);
//  console.log(`length is ${elementLength.length}`);

