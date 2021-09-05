/**
 * Closure:
 */


//  function printSome() {
//      let i = "variable in outer function";
//      function printSome2(){
//          console.log(i);
//      }
//      printSome2();
//  }

//  printSome();


 // closure example with DOM

//  (function Counter() {
//      var cnt = 0,
//             btnOne = document.querySelector(".btn-1"),
//             btnTwo = document.querySelector(".btn-2");
    
//      var Print = function Print() {
//          console.log(cnt);
//      };

//      btnOne.addEventListener("click", function Count1() {
//          cnt++;
//          Print();
//      });

//      btnTwo.addEventListener("click", function Count2() {
//          cnt++;
//          Print();
//      });

//  })();


//closure example with module pattern

var APP = (function Module() {
    var a = 3;
    
    var PrintIt = function PrintIt(val) {
        console.log(val);
    };

    var SumIt = function SumIt(b) {
        PrintIt(a + b);
    };

    var MultiplyIt = function MultiplyIt(b) {
        PrintIt(a * b);
    };

    return {
        SumNumbers: SumIt,
        MultiplyNumbers: MultiplyIt
    };
})();

