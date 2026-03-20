/**
 * ES6 class
 */


 /**
  * -------------- Old way: constructor function -------------------
  */

//   var Mobile = function() {
//       //  instance members of Mobile
//       this.color = "red";
//       this.show = function() {
//           return console.log("method of constructor function");
//       }
//   }

//     //  prototype member of Mobile.
//    Mobile.prototype.display = function() {
//        return console.log("prototype method of Mobile ");
//    }

//    var Samsung = new Mobile();






/**
 * ---------- New way:  class declaration for constructor function ----------
 */

 class Mobile {
     constructor() {
        //  instance members of Mobile
         this.color = "red";
         this.show = function() {
            return console.log("method of constructor function(Mobile)");
        }
     }
    //  prototype members of Mobile.
    display() {
        console.log("prototype method of Mobile object. ");
    }
    model = "1130";
 }

 let samSung = new Mobile();
 let nokia = new Mobile(); 

