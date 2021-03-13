/**
 * insertAdjacentElement()
 * insertAdjacentHTML()
 * insertAdjacentText()
 */


 /**
  * jo paylay say mojud hay DOM may element Node , hum us ko 
  * insert karnay jary hayn
  */

  // let movElNode = document.querySelector(".li-1");

  // let myliElNode = document.querySelector(".li2-1");

  // myliElNode.insertAdjacentElement("beforebegin",movElNode);
  // myliElNode.insertAdjacentElement("afterend",movElNode);
// myliElNode.insertAdjacentElement("afterbegin",movElNode);
// myliElNode.insertAdjacentElement("beforeend",movElNode);



/**
 * ab hum aik element Node ko develop karyn gay, phir usy insert 
 * karyn gay. 
 */

//  let myli = document.createElement("li");
//  let myliTxt = document.createTextNode("new updates");
//  myli.appendChild(myliTxt);


//  let myliElNode = document.querySelector(".li2-1");
//  myliElNode.insertAdjacentElement("afterend", myli);





//check:
// zarori nai k parent-child ka relation ho.
// kisi b element ki position par element Node insert hoja hay ga.
// let movElNode = document.querySelector(".hdg-1");
// let myElNode = document.querySelector(".list-2");
// myElNode.insertAdjacentElement("beforebegin",movElNode);



/* ------------------- insertAdjacentHTML() ---------------- */
// is may element Node jo hum develop karyn gay uski
// copy banti hay, matlab yey hay k hum usy aik say zayeda
// element Nodes ki position par set karsakhtay hayn.

// let myli = "<li>This is a li </li>";
// let myliElNode = document.querySelector(".li2-1");
// myliElNode.insertAdjacentHTML("afterend",myli);




/**
 * aik say zayeda element Nodes ki positions par check kiya hay
 * insert kar k 'myli' ko.
 */ 

// let myli = "<li>This is a li </li>";
// // select two element Nodes
// let myliElNode1 = document.querySelector(".li-1");
// let myliElNode2 = document.querySelector(".li2-1");


// myliElNode1.insertAdjacentHTML("afterend", myli);
// myliElNode2.insertAdjacentHTML("afterend",myli);



/**
 * ------------------ clone element Node --------------
 */

// let elNodeC = document.querySelector("#p1");
// let elDuplicate = elNodeC.cloneNode(true); 

// let elNode = document.querySelector(".list-1");

// elNode.insertAdjacentElement("afterend",elDuplicate);



// is may hum nay aik say zayeda elements par insert kiya hay #p1 ko.
// loop k zariyey.

let elNodeC = document.querySelector("#p1");
let elNode = document.querySelectorAll(".list");

// with forEach loop
// elNode.forEach(my=> {
//   let elDuplicate = elNodeC.cloneNode(true); 
//   my.insertAdjacentElement("afterend",elDuplicate);
// });


//  for of loop
for (const  myEl of elNode) {
  let elDuplicate = elNodeC.cloneNode(true); 
  myEl.insertAdjacentElement("afterend",elDuplicate);
}





