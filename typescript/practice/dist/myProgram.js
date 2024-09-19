"use strict";
// Topics
/**
 * Basic data types
 * number, string, boolean
 * arrays, tuples
 * any, unknown, never, void
 * enum
 */
let id = 12;
let userName = "Muhammad Usman";
let isLogin = true;
// array data type
let books = [
    "Islamiat",
    "Math",
    "Computer Science",
    "Urdu",
    "English",
];
// tuple data type
let userAuthentication = [true, "allowed"];
// data type "any",
// as much as possible. it should not use this type
let title = "Hello world";
// void , when function does not return any thing.
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(10, 15);
// we use data types when i want to return through function some value. 
function multiplyNumbers(a, b) {
    return a + b;
}
multiplyNumbers(10, 15);
// enum
var userData;
(function (userData) {
    userData["name"] = "Muhammad Usman";
    userData[userData["age"] = 32] = "age";
})(userData || (userData = {}));
console.log("age " + userData.age);
// union type
let a;
let box = {
    title: "Hello typescript",
    desc: "This is typescript very good"
};
let colors = "Orange";
function printUserInfo({ name, age, email }) {
    return `${name}, ${age}, ${email}`;
}
let userInfo = {
    name: "usman",
    age: 32,
    email: "usman@mail.com"
};
printUserInfo(userInfo);
const sectionParameters = {
    title: "hellow",
    desc: "lorem ipsum"
};
function section({ title, desc }) {
    return `${title}, ${desc}`;
}
section(sectionParameters);
function socialCard(socialCardParameter) {
    socialCardParameter.desc = "Hello world!";
}
/**
 *  How to write types with functions
 */
function printSomeThing() {
    console.log("Muhammad Usman");
}
function divisionNumber(num1, num2) {
    return num1 / num2;
}
/**
 * Type assertion
 */
let someValue = "Hello, Typescript!";
// Assert that someValue is a string
let strlength = someValue.length;
console.log(strlength); // 17
// way2:
let strlength2 = someValue.length;
console.log(strlength); // 17
// example:
let headingTitle = document.querySelector("h1");
