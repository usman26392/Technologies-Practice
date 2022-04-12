




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



/**
 *  ---------------------------- no conflicts ------------------
 */

// let $jq = jQuery.noConflict();
// console.log($jq);



/**
 * ------------------------------ this concept --------------------------
 */

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



/**
 * ------------------------- attributes ---------------------------------------
 */

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



/**
 * ------------------------ selecting jQuery elements in the DOM -----------
 */

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
    // :checked
    // $("form :checked").on("click", function() {
    //     $(this).toggleClass("abc");
    // });
    
    // :disabled
    // $("form input").filter(":disabled").on("mousemove", function() {
    //     $(this).toggleClass("ccc");
    // });


    // :enabled
    // $("form input").filter(":enabled").on("click", function() {
    //     $(this).toggleClass("ccc");
    // });

    
    // :selected
    // $("form select option").filter(":selected").addClass("yes");


    // selecting elements by input types
    // $("form input").filter(":password").addClass("yes");



    /**
     * --------------------- working with elements' selection ---------------------
     */

    // $("h1").html("Hello world");
    // $("h1").text("Hello world");

    // method chaning way-1:
    // $(".list-1").find("li").eq(2).css("border", "2px solid red");
    
    // method chaning way-2:
    // $(".list-1")
    //     .find("li")
    //     .eq(2)
    //     .css("border", "2px solid red");


    // method chaining with end()
    // $(".main-cont")
    //     .find("h3")
    //     .css("border", "2px solid red")
    //     .end()
    //     .css("border", "2px solid green");

    // method chaining with end()
    // $(".list-1")
    //     .find("li")
    //     .eq(2)
    //     .css("border", "2px solid red")
    //     .end()
    //     .eq(0)
    //     .css("border", "2px solid green");



    // method chaining with end()
    // $(".para-sp")
    //     .find("span")
    //     .css("border", "2px solid red")
    //     .end()
    //     .css("border", "2px solid green");


    /**
     * --------------------- manipulating elements -----------
     */
    // --------- getting -----------
    // let check =  $(".para-sp").html();
    // let check =  $(".para-sp").text();
    // let check2 =  $(".main-cont").html();
    // console.log(check);
    // console.log(check2);

    // ------- setting  --------------
    // let check =  $(".para-sp").html("<strong>hello javascript</strong>");
    // let check =  $(".para-sp").text("<strong>hello javascript</strong>");
    // console.log(check);

    // ------ appending , copying and removing elements from the DOM. ---------
    // let list_item = $(".list-1 li:first").appendTo(".list-2");
    // let list_item = $(".list-1 li:first").prependTo(".list-2");
    // let list_item = $(".list-2").append($(".list-1 li:first"));
    // console.log(list_item);
    // let title = $(".hdg-1").insertAfter($(".list-2"));
    // console.log(title);

    // ------------ copying element from the DOM ------------
    // let list_item = $(".list-1 li:first").clone().appendTo(".list-2");
    
    // if we need event too.
    // $(".list-1 li:first").on("click", function() {
    //     $(this).css("color", "green");
    // });
    // now we copy li with true argument
    // let list_item = $(".list-1 li:first").clone(true).appendTo(".list-2");



    //-------------- creating new elements ------------------
    // $("<div />").addClass("notification").text("I exist!").prependTo("body");
    // or
    // $("<div>I exist!</div>")
    //     .addClass("notification")
    //     .prependTo("body");
    
    // or
    // $('<a/>', {
    //     html: 'This is a <strong>new</strong> link ',
    //     'class': 'main-link',
    //     href: 'foo.html'
    // }).appendTo(".hdg-1");

    // example
    // let myItems = [],
    //     myList = $('.list-1');

    //     for(let i = 0; i < 50; i++ ) {
    //         myItems.push(`<li>item  ${i} </li>`)
    //     }
    //     myList.append(myItems.join(''));

    // manipulating attribute:
    // $('.hdg-1').attr('id', 'main-title');
    // $('.hdg-1').attr('class', 'main-title');
    // $('.hdg-1').attr('class', 'main-title top-web-title');

    // with attribute object:
    // $('.hdg-1').attr({
    //     id: 'main-title',
    //     'data-animation': 400,
    //     'class': 'top-title',
    //     'aria-labelled': 'main website title'
    // });
    
    // example: set href's new value
    // $('.special-list a').attr('href', function(idx, href) {
    //     return '/new/' + href;
    // });
    
    // example: set id's value
    // $('.special-list a').attr('id', function(idx, href) {
    //     return '/new/' + idx;
    // });

    //  example: set src with the help of title
    // $( "img" ).attr( "src", function() {
    //     return "/resources/" + this.title +'.jpg' ;
    // });

    // example: set title with the help of src
    // $( "img" ).attr( "title", function() {
    //     return `${this.src}`;
    // });


    /**
     * --------------------- jQuery Object -------------------------------
     */
    // jquery object comparison
    // let element_1 = $('.hdg-1');
    // let element_2 = $('.hdg-1');

    // console.log(element_1 === element_2);

    // Native DOM element comparison.
    // let element_1 = document.querySelector('.hdg-1');
    // let element_2 = document.querySelector('.hdg-1');
    // console.log(element_1 === element_2);



    /**
     * --------------------------- DOM Traversing ---------------------
     */
    // parent traversing
    // let elements =  $( '.subchild' ).parent();
    // let elements =  $( '.subchild' ).parents('.child');
    // let elements =  $( ".subchild" ).parents();
    // let elements =  $( ".subchild" ).parents('.parent');

    // let elements =  $( ".subchild" ).parentsUntil();
    // let elements =  $( ".subchild" ).parentsUntil('.grandparent');
    // console.log(elements);
    
    // children traversing
    // let elements =  $( ".grandparent" ).children();
    // let elements =  $( ".grandparent" ).children( "div" );
    // let elements =  $( ".grandparent" ).children('.parent');

    // let elements =  $( ".grandparent" ).find('div');
    // let elements =  $( ".grandparent" ).find('.subchild');
    // console.log(elements);

    // sibling traversing
    // let elements = $('.parent').next();
    // let elements = $('.parent').next('.surrogateParent2');
    // let elements = $('.parent').nextAll();
    // let elements = $('.parent').nextAll('.surrogateParent2');
    // let elements = $('.surrogateParent2').prev();
    // let elements = $('.surrogateParent2').prev('.surrogateParent1');
    // let elements = $('.surrogateParent3').prevAll();
    // let elements = $('.surrogateParent3').prevAll('.parent');
    // var elements = $('.surrogateParent1').siblings('.parent');
    // // let elements = $('.surrogateParent1').siblings('.parent, .surrogateParent2');
    // console.log(elements);
    
    // example
    $(".search-icon").on("click", function() {
        $(this)
        .siblings(".search-form")
        .addClass("open");
        // $(this).siblings(".search-form").stop().slideDown(2000);
    });
    
    $(".cross-icon").on("click", function() {
        $(this).parents(".search-wrapper").find(".open").removeClass("open");
        // $(this).parents(".search-wrapper").find(".search-form").stop().slideUp(2000);
    });


    /**
     * ------------------- css styling and dimensions -----------------------
     */
    
    // getting property of an element
    // let element = $('h1').css('background-color');

    // setting property of all elements.
    // let element = $('h1').css('background-color', 'yellow');

    // set more than one css property
    // $('h1').css({
    //     fontSize: '100px',
    //     color: '#fff',
    //     backgroundColor: 'brown'
    // });

    // setting property of specific element
    // let element = $('h1').eq(0);
    // element.css('background-color', 'yellow');
    // or
    // let element = $('h1').eq(0).css('background-color', 'yellow');
    // console.log(element);



});





