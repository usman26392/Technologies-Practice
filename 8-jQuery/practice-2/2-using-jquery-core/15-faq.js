

/**
 * How do I select an item using class or ID?
 */

// $(function() {
//     $(".hdg-1");
//     $("#h6");
// });




/**
 * How do I select elements when I already have a DOM element?
 */

// $(function() {
//     let myDomElement = document.getElementById("h6"); // A plain DOM element.
//     $(myDomElement).addClass("hdg-1");
// });


/**
 * How do I test whether an element has a particular class?
 */

// $(function() {
//     $("h1").on("click", function() {
//         if($(this).hasClass("hdg-1")) {
//             $(this).removeClass("hdg-1");
//         }
//     });
// });


// with is()

// $(function() {

//     // if($("h1").is(".hdg-12")) {
//     //     $("h1").css("color","red");
//     // }
    
//     $("h1").on("click", function() {
//         if($(this).is(".hdg-1")) {
//             $(this).css("color", "green");
//         }
//     });
// });



/**
 * How do I test whether an element exists?
 */
// $(function() {
//     if($("h1").length) {
//         $("h1").hide();
//     }
// });




/**
 * How do I disable/enable a form element?
 */
//You can enable or disable a form element using the .prop() method:

// Disable .text-field
// $( ".text-field" ).prop( "disabled", true );
 
// Enable .text-field
// $( ".text-field" ).prop( "disabled", false );



/**
 * How do I check/uncheck a checkbox input or radio button?
 */

// You can check or 
// uncheck a checkbox element or a radio button using the .prop() method:

// $(function() {
//     // Check #x
//     // $( "[type='checkbox']" ).prop( "checked", true );
//     // $( "[type='radio']" ).first().prop( "checked", true );
    
//     // Uncheck #x
//     $( "[type='checkbox']" ).prop( "checked", false );
// });


/**
 * How do I get the text value of a selected option?
 */
//Select elements typically have two values that you want to access.
// First there's the value to be sent to the server, which is easy:

// $(function() {
//     let checkValue =  $("#cars").val();
//     console.log(checkValue);
// });


// The second is the text value of the select.which i want to use in a DOM.
// $(function() {
//     let checkTextValue =  $("#cars option:selected").text();
//     console.log(checkTextValue);
// });


/**
 * How do I pull a native DOM element from a jQuery object?
 */

$(function() {
    // Equivalent to document.getElementsByClassName( "hdg-1" )
    // let element =  $(".hdg-1")[0]; 
    // or  Identical to above, only slower.
    // let element = $(".hdg-1").get(0);

});






