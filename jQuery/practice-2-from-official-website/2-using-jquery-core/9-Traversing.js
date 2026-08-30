/**
 *  DOM Traversing
 */


/**
 * ------------------------------ parent traversing ----------------
 */

//  parent()

 $(function() {
    let element = $(".subchild").parent();
    console.log(element);
 });


 // parents()
//  $(function() {
//     let element = $("span.subchild").parents();
//     console.log(element);
//  });


// parents() with arguments 

// $(function() {
//   // let element = $("span.subchild").parents(".child");
//   // let element = $("span.subchild").parents(".grandparent");
//   console.log(element);
// });


//  parentsUntil()
// $(function() {
//   let element = $("span.subchild").parentsUntil(".grandparent");
//   console.log(element);
// });


// closest()
// $(function() {
//   let element = $("span.subchild").closest();
//   console.log(element);
// });


/**
 * -------------------------------- children Traversing ------------------------------
 */

  // children()

  // $(function() {
  //   let element = $("div.grandparent").children("div");
  //   console.log(element);
  // });


// example-2
// $(function() {
//   let element = $("div.grandparent").children(".parent");
//   console.log(element);
// });



  // find

  // $(function() {
  //   let element = $("div.grandparent").find("div");
  //   console.log(element);
  // });

  // example-2
  // $(function() {
  //   let element = $("div.grandparent").find("span");
  //   console.log(element);
  // });






  /**
   * ------------------------------------------ Sibling Traversing -------------------
   */

  // next()
  // $(function() {
  //   let element = $("div.parent").next("div");
  //   console.log(element);
  // });



  // nextAll()
  // $(function() {
  //   let element = $("div.parent").nextAll();
  //   console.log(element);
  // });
  

  //example-2
  // $(function() {
  //   let element = $("div.parent").nextAll(".surrogateParent2");
  //   console.log(element);
  // });
  
  

  // nextAll() with first()
  // $(function() {
  //   let element = $("div.parent").nextAll().first();
  //   console.log(element);
  // }); 


  // nextAll() with last()
  // $(function() {
  //   let element = $("div.parent").nextAll().last();
  //   console.log(element);
  // }); 


  // prev()
  // $(function() {
  //   let element = $("div.surrogateParent2").prev();
  //   console.log(element);
  // });

  // example-2
  // $(function() {
  //   let element = $("div.surrogateParent2").prev("div");
  //   console.log(element);
  // });


  // prevAll()
  // $(function() {
  //   let element = $("div.surrogateParent2").prevAll();
  //   console.log(element);
  // });

  // example-2 with specific
  // $(function() {
  //   let element = $("div.surrogateParent2").prevAll(".parent");
  //   console.log(element);
  // });
  

  // prevAll() with first()
  // $(function() {
  //   let element = $("div.surrogateParent2").prevAll().first();
  //   console.log(element);
  // });


  // prevAll() with last()
  // $(function() {
  //   let element = $("div.surrogateParent2").prevAll().last();
  //   console.log(element);
  // });


  // siblings with both directions

  // $(function() {
  //   let element = $( "div.surrogateParent1" ).siblings();
  //   console.log(element);
  // });

  // example-2
  // $(function() {
  //   let element = $( "div.surrogateParent1" ).siblings(".parent");
  //   console.log(element);
  // });


  
  // example-3
  // $(function() {
  //   let element = $( "div.surrogateParent1" ).siblings(".surrogateParent2");
  //   console.log(element);
  // });
  



  














