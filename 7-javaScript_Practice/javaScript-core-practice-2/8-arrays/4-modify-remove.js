/**
 *  Modify and remove array elements
 */

 /**
  * modify
  */
 let colors = ["red", "green", "blue"];
 colors[0] = "white";


 /**
  * agar hum kisi array object ko kisi dosray array variable may assign karyn toh
  * , is tarhan array object ka reference address jae ga.
  * 
  * let primaryColors = colors;
  */



 /**
  * remove
  * is may element delete hoga bus , us element ki memory slot baqi rahay gi.
  */
 delete colors[0];
 
 // if we check
 console.log(colors[0]);



