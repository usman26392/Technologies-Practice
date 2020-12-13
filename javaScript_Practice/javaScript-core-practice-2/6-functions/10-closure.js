/**
 * Closure:
 */


 function printSome() {
     let i = "variable in outer function";
     function printSome2(){
         console.log(i);
     }
     printSome2();
 }

 printSome();