/**
 * Array Methods
 */

 /**
  * ------------------------- concatenating arrays ------------------
  * concat(), join()
  */

/** 
 * concat elements with array.
*/ 
// let color_pimary = ["red", "green","blue"];
// let total_Colors = color_pimary.concat("black","white");  
// console.log(total_Colors);
// console.log(`This is original array not changed:  ${color_pimary}`);


/**
 *  concat array with array.  
*/ 
//   let color_pimary = ["red", "green","blue"];
//   let color_secondary = ["orange", "purple","white"];

//   let totalColors = color_pimary.concat(color_secondary);



/**
 * join array with separator:
 * yey method return aik string karta hay.
 */

// let color_pimary = ["red", "green","blue"];
// let myColors = color_pimary.join(" / ");
// console.log(`my array with separator:  ${myColors}`);

  //  example
  // let arr1 = ["jquery", ""],
  //     arr2 = [4,5,6];

  // // let arr3 = arr1.join("/");
  // let arr3 = arr1.join(".min.js");
  // console.log(arr3)

  // console.log(arr2.join(" < "))

  // // console.log(arr1)
  // // console.log(arr2)




/**
 *  ----------------------------------- reversing array --------------------
 *  reverse()
 *  is method k zariyey hum original array k elements ko 
 *  reverse order karsakhtay hayn.
 *  
 */

  // let color_primary = ["red", "green","blue"];
  // let myColors = color_primary.reverse(color_primary);
  // console.log(myColors);
  // console.log(color_primary);


/*
* ---------------------- slicing ----------------------
*  slice() 
*/

  // let color_primary = ["red", "green","blue","black","white"];
  // let myColors = color_primary.slice(1,3);
  // console.log(myColors);

/**
 * ----------------------- array check --------------------
 * Array.isArray()
 */

// let color_pimary = ["red", "green","blue","black","white"];
// console.log(Array.isArray(color_pimary));



/**
 * ------------------- removing , updating and add elements ------------------
 * splice()
 */
// let color_primary = ["red", "green","blue","black","white"];
// let myColor = color_primary.splice(1);
// let myColor = color_primary.splice(2,1);
// let myColor = color_primary.splice(1,0, "abc", "def" );
// let myColor = color_primary.splice(1,2, "abc", "def" );
// console.log(color_primary);
// console.log( myColor);




/**
 * ------------------------------------------ searching elements -----------------------------
 * indexOf()
 * lastIndexOf()
 * find()
 * findIndex()
 */

  // let color_primary = ["red", "green","blue","black","white", "blue","blue"];
  // // let myDesireClr = color_primary.indexOf("blue",0);
  // // or
  // let myDesireClr = color_primary.indexOf("blues",0);
  // console.log(myDesireClr);

  /**
   * find()
   */
  // let arr = [1,5,2,6,9];
  // let result = arr.find(function(nm) {
  //   return nm % 2 == 0;
  // })

  // console.log(result)




/**
 * ------------------------------ elements fill in the array ---------------
 * fill()
 */
  // let color_primary = ["red", "green","blue","black","white", "blue","blue"];
  // let myClr = color_primary.fill("orange", 5, 7);
  // console.log(myClr);
  // console.log(color_primary);



/**
 * ----------------------------------------- inserting elements ------------------------------
 * unshift()
 * push()
 */
// let color_primary = ["red", "green","blue","black","white", "blue","blue"];
// let mylength = color_primary.unshift("yellowGreen");
// console.log(color_primary);
// console.log(`array length return is:  ${mylength}`);


/**
 * push()
 * is may elements last may ja kar lgay gay.
 */
// let color_primary = ["red", "green","blue","black","white"];
// let mylength = color_primary.push("yellow","green");
// console.log(color_primary);
// console.log(mylength);


/**
 * ---------------------- removing elements ----------------------
 * shift() , first element remove hoga
 * pop()   , last wala element removed hoga
 */
// let color_primary = ["red", "green","blue","black","white"];
// let myRemovedeelement = color_primary.shift();
// console.log(myRemovedeelement);
// console.log(color_primary);


/**
 * pop()
 */

// let color_primary = ["red", "green","blue","black","white"];
// let myRemovedeElement = color_primary.pop();
// console.log(`removed element from the array:   ${myRemovedeElement}`);
// console.log(color_primary);


/*
* ---------------------------- condition checking ----------------------
* every() 
* some() : agar aik b condition true hogi toh "return true" hoga.
*/

// example

// let arr = [0, 100, 95, 45, 65, 80, 75, 90];
// let check = arr.every(function(elm) {
//   return elm > 80;
// });

// console.log(check);


// example

// let arr = [0, 100, 95, 45, 65, 80, 75, 90];
// if(arr.every(function(elm) {
//   console.log(elm); 
//   return elm > 80;
// })) {
//   console.log("Everyone scored above 80");
// }
// else {
//   console.log("Not everyone scored above 80");
// }



// let randomNo = [11,10];
// let conditionCheck=  randomNo.every((myNo)=> {
//   return myNo > 9;
// });

// console.log(conditionCheck);


/**
 * some()
 */

//  let arr = [0, 100, 95, 45, 65, 80, 75, 90];
//  if(arr.some(function(elm) {
//    console.log(elm); 
//    return elm > 80;
//  })) {
//    console.log("At least one received above 80");
//  }
//  else {
//    console.log("No one scored above 80");
//  }




// let randomNo = [3,4,11,10,5];
// let conditionCheck=  randomNo.some((myNo)=> {
//   return myNo > 11;
// });

// console.log(conditionCheck);


// examples
//  let arr = [2,6,8,6,0];

//   // let result= arr.every(function(elm) {
//   //   return  elm > 1;
//   // });

//   let result= arr.some(function(elm) {
//     return  elm > 1;
//   });

//   console.log(result)




/**
 * ---------------------------------- Transformation --------------------------------
 * filter()
 * map()
 */


// let arr = [0, 100, 95, 45, 65, 80, 75, 90];

// let newArray = arr.filter(function(elm) {
//   return  elm > 80;
// });

// console.log(newArray);



//  let randomNo = [1,2,3,4,5,6,7,8,9,10];
//  let myNumbers = randomNo.filter((arrNos)=> {
//    return arrNos % 2 == 0;
//  });

//  console.log(myNumbers);
   
  // example
  // let arr = [2,6,8,6,0];

  // let result= arr.filter(function(elm) {
  //   return  elm > 5;
  // });

  // console.log(result)
  // console.log(arr)


 /**
  *  ----------------- map() ----------------
  */

//  let randomNo = [1,2,3,4,5];
//  let myEvenNumbers = randomNo.map((arrNos)=> {
//    return arrNos * 2;
//  });

  //  or shorter syntax
  // let myEvenNumbers = randomNo.map(arrNos=> arrNos * 2);
//  console.log(myEvenNumbers);
//  console.log(randomNo);


// example-2
//  let arr = [1,2,3,4,5];
//  let newArray = arr.map(function(elm) {
//    return elm * elm;
//  });

//  console.log(newArray);




// example-3

// let itemDesc = [
//   {price:100, productName: "Samsung"},
//   {price: 200, productName: "Nokia"}
// ];

// // console.log(itemDesc);
// itemDesc.map((el)=>{
//   console.log(el.price);
// });

  // example
  // let arr = [2,6,8,6,0];
  // let result= arr.map((elm)=>  elm * 2);
  // console.log(result)
  // console.log(arr)
 

/**
 * ------------------------ reduce methods -----------------------------
 */

// example

// let arr = [0, 100, 95, 45, 65, 80, 75, 90];
// let sum = arr.reduce(function(prevVal, currVal) {
//   return prevVal + currVal;
// }); 

// console.log(`The total is  ${sum}`);


// example

// let arr = [0, 100, 95, 45, 65, 80, 75, 90];

// let maxNumber = arr.reduce(function(prevVal, currVal) {
//   return (prevVal > currVal) ? prevVal : currVal;
// }); 

// console.log(`The highest number is ${maxNumber}`);


// example OR
// let arr = [0, 100, 95, 45, 65, 80, 75, 90];
// let maxNumber = function(val1, val2) {
//   return (val1 > val2) ? val1 : val2;
// };
// let max = arr.reduceRight(maxNumber); 
// console.log(`The highest number is ${max}`);





/**
 * ------------ temporary practice
*/

let arr = [3,4,6,7];

function isEven(nm) {
  return nm % 2 == 2 
}

function evenSquare(nm) {
  return nm * nm;
}

let result = arr.filter(isEven).map(evenSquare)
console.log(result)

  

  


    

  

