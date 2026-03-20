

// Storing and retrieving data related to an element.
 
// example-1

// $(function() {

//     // Attach data to div element
//     $(".mydiv").data("greeting", "Hello World");
    
//     // Get data attached to div element
//     alert($(".mydiv").data("greeting"));
// });




// example-2
$(function() {

    // Attach data to div element
    $( ".mydiv" ).data( "test", { 
        Price: 17,
        Name: "pizza!" 
    } );
     
    // set data attached to div element
    $( ".mydiv span:first" ).text( $( ".mydiv" ).data( "test" ).Price );
    $( ".mydiv span:last" ).text( $( ".mydiv" ).data( "test" ).Name );
});

