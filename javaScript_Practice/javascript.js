console.log("I am learning javaScript!");
/*
// Alert Box
alert("Hi");
// Confirmation Box
confirm("Continue?");
// Prompt Box
window.prompt("Enter your age");
*/


/*
// TheMathObjectExample.js
for (i = 1; i <= 20; i++) {
    var x = Math.random();
    // Math.random() returns a floating-point, random number in the range 0–1 (inclusive of 0, but not 1) 
    // with approximately uniform distribution over that range. 
    x = 100 * x + 1;
    x = Math.floor(x);
    // Math.floor() returns the largest integer less than or equal to a given number
    console.log("Random number (" + i + ") in range " + "1..100 --> " + x);
}

var sqrtValue = Math.sqrt(16);
console.log("Square root of 16 is :"+sqrtValue);

var roundOffvalue = Math.floor(12.56);
console.log("value of 12.56 round off is "+ roundOffvalue);
*/

/*
// TheDateObjectExample.js
var now = new Date();
// new Date() creates a new date object with the current date and time
var result = "The date and time now is  "  + now;
// another way:
//var result = `The date and time now is  ${now}`;
console.log(result);
*/




/*
// Make something happen (once) after a fixed delay:
function reminder() {
    console.log("It's been 5 seconds");
}

var timer = setTimeout(reminder, 5000); // 5 seconds in this case
// Make something happen repeatedly at fixed intervals:
var myTimer = 0;
function printTime() {
    console.log("The date and time now is " + new Date());
    myTimer++;
    if (myTimer == 10) { // stops the continuous call of the function
        clearInterval(timer);
        console.log("It's been 10 seconds");
    }
}
// This function is called continuously every second
var timer = setInterval(printTime, 1000); 
*/


/*-------------------- Data Types and Variables ------------------------*/
/*
// JavascriptDataTypesExample.js
var count = 5; // variable holds an integer value
count = 'hello'; // the same variable now holds a string

var name = 'EXLskills'; // variable holds a string

let points = 5.25 // points holds a floating-point number
points = true; // points now holds a boolean value

const MAX_COUNT = 250; // MAX_COUNT is a constant variable that holds an integer

// MAX_COUNT = 0; // will cause an error if uncommented, constant variables cannot be altered



console.log(count);
console.log(name);
console.log(points);




var no1 = 12.00000000000001;
var no2 = 120;
console.log(no1);
console.log("number is "+ (no1 + no2));



var biggestNo = Number.MAX_VALUE;
console.log("The biggest number in javaScript "+ biggestNo);

var smallestNo = Number.MIN_VALUE;
console.log("The smallest number in javaScript " + smallestNo)
*/


/*
// Number Conversions.
var doubleValue = 8.75;
console.log("Double value is "+ doubleValue);

// Convert foating-point to integer number.
var integerValue = doubleValue | 0;
console.log("integer value of 8.75 is "+ integerValue);

// Convert floating-point number to rounding.
var roundingNumber = (doubleValue + 0.5) | 0;
console.log("Rounding number of 8.75 is "+ roundingNumber);

// Convert string value number to integer number.
var strValue = "122";
var intValue = strValue | 0;
console.log('We checked to add 1 in intValue: '+(intValue + 1));
*/

/*
// Boolean data type .
let a = 1;
let b = 3;
let checkNumbers = (a > b);
console.log("Is a greater than b ? " + checkNumbers);

let chk = ("1" == "1")
console.log(chk);


// Strings data types.
var str1 = "javaScript";
console.log(str1);


// unicode string in differents languages characters.
var str= '中文 español Deutsch English देवनागरी ';
console.log(str);
*/

/*
// Parsing strings to Numbers.
var str = '123';
var convertStringtoInteger = parseInt(str);
console.log(convertStringtoInteger);
console.log('Now we can check it, add 1: '+ (convertStringtoInteger + 1));

// float string.
var floatString = '12.3';
var convertFloatstringToFloatnumber = parseFloat(floatString);
console.log(convertFloatstringToFloatnumber);
*/


/*
// Checking variable type: 
var x = 5;
console.log('Data Type of x : '+ (typeof x));

var y = "javaScript";
console.log(`Data type of y: ${typeof y}`);

var z = null;
console.log('Data type of z: '+ (typeof z));

var p = undefined;
console.log('Data type of p: '+ (typeof p));
*/


/*
// declares ways of identifiers.
let New;
let newValue;
let _2value;
let $percentage;
*/


/*
// assigning values to variables.
var firstValue = 5;
var secondValue;

secondValue = firstValue;

console.log('Value of first: '+ firstValue);
console.log('Value of second: '+ secondValue);

var Value;
console.log(Value);
*/

/*
// Arithmetic operators: 
const squarePerameter = 17;
const squareSide = squarePerameter / 4;
console.log(`Side of Square is ${squareSide}`);

console.log("Result of 12 % 5 = " + (12 % 5));  // modulus or remainder operator.
console.log("Result of 12 / 5 = " + (12 / 5));
console.log("Result of 12 + 5 = " + (12 + 5));
console.log("Result of 12 - 5 = " + (12 - 5));
console.log("Result of 12 * 5 = " + (12 * 5));
console.log("Result of 0 % 0 = " + (0 % 0));
console.log("Result of 0 / 0 = " + (0 / 0));
console.log("Result of 12 / 0 = " + (12 / 0));
*/

/*
// logical operators.
let a = 1;
let b = 2;
console.log((5 > 7) && (a == b));
*/


/*
// ComparisonOperatorsExample.js
let a = 5;
let b = 4;
let c = "2";
let d = Number(2);
console.log(a >= b); // checks if 'a' is greater than or equal to 'b'
console.log(a != b); // checks if 'a' is different from 'b'
console.log(c == d); // only checks if the value of 'c' and 'd' are the same
console.log(c === d); // checks if 'c' and 'd' have the same value and data type
console.log(c !== d); // checks if 'c' and 'd' have different values or different data types
*/


/*
// Assignments operators.
let  a = 15;
console.log(a);

a+=15;
console.log(`assignment operator: ${a}`);
*/

/*
// Other operator:
let str1 = 'JavaScript';
let str2 = 'is a best language.';
// string concatenation.
let strCont = str1 + str2;
console.log(`${strCont}`);
console.log(strCont);

// member access operator.
var v = Math.sqrt(16);
console.log(v);

var v1 = Math.PI;
console.log('Property(PI) of Math object: '+ v1);

// square brackets operator.
var languageNames = ['C#','javaScript','java','swift'];
console.log('Best language ' + languageNames[1]);
*/

/*
// Conditional Statements.
var numberOne = 120;
var numberTwo = 5;

// if statements.
if(numberTwo > numberOne) {
    console.log('First: if block executed!');
}
if(numberOne > numberTwo) {
    console.log('Second: if block executed!');
}

// if-else statements.
if (numberOne > numberTwo) {
    console.log("Yes , 120 greater than 5 ");
}
else  console.log('Than numberTwo > numberOne ');
*/


/*
// else if statements.
var n1 = 5;
var n2 = 10;
var n3 = 20;

if(n1 > n2 ) {
    console.log('5 will be greater than from 10');
}
else if (n1 > n3) {
    console.log('5 will be greater than from 20');
}
else if (n1 < n2 ) {
    console.log('5 will be less than from 10');
}
else if (n1 < n3) {
    console.log('5 will be less than from 20');
}
else {
    console.log('5 wil be something else!');
}
*/

/*
// NestedIfStatementsExample.js
var diceNumber = 4;
if (diceNumber == 1) {
    console.log("The dice number is 1");
}
else if (diceNumber % 2 == 0) { // if dice number is divisible by two
    if (diceNumber == 2) {
        console.log("The dice number is 2");
    } else if (diceNumber == 4) {
        console.log("The dice number is 4");
    } else if (diceNumber == 6) {
        console.log("The dice number is 6");
    } else {
        console.log("The number has to be between 1 and 6");
    }
}
 else if (diceNumber == 3) {
    console.log("The dice number is 3");
} 
else if (diceNumber == 5) {
    console.log("The dice number is 5");
} 
else {
    console.log("The number has to be between 1 and 6");
}
*/

/*
// SwitchStatementExample.js
var day = 3
switch (day > 1) {
    case 1:
        console.log('Monday');
        break; 
    case 2: 
        console.log('Tuesday');
        break; 
    case 3:
        console.log('Wednesday');
        break; 
    case 4:
        console.log('Thursday');
        break; 
    case 5:
        console.log('Friday');
        break; 
    case 7:
        console.log('Sunday');
        break; 
    default:
        console.log('The number has not to be between 1 and 7');  
}
*/


/*
// FallThroughBehaviorExample.js
console.log('Fall through behavior in switch !')
var day = 3;
switch (day) { 
    // without the "break;", all the cases after the selected case are executed
    // that's why using the "break;" statement is extremely important
    case 1:
         console.log('Monday');       
    case 2:
         console.log('Tuesday');
    case 3:
         console.log('Wednesday');
    case 4:
         console.log('Thursday');
    case 5:
         console.log('Friday');
    case 6:
         console.log('Saturday');
    case 7:
         console.log('Sunday');
    default:
         console.log('The number has to be between 1 and 7');
}
*/

/*
// ExpressionsInTheCaseLabelExample.js
var number1 = 5;
var number2 = 10;

switch(true) {
    case ((number1 == 5) && (number2 == 10)):
        console.log('Performed addition: '+(number1 + number2));
        break;
    case ((number1 >= number2)):
        console.log('Performed subtraction: '+(number1 - number2));
        break;
    default: console.log('Performed nothing');
        break;        
}
*/

/*
// while loop.
let count = 1;
while (count <= 10) {
    console.log(`Counter: ${count + count}`);
    count++;
}


// break operator.
let count = 1;
while (count <= 10) {
    console.log(`Counter: ${count + count}`);
    if(count === 5) {
        console.log("Stoped while loop at 5 count!");
        break;
    }
    else count++;
}
*/


/*
// do-while loop.
var count = 1;
do {
    console.log(`Do while loop:  ${count}`);
    count++;
} while(count < 11);
*/


/*
// for loop.
for(let i = 1; i < 11; i++) {
    console.log('for loop ' + i);
}
*/

/*
// NestedLoopsExample.js
for (counter = 1; counter < 4; counter++) { 

    for (counterTwo = 1; counterTwo < 7; counterTwo++){
        console.log('Counter for inner loop: ' +counterTwo);
    }
}
*/


/*
// for-in loop.
var arr = [1,2,3,4,5,6,7,8,9,10];
for(var elementIndex in arr) {
    console.log('Object element: ' + arr[elementIndex]);
}
*/

/*
// for-of loop. 
var arr1 = [1,2,3,4,5,6,7,8,9,10];
for(var elementValue of arr1){
    console.log('for of loop:' + elementValue);
}
*/

/*
// Arrays.
var arrayName = [5,4,3,2,1];
console.log(arrayName[0]);

var arr2 = new Array(1,2,3,4,5);
console.log(arr2[0]);


// Accessing array element.
console.log('array element at index 0: '+arrayName[0])


// iterating arrays.
var sum = 0;

for(i = 0; i < arrayName.length; i++) {
    sum = sum + arrayName[i]; 
}
console.log('By for loop:  Sum of 5,4,3,2,1 = '+ sum);

var sum2 = 0;
for(var elementValue of arrayName) {
    sum2 = sum2 + elementValue;
}
console.log('By for-of loop: Sum of 5,4,3,2,1 = '+ sum2);
*/


/*
// Array Methods.
// inserting element methods.
var arr = [2,3,4];
arr.push(9);
console.log(arr);

arr.unshift(10);
console.log(arr);

// Removing elements.
arr.pop(); // remove last element.
console.log(arr);

arr.shift();
console.log(arr); // remove first element.
*/


/*
// concatenating Arrays.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6,];

var arr3 = arr1.concat(arr2);
//var arr3 = arr2.concat(arr1);
console.log('New array with concatenation: '+ arr3);
*/


/*
// splicing arrays:
// SplicingArraysExample.js
var numbers = [1, 2, 3, 4, 5];
// Removes 2 elements starting from index 0 and adds 2 new elements
numbers.splice(0, 2, "one", "two");
console.log(numbers);

var languages = ["C#", "JavaScript"];
//Inserts element(s) from at position index 0.
languages.splice(0, 0, "HTML", "CSS", "Swift");
console.log(languages);
//removes element(s) at position index, 0 is the index and
// 2 is the number of items removed.
languages.splice(0, 2);
console.log(languages);
*/


/*
// methods for condition.
var a = [10,11];

function isNumber(num){
    return (num === 10);
    //if (a[0] == 10) return num; 
}

console.log(a);
console.log('Are every numbers match the condition ?: '+ (a.every(isNumber)));
//var chkValue = (a.every(isNumber));

console.log('Are some numbers match the condition ?:' + (a.some(isNumber)));
*/

/*
// MethodsForTransformationExample.js
var arr = [1,2,3,4,5,6,7,8,9,10];

function isEvenNumber(number) 
{
    return number % 2 == 0;
}

function multiply(number) {
    return number * 2;
}

console.log(arr.filter(isEvenNumber));
console.log("every element multiply by 2: "+arr.map(multiply));
*/


/*
// MethodsForSearchingExample.js
var arr1 = [1, 2, 3, 4, 2, 3, 2, 4, 2, 2];
var arr2 = [1, 8, 6, 4, 5, 6, 7, 8, 9, 10];
var languages = ["C#","swift","swift","swift","javascript","java","swift","kotlin"];


function isEven(number) {
  return number % 2 == 0;
}

console.log(arr1.lastIndexOf(2, arr1.length - 1));
console.log("index number: "+(languages.indexOf("swift",0)));
console.log("index number: "+(languages.lastIndexOf("swift",5)));
console.log("First element of the Array that matches the criteria:" + arr2.find(isEven));

// arrayname.findIndex
console.log("Index number: "+arr2.findIndex(isEven));
*/

/*
// ChainingArrayMethodsExample.js
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(number) {
    return number * number;
}

function isEven(number) {
  return number % 2 == 0;
}
console.log(arr1.filter(isEven).map(square));
*/

// functions:

/*
var item1= 10;
var item2 = 10;

var totalSum = item1 + item2;
console.log(totalSum);

var item3 = 5;
var item4 = 5;
totalSum = totalSum + item3 + item4;
console.log(totalSum);
*/

/*
var totalSum = 0;
function sumCalc(num1,num2) {
    var totalAmount = num1 + num2;
    return totalSum = totalSum + totalAmount;
}
console.log(sumCalc(10,10));
console.log(sumCalc(5,5));
*/

/*
// Declaring and creating functions:
function printSomeThing1(){
    console.log("Hello javaScript 1");
}

var printSomeThing2 = new Function(
    "console.log('Hello JavaScript 2')"
    );
    
var printSomeThing3 = function() {
    console.log("Hello JavaScript 3")
}    
printSomeThing1();
printSomeThing2();
printSomeThing3();


// Parameterized function:
function print(num){
    for (i = 0; i < num; i++) {
        console.log("Print some thing !");
    }
}
print(10);
*/

/*
// function parameters:
function printSign(number){
    if(number > 0) {
        console.log("Number positive!");
    }
    else if (number < 0 ) {
        console.log("Number Negative");
    }
    else {
        console.log("The number is zero!");
    }
}
// calling a function.
printSign(-5);
printSign(5);
printSign(0);
*/

/*
// returning values from functions:
function multiplyNumbers(num1,num2) {
    return (num1 * num2);
}
function isEven(num) {
    if(num % 2 == 0) {
        return console.log("Number is even !");
    }
    else {
        console.log("Number is odd !");
    }
}
console.log(multiplyNumbers(5,3));

isEven(5);
isEven(6);
*/


/*
// FunctionScopeExample.js
var arr = [1, 2, 3, 4, 5, 6, 7]; //'arr' is in the global scope (it is accessible from anywhere)
function countEven(array)
{
    var sum = 0; // 'sum' is in the local scope (only accessible from the function)
    for (counter = 0; counter < array.length; counter++)
    {
        if (array[counter] % 2 == 0)
        {
            sum += 1; 
        }
    }
    return sum;
}
console.log(countEven(arr));
*/


/*
var arr = [1,2,3,4,5,6,7,8,9,10];
function countEvenNumbers(arrayVariable)
{
    var countNumbers = 0;
    for(counter = 0; counter < arrayVariable.length; counter++) 
    {
        if(arrayVariable[counter] % 2 == 0)
        {
            countNumbers += 1;
        }
    }
    return countNumbers;
}
console.log("Even Numbers in the array: "+countEvenNumbers(arr));
*/


/*
// function overloading:
 function print(lang) {
     console.log("language Name: "+ lang);
 }

 function print(lang1,lang2) {
     console.log("language Names: "+lang1+" , "+lang2);
 }

 print("C#");
 print("javaScript","swift");
*/

/*
// creating object:
var cup = {
    color: "blue",
    design: "unique",
    weight: "light",
    break: "non-breakable",
    hotTime: function() {
        console.log("Half hours!");
    }
}


var nokia7_2 = {
    color: "Charcoal,Cyan Green",
    weight: "180",
    display: "6.3 Full HD",
    Camera: "48 MP",
    operatingSystem: "Android 9 pie",
    camera: function() {
        console.log("Can take low-light images.");
        console.log("Can get the whole picture.");
        console.log("Can take video HDR.");
    },
    battery: function() {
        console.log("Can go without charging for upto two days.");
    },
    replyWritten: function() {
        console.log("faster.");
    },
    simSupport: function() {
        console.log("Dual SIM support.");
    },
    microSDcard: function() {
        console.log("Support for upto 512 GB.");
    }
};
*/


/*
// Primitive types:
var num = 5;
console.log("Copy of num " +(num + 1));
console.log("Original value of num " +num);
*/


/*
// reference types:
var arrNumber = [1,2,3,4,5];
function addArray(arr) {
    arr.push(1);
}
addArray(arrNumber);
console.log("Original array now "+arrNumber);
*/




/*
// advance concept of primitive types:
var numberVariable = new Number();
numberVariable = 5;

function addNumber(num) {
    console.log("Number changed in function:"+ (num+1)) ;
}
addNumber(numberVariable);
console.log("This is original number "+ numberVariable);
*/


/*
let george, chad;
function person(first_name, last_name) 
{
  return {
    first_name: first_name,
    last_name: last_name,
    fullName: function () 
    {
      return this.first_name + ' ' + this.last_name;
    }
  }
}

// call function
george = new person("George", "Brown");

//console.log(george.fullName());

chad = new person("Chad", "Hill");
console.log(george);
console.log(chad);
*/


/*
var blu, star;

function ballPen(name,colors,grip,writingStyle) 
{
    return {
        penName: name,
        inkColors: colors,
        grip: grip,
        writting: function() {
            console.log(writingStyle);
        }
    }
}

blu = new ballPen("Signature BLU","Red, Green, Blue","matte","Smooth");
console.log(blu);
star = new ballPen("Signature Star","Red, Green, Blue","matte","Bold writing");
*/

/*
// WhatIsAStringExample.js
var str1 = "Some text saved in a string variable";
var str2 = 'text enclosed in single quotes';
console.log(str1);
console.log(str2);
*/

/*
// StringWrapperExample.js
var str1 = "This is a String"; // primitive
var str2 = new String(str1); // object
var str3 = String(str2); // primitive
*/


/*
// BasicMethodsExample.js
var str = "Hello World!";
console.log(str.length);
console.log(str[7]);
console.log(str.charAt(7));
*/




/* Search Methods */
// var str = "ABC ACB BAC BCA CAB CBA";

// console.log(str.replace('A', 'Z')); // only replaces first occurrence
// console.log(str);


// console.log(str.search(/A/g)); // searches for the first occurrence of 'A'
// console.log(str.indexOf('B')); // returns the first occurrence of 'B'
// console.log(str.lastIndexOf('B')); // returns the last occurrence of 'B'




// /* Substring Methods */
// var str = "Hello World!";
// console.log(str.substr(0,5));

// console.log(str.substring(6,12));




// /*  Other string Methods */
// var str1 = new String("javaScript");
// console.log(str1.valueOf());

// var str2 = "The weather is great today";
// console.log(str2.split(" "));

// var str3 = "   Hello World   ";
// console.log(str3.trim());
// console.log(str3.trimLeft());
// console.log(str3.trimRight());


// RegexSyntaxExample.js

// // literal syntax
// const literalRegex = /y$/g; // matches any string that ends with a 'y'

// console.log("Telepathy".search(literalRegex)); // prints the last index as the word ends with a 'y'
// console.log("Hymn".search(literalRegex)); // prints -1 as the word doesn't end with a 'y'

// // function constructor syntax
// const constructorRegex = new RegExp('^T', 'g'); // matches any string that starts with a 'T'

// console.log("Telephone".search(constructorRegex)); // prints 0 as the word starts with a capital 'T'
// console.log("telephone".search(constructorRegex)); // prints -1 as the word doesn't start with a capital 'T'


// // RegexMethodsExample.js
// const literalRegex = /y$/g; // matches any strings that end with a 'y'

// console.log(literalRegex.test("Telepathy")); // prints true as the last index as the word ends with a 'y'
// console.log(literalRegex.test("Hymn")); // prints false as the word doesn't end with a 'y'
// console.log(literalRegex.exec("Telepathy")); // prints an array as the last index as the word ends with a 'y'
// console.log(literalRegex.exec("Hymn")); // prints null as the word doesn't end with a 'y'



// UsingRegexExample.js
// Replace all white spaces, tabs and newlines with a single space
let text = 'text    with    lots of       spaces\n' +
           '      and lots of tabs       ';

console.log(text);
console.log(text.replace(/\s\s+/g, ' '));















