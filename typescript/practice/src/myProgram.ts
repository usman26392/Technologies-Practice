// Topics

/**
 * Basic data types
 * number, string, boolean
 * arrays, tuples
 * any, unknown, never, void
 * enum
 */

let id: number = 12;
let userName: string = "Muhammad Usman";
let isLogin: boolean = true;

// array data type
let books: string[] = [
  "Islamiat",
  "Math",
  "Computer Science",
  "Urdu",
  "English",
];

// tuple data type
let userAuthentication: [boolean, string] = [true, "allowed"];

// data type "any",
// as much as possible. it should not use this type
let title: any = "Hello world";



// void , when function does not return any thing.
function addNumbers(a: number, b: number): void {
  console.log(a + b);
}
addNumbers(10, 15);


// we use data types when i want to return through function some value. 
function multiplyNumbers(a: number, b: number): number {
  return a + b;
}

multiplyNumbers(10, 15);


// enum
enum userData {
    name = "Muhammad Usman",
    age = 32
}

console.log("age "+ userData.age);



// union type
let a: number | string;
// a = 10;
// a = "Usman"
// a = true


// type intersection
type horizontalCard = {
  title: string
}

type verticalCard = {
  desc: string
}

type mainCard = horizontalCard & verticalCard;

let box:mainCard = {
  title: "Hello typescript",
  desc: "This is typescript very good"
}


/**
 * type aliases: Primitives and object
 */

// Primitive type
type colorType = string;
let colors: colorType = "Orange";

// Object type
type UserInfoType = {
  name: string,
  age: number,
  email: string
} 

function printUserInfo({name, age, email}:UserInfoType): string  {
  return `${name}, ${age}, ${email}`
}

let userInfo = {
  name: "usman",
  age: 32,
  email: "usman@mail.com"
}

printUserInfo(userInfo);

/**
 * Interfaces
 */

interface CardInterface {
  title: string;
  desc: string;
}

const sectionParameters = {
  title: "hellow",
  desc: "lorem ipsum"
}

function section({title, desc}:CardInterface) {
  return `${title}, ${desc}`
}

section(sectionParameters)



// interface with extend
interface SocialCardInterface extends CardInterface {
  link: string;
}

function socialCard(socialCardParameter:SocialCardInterface):void {
  socialCardParameter.desc = "Hello world!"
}


/**
 *  How to write types with functions
 */

function printSomeThing():void {
  console.log("Muhammad Usman")
}

function divisionNumber(num1:number , num2: number): number {
  return num1 / num2;
}


/**
 * Type assertion
 */

let someValue: any = "Hello, Typescript!";

// Assert that someValue is a string
let strlength: number = ( someValue as string).length;
console.log(strlength); // 17

// way2:
let strlength2: number = (<string>someValue).length;
console.log(strlength); // 17


// example:
let headingTitle:HTMLHeadingElement = document.querySelector("h1") as HTMLHeadingElement;
