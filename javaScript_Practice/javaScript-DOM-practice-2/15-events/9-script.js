

/**
 *  Event delegation is a technique in JavaScript where you use a single event listener to manage
 *  all instances of a particular event type for a group of elements. Instead of attaching event listeners
 *  to each individual element, you attach a single event listener to a common ancestor of those elements.
 *  This is particularly useful when you have a large number of elements that share a common parent,
 *  and you want to handle events efficiently.
 * 
 */



// Common ancestor (parent) element
let parentList = document.querySelector(".parentList");

// Event listener on the parent element
parentList.addEventListener("click", function (e) {
  e.stopPropagation();
  // Check if the clicked element is an 'li' element
  if (e.target.matches("li")) {
    // Perform the desired action for the clicked 'li' element
    e.target.style.backgroundColor = "dodgerblue";
  }
});


