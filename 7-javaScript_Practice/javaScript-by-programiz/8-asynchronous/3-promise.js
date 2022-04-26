


// example
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 1) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {console.log(value)},
    function(error) {console.log(error)}
  );