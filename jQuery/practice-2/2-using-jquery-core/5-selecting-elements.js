/**
 * ------ selecting elements -----------------
 */

  
/**
 * selecting elements by unique ID
 */

// $(document).ready(function() {
//     // $("#p1").css("color","red");
//     let element = $("#p1");
//     console.log(element);
// });


/**
 * ------- by class Name
 */

//  $(document).ready(function() {
//     let element = $(".list");
//     console.log(element);
//     element.css("color","red");
// });

/**
 * ------- by attribute
 */

// $(document).ready(function(){
//     let intp = $("input[type='text']");
//     console.log(intp);
// });


/**
 * ---------- by Compound CSS selector
 */

// $(document).ready(function() {
//     let element = $(".main-cont .box p.box-para");
//     console.log(element);
// });

/**
 * ------- Selecting Elements with a Comma-separated List of Selectors -----------
 */

//  $(document).ready(function() {
//      let elements = $(".hdg-1 , .empty-anchor");
//      console.log(elements);
//  });


/**
 * --------- by jquery pseudo-selectors ------------------------------
 */

// select odd li
  // $(document).ready(function() {
  //     let element = $(".list-1 li:even");
  //     console.log(element);
  // });


// need even li

//   $(document).ready(function() {
//     let element = $(".list-1 li:odd");
//     console.log(element);
// });



// select first child element li

// $(document).ready(function() {
//     let element = $(".list-1 li:first");
//     console.log(element);
// });


// $(function() {
//   let element = $(".list-1 li:last");
//   console.log(element);
// });


// All select except the first three li.
// :gt(2) means,  greater than 2.

// $(document).ready(function() {
//   let elements = $(".list-1 li:gt(2)");
//   console.log(elements);
// });


/**
 * --------- choosing selectors ------------------------
 */

// saving selector
  // $(document).ready(function(){
  //   let element = $(".hdg-1");
  //   element.css("color","red");
  //   element.attr("title","This is main heading!");
  // });


  
  

// Refining & Filtering selections

// has()

// $(document).ready(function() {
//   // let element = $(".box").has("p");
//   let element = $(".box").has(".box-para");
//   // console.log(element);
//   element.css({
//     backgroundColor: "red"
//   });
// });


// is()

// $(function() {
//   let check =  $("div").is(".box");
//   if(check) {
//     $("div.box").css("backgroundColor", "green");
//   }
// });


// not()
// $(document).ready(function() {
//   let element = $("h1").not(".hdg-1");
//   element.css("color", "red");
//   console.log(element);
// });




// filter()
// $(document).ready(function() {
//   // let elements = $(".list li").filter(".items");
//   let elements = $(".list li").filter(".items");
//   elements.css("color","red");
//   console.log(elements);
// });



// first()

// $(document).ready(function() {
//   let elements = $(".list-2 li").first();
//   elements.css("color","red");
//   console.log(elements);
// });


//  last()
// $(function() {
//   let element = $(".list-2 li").last();
//   element.css("color","red");
//   console.log(element);
// });




// eq()

// $(document).ready(function() {
//   let element = $(".list-1 li").eq(2);
//   element.css("color","red");
//   console.log(element);
// });



// Selecting Form Elements
$(function() {

  let check = $( "form :input" );
  check.css("borderColor", "red");
  console.log(check);
});






