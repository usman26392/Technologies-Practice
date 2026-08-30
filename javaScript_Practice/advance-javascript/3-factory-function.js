/**
 * -------- this example for just understanding factory function
 */
// let galaxy1 = {
//     model: "A02s",
//     displayModel: function() {
//         return `Samsung ${this.model}`
//     }
// }

// let galaxy2 = {
//     model: "S23 ultra",
//     displayModel: function() {
//         return `Samsung ${this.model}`
//     }
// }

// console.log(galaxy1);
// console.log(galaxy1.model);
// console.log(galaxy1.displayModel());

// // above if these objects in millions how do you handle them ?
// // and model property is not secure.
// console.log("---------------------- now your data is Hack ! ---------------- ")
// console.log(galaxy1.model = "abc");
// console.log(galaxy1.displayModel());




/**
 * ------------------------------------ factory function -----------------------------
 * easy to write and maintain
 * no duplication of instances
 * data privacy
 */

// syntax:
// function nameFactory(parms) {
//   return { object }
// }

// function mobileFactory(modelname) {
//   let mobileObj = {
//     displayModel: function () {
//       return `Samsung ${modelname}`;
//     },
//   };
//   return mobileObj;
// }

// or easy way
// function mobileFactory(modelname) {
//   return {
//     displayModel: function () {
//       return `Samsung ${modelname}`;
//     },
//   };
// }



// let galaxy1 = mobileFactory("A02s"),
//   galaxy2 = mobileFactory("S23 ultra");

// console.log(galaxy1);
// console.log(galaxy2);

// // now your data is secure
// console.log(galaxy1.displayModel());
// console.log(galaxy2.displayModel());



// practical example
// (function() {

//     function domElementFactory(type, text, color) {
//         const el = document.createElement(type);
//         el.innerText = text;
//         el.style.color = color;
//         document.body.append(el);
//         return {
//             el,
//             textUpadte(text) {
//                 el.innerText = text
//             }
//         }
        
//     }

//     let title = domElementFactory("h2", "javascript is dynamic language", "red");
//     let para = domElementFactory("p", "javascript has a lot of concepts ", "green");
    
//     // if you want to update text
//     para.textUpadte("one is fetch api");




// })();






  