/**
 * for in loop
 */


 let Car = {
     model: "1100",
     name: "swift",
     color: "red"
 };

 // finding object instances names
 for(let CarFeaures in Car) {
    console.log("Car Instances names :" + CarFeaures);
 }



// finding object instances values
 for(let CarFeaures in Car) {
    console.log("Car Instances' values :" + Car[CarFeaures]);
 }

 

 /**
  * way-2: return only instance members of object,
  *  not included in prototype members.
  */

  console.log("from way 2:  " + Object.keys(Car));