/**
 * ES6 inheritance
 */

/**
 * parent class
 */ 
class TwoDShape{
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.showDim = function() {
            console.log("Width and height are " + this.width  +" and "+ this.height);
        }
    }
    // here comes prototype members
     color = "red";
}


/**
 * child class inherit from parent class
 */
class Triangle extends TwoDShape {
    constructor(width, height, style) {
        super(width , height);
        this.style = style;
        //  Return area of Triangle
        this.Area = function() {
          return ((width * height) / 2 );
        }
        //  display a triangle style
        this.ShowStyle = function() {
            console.log("Triangle is " + this.style);
        }
    }
}

let t1 = new Triangle(8, 12, "right angle");
let t2 = new Triangle(4, 4, "isosceles");






/**
 *  ----------------- example 2 --------------------
 */

