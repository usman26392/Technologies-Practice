




// $(function() {
//     // let attrValue = $(".main-cont").attr("data-duration");
//     // let attrValue = $(".main-cont").attr("data-duration"," 400");
//     // console.log(attrValue);

//     // let anchor =  $(".drop_down_anchor").attr("href");
//     // console.log(anchor);

//     let anchorEl = $(".drop_down_anchor");
//     let anchorEl_2 = $(".drop_down_anchor");
//     let anchor =  anchorEl.attr("href");
//     let anchor =  anchorEl === anchorEl;
//     console.log(anchor);

// });



// ---------------------------- no conflicts ------------------
// let $jq = jQuery.noConflict();
// console.log($jq);




// ------------------------------ this concept --------------------------

// $(window).on("load", function() {
//     $(".hdg-1").on("click", function(e) {
//         console.log($(this));
//     });
// });



// --------------------------- document . ready -----------------------
// function domReady($) {
//     $("h1").on("click", function() {
//         console.log($(this));
//     });
// }

// $(domReady);



// $( document ).ready(function() {
//     console.log( "document loaded" );
// });

// $( window ).on( "load", function() {
//     console.log( "window loaded" );
// });



// ------------------------- attributes ---------------------------------------
$(function() {
    //--------- getting value of attribute
    // let attrValue = $("h1").attr("class");
    //  console.log(attrValue);
    
    // ---------- setting value of attribute
    // $("h1").attr("title", "this a main heading");

    // $("h1").attr({
    //     "class" : "headings",
    //     title : "These are all h1 headings"
    // });
});




// ------------------------------- selecting jQuery elements in the DOM -----------
$(function() {
    // let el = $("#website-frame");
    // console.log(el);

    // let el = $(".hdg-1");
    // console.log(el);

    // let el = $("input[placeholder='password']");
    // console.log(el);

    // let el = $(".list.list-2 .items");
    // console.log(el);


    // let el = $(".box , .list-1");
    // console.log(el);

    // ------------------  Pseudo Classes in jQuery ---------------
    // let el = $(".list-1 li:first");
    // let el = $(".list-1 li:last");


    // let el = $(".list-1 li:odd");
    // let el = $(".list-1 li:even");
    // console.log(el);


    // -----------------  :visible and :hidden --------------------
    // let el = $(".hdg-1:visible");
    // // let el = $(".hdg-1:hidden");
    // console.log(el);

    // ------------------------ gt() -------------------------------
    // let elms = $(".list-1 li:gt(1)");
    // elms.css("color", "green");
    // console.log(elms);

    // ------------------------------ choosing selectors -----------------

    // element check kar k agar kuch DOM manipulation karni ho toh
    // if( $(".list-1 .li-1").length) {
    //     $(".list-1 .li-1").css("color", "red");
    //     console.log($(".list-1 .li-1"));
    // }

    // ------------------------------ saving selection -----------------------------

    // let items = $(".list li");
    // items.addClass("special-items");
    // items.css("color", "blue");
    // items.attr("title", "items");

    // if(items.length) {
    //     items.addClass("wow-jQuery");
    //     items.on({
    //         "mouseenter": function() {
    //             $(this).removeClass("wow-jQuery");
    //         },
    //         "mouseout": function() {
    //             $(this).addClass("wow-jQuery");
    //         }
    //     });
    // }

    // --------- Refining & filtering selection of elements with jQuery methods --------
    // let check = $(".list-1").has(".li-1");
    // let check = $("h1").not(".hdg-1");
    // let check = $(".list-2 li").filter(".items");
    // let check = $(".list-2 li").first();
    // let check = $(".list-2 li").last();
    // let check = $(".list-2 li").eq(1);

    // let check = $(".list").is(".list-1");

    // if(check) {
    //     $(".list-1").css("backgroundColor", "yellow");
    // }
    // console.log(check);

    // $( "ul" ).click(function( event ) {
    //     var target = $( event.target );
    //     if ( target.is( ".items" ) ) {
    //       target.css( "background-color", "yellow" );
    //     }
    //   });


    // form pseudo classes

    $("form :checked").on("click", function() {
        $(this).toggleClass("abc");
    });



    


 













    // --------------------------- DOM Traversing ---------------------
    
    // example
    $(".search-icon").on("click", function() {
        $(this).siblings(".search-form").addClass("open");
        // $(this).siblings(".search-form").stop().slideDown(2000);
    });
    
    $(".cross-icon").on("click", function() {
        $(this).parents(".search-wrapper").find(".open").removeClass("open");
        // $(this).parents(".search-wrapper").find(".search-form").stop().slideUp(2000);
    });



});
