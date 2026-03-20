/**
 * parameterized constructor
 */

 class Mobile {
    //  parameterized  constructor
     constructor(color, model_no, price) {
         this.color = color;
         this.model_no = model_no;
         this.price = price; 
     }
 }

 let samsung = new Mobile("red", "j7", "26000");
 let nokia = new Mobile("black","7.2", "45000");