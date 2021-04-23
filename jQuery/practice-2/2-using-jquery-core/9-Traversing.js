/**
 *  DOM Traversing
 */


/**
 * -- parent traversing
 */

//  $(function() {
//     let element = $("li.subchild").parent();
//     console.log(element);
//  });


 // parents()
//  $(function() {
//     let element = $("li.subchild").parents();
//     console.log(element);
//  });


// parents() with arguments 
// $(function() {
//   // let element = $("li.subchild").parents(".child");
//   let element = $("li.subchild").parents(".grandparent");
//   console.log(element);
// });


//  parentsUntil()
// $(function() {
//   let element = $("li.subchild").parentsUntil(".grandparent");
//   console.log(element);
// });


// closest()
// $(function() {
//   let element = $("li.subchild").closest("ul");
//   console.log(element);
// });


/**
 * ------------ children Traversing 
 */

  // children()
  // $(function() {
  //   let element = $("div.grandparent").children("div");
  //   console.log(element);
  // });



  // find
  // $(function() {
  //   let element = $("div.grandparent").find("div");
  //   console.log(element);
  // });



  /**
   * ------------- Sibling Traversing -------------------
   */

  // next()
  // $(function() {
  //   let element = $("div.parent").next();
  //   console.log(element);
  // });



  // nextAll()
  // $(function() {
  //   let element = $("div.parent").nextAll();
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
  //   let element = $("div.surrogateParent1").prev();
  //   console.log(element);
  // });


  // prevAll()
  // $(function() {
  //   let element = $("div.surrogateParent2").prevAll();
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


  // sibling
  $(function() {
    let element = $( "div.surrogateParent1" ).siblings();
    console.log(element);
  });



  














