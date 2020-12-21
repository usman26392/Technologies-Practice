/**
 *  InsertBefore() method:
 *  Syntax:
 *  myParentnode.insertBefore(myNewNode, myRefnode);
 */

 

/**
 * objective: hum nay yey karna hay k angular li waly say
 *  pahlay aik li insert karna hay create kar k.
 */ 
 
//  access parent node
 let myParentnode = document.querySelector("#myul");
 
//  create a <li></li>
 let newNode = document.createElement("li");
 newNode.textContent = "Vue js";

//  my reference node
let myRefnode = document.querySelector("#myang");
myParentnode.insertBefore(newNode, myRefnode);