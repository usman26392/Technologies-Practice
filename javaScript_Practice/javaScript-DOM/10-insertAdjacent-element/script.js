

/**
 *  select kiya hay element, wo jis k sath dosra element
 *  lagana hay.
 */
let selectElement = document.querySelector(".main-container");

/**
 * yahan par create kiya hay element.
 */
let newElement = "<h1>This is a heading!</h1>";


/**
 * jo select kiya tha element , ab us ki kis position par
 * set karna hay , ye is method k zariye hoga.
 */
selectElement.insertAdjacentHTML("beforebegin",newElement);

selectElement.insertAdjacentHTML("afterend",newElement);