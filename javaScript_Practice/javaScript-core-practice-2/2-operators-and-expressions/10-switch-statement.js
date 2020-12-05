/**
 * switch statement:
 * 
 */

 

 /**
  * when variable
  */
//  let day = prompt("Enter a day number");
//  let dayInt =  parseInt(day);
//  switch (dayInt) {
//     case 1:
//         console.log("This is a Monday");
//         break;
//     case 2: 
//         console.log("This is a Tuesday");
//         break;
//     case 3: 
//         console.log("This is a Wednesday");
//         break;
//     case 4: 
//         console.log("This is a Thursday");
//         break;
//      default:
//         console.log("Nothing day case select"); 
//         break;
//  }


/**
 * when a variable
 */

//  let day = prompt("Enter a day name and first letter should be Capital");
//  switch (day) {
//     case  "Monday":
//         console.log("This is a working day");
//         break;
//     case  "Tuesday": 
//         console.log("This is a working day");
//         break;
//     case  "Wednesday": 
//         console.log("This is a working day");
//         break;
//     case "Thursday": 
//         console.log("This is a working day");
//         break;
//     case  "Friday": 
//         console.log("This is a working day");
//         break;
//     case "Saturday":
//     case "Sunday":
//         // cases aysay b hotay hayn jo different hun.
//         // magar un ka kaam same ho. 
//         console.log("This is a holiday");
//         break;         
//      default:
//         console.log("Nothing day case select"); 
//         break;
//  } 



 // multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}