/**
 * insertAdjacentElement()
 * insertAdjacentHTML()
 * insertAdjacentText()
 */


 /**
  * jo paylay say mojud hay DOM may element Node , hum us ko 
  * insert karnay jary hayn
  */

//   let movElNode = document.querySelector(".li-1");

//   let myParentElNode = document.querySelector(".li2-1");

//   myParentElNode.insertAdjacentElement("beforebegin",movElNode);
// myParentElNode.insertAdjacentElement("afterend",movElNode);

// myParentElNode.insertAdjacentElement("afterbegin",movElNode);
// myParentElNode.insertAdjacentElement("beforeend",movElNode);



//check:
// zarori nai k parent-child ka relation ho.
// kisi b element ki position par element Node insert hoja hay ga.
let movElNode = document.querySelector(".hdg-1");
let myElNode = document.querySelector(".list-2");
myElNode.insertAdjacentElement("beforebegin",movElNode);

