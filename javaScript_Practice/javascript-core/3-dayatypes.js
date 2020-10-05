/*
    Data types in javascript:
 */

 let totalBooks = 12;
 let totalBooks_2 = "12";
 
 let languageName = "Javascript";
 let aCharacter = "k";

 let piValue = 3.14;
 let negativeNumber = -25; 



 let check = true;
 let listValue = ["HTML","CSS","JS"];
 let studentNames = {
     firstName: "Usman"
 };


 let std;
 typeof std;

 let std_1 = null;
 typeof std_1;



/*
    JavaScript may runtime par datatype b change
    ho sakhti hay. 
*/

let countNumber = 5;
console.log("Typeof countNumber: "+ typeof countNumber);

// Now we change data type  of countNumber:
countNumber = "This is a Book";
console.log("Now Typeof countNumber: " + typeof countNumber);