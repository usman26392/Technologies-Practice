/**
 * ----------- The jQuery Object
 */


// $(function() {
//     // let elements = $("h1");
//     let elements = jQuery("h1");
//     console.log(elements);
// });


// Selecting all <h1> elements with jQuery Object
// $(function() {
//     let headings = $("h1");
//     console.log(headings);
// });



// Selecting only the first <h1> element on the page (in a jQuery object)
// $(function() {
//     let headings = $("h1");
//     let firstHeading = headings.eq(0);
//     console.log(firstHeading);
// });



// Selecting only the first <h1> element with Native DOM API
// $(function() {
//     let headings = $("h1")[0];
//     headings.setAttribute("arialebelledBy","Heading");
// });


// Selecting only the first <h1> element with Native DOM API
// $(function() {
//     let headings = $("h1").get(0);
//     headings.setAttribute("role","main heading of the page");
// });




// object comparison

// with jQuery Object

// $(function() {
//     let element_1 = $(".hdg-1");
//     let element_2 = $(".hdg-1");
//     console.log(element_1 === element_2);
// });


// with Native DOM object

// $(function() {
//     let element_1 = $(".hdg-1")[0];
//     let element_2 = $(".hdg-1")[0];
//     console.log(element_1 === element_2);
// });



// with pure checking

// let el_1 = document.querySelector(".hdg-1");
// let el_2 = document.querySelector(".hdg-1");
// console.log(el_1 === el_2);