/**
 * Setting up Event Responses on DOM Elements
 */


// click() method
//   $(function() {
//       $("h1").click(function() {
//           console.log("you clicked h1 heading");
//       });
//   });



// on() method
//   $(function() {
//       $("h1").on("click",function() {
//           console.log("you clicked h1 heading!");
//       });
//   });


/**
 * Extending Events to New Page Elements
 */

// $(function() {
//     $("button.alert").on("click", function() {
//         console.log( "A button with the alert class was clicked!" );
//     });

//     // This will not work.
//     $("<button class='alert'>Alert</button>").appendTo(document.body);
    
// });


/**
 * ------ setting up multiple event responses
 */
  
  // Multiple events, same handler
//   $(function() {
//       $(".hdg-1").on(
//           "click mouseover",
//           function() {
//               console.log("you clicked or hover");
//           }
//       );
//   });






  // Binding multiple events with different handlers
//   $(function() {
//       $(".hdg-1").on({
//           "click": function() { console.log("clicked!") },
//           "mouseover": function() { console.log("hovered!"); }
//       });
//   });






/**
 * ---- setting up events to run only once
 */

//   $(function() {
//       $(".hdg-1").one("click",function() {
//           console.log("you just clicked this for the first time!");
//       });
//   });







