

let selectElment = document.querySelector(".list-1").children[0];
let copyElement = selectElment.cloneNode(true);
/**
 * true laynay say pora element copy hota hay tag samayt.
 */

document.querySelector(".list-2").appendChild(copyElement);