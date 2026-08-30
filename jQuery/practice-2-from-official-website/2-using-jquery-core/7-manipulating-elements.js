/**
 * ------ manipulating elements
 */



/**
 * ---------- getting and setting information about elements:
*/ 

// setting html with text
// $(document).ready(function() {
//     $(".box-para").html("New <strong>Bold</strong> paragraph!");
// });


// setting text
// $(document).ready(function() {
//     $(".box-para").text("New Bold paragraph!");
// });



// getting 

// position()
// offset()

// $(function() {
//   // let elementPosition = $(".hdg-1").position();
//   let elementPosition = $(".hdg-1").offset();
//   console.log(elementPosition);
// });



// getting text
// $(document).ready(function() {
//     let txt =  $(".box-para").text();
//     console.log(txt);
// });


/**
 * ------------- Moving,cloning,and removing elements
 */

// moving

// $(document).ready(function() {
//     // let li = $(".list-1 li:first").appendTo(".list-2");
//     // let li = $(".list-1 li:first").insertBefore(".hdg-1");
//     // let li = $(".list-1 li:first").insertAfter(".hdg-1");
//     console.log(li);
// });


// moving element: another approach
// $(document).ready(function() {
//     let li = $(".list-2").append( $(".list-1 li:first") );
//     console.log(li);
// });


// Cloning elements

// $(document).ready(function() {
//     let li = $(".list-1 li:first").clone(false).appendTo(".list-2");
//     console.log(li);
// });


// Removing elements

// $(function() {
  
//   // let element =  $(".hdg-1").remove();
//   let element =  $(".hdg-1").detach(); // reserve with data and events
//   console.log(element);  
// });



// developing new Elements:

// $(document).ready(function() {
//     // let element = $("<li>This is new li from jQuery</li>");
//     let element = $("<li class = \" new-item \"> This new li from jQuery</li> ");
//     element.appendTo(".list");
//     console.log(element);
// });


// with attribute object:
// $(document).ready(function() {
//     let newAnchr = $( "<a/>", {
//         html: "This is a <strong>new</strong> link",
//         "class": "new",
//         href: "foo.html"
//     });

//     newAnchr.appendTo(".li-1");
// });



// develop elements with loop:

// $(document).ready(function() {
//     var myItems = [];
//     var myList = $( ".list-2 ");
 
//     for ( var i = 0; i < 100; i++ ) {
//         myItems.push( "<li>item " + i + "</li>" );
//     }
 
//     myList.append( myItems.join( "" ) );
    
// });


/**
 * ---------- Manipulating Attribute -----------------------
 */
  
  // Manipulating a single attribute.
  // $(function() {
  //   $("button").attr("role","Button");
  // });


// Manipulating multiple attributes.

  // $(function() {
  //     $("button").attr({
  //         role: "Button",
  //         "class": "Blue-btn"
  //     });
  // });



// Using a function to determine an attribute's new value.
