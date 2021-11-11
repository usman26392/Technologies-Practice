/**
 * ---------- Working with selections ------------
 */

// setter 

//   $(document).ready(function() {
//       // The .html() method sets all the h1 elements' html to be "hello world":
//       $("h1").html("<strong>Hello World!</strong>");
//     //   $("h1").text("Hello World!");
//   });


// getter

//   $(document).ready(function() {
//        let cont =   $("h1").html();
//       // with exception case
//     //    let cont =   $("h1").text(); 
//      console.log(cont);
//   });



/**
 * ----------------------------- Method Chaining --------------
 *  */ 

// $(document).ready(function() {
        // this will not work.
//     // $("h1").html().addClass("clr-blue");

//     let cont =  $("h1").addClass("clr-blue").html();
//     console.log(cont);
// });


// example-2

// $(document).ready(function() {
//     $( "body" ).find( "h2" ).eq( 2 ).text( "new text for the third h2!" );
// });



// code readability to break the chain over several lines:

// $(function() {
//     let check = $( "body" )
//     .find( "h2" )
//     .eq( 2 )
//     .text( "new text for the third h2!" )
//     console.log(check);
// });






// end() Method

// $(function() {
//     let element =  $( ".para-sp" )
//     .find( "span" )
//     .css( "border", "2px solid green" ) // for span 
//     .end()
//     .css( "border", "2px solid red" ) // for paragraph
//     console.log(element);
// });


// example 2
// $(function() {
//     let check = $( "body" )
//     .find( "h2" )
//     .eq( 2 )
//     .text( "new text for the third h2!" )
//     .end()
//     .text( "new text for the third h2!" )

//     console.log(check);
// });