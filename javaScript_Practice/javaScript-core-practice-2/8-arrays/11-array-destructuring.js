/**
 * ---------- array destructuring ------------
 */

"use strict";

//   let num = [10,20,30];
//   let[x,y,z] = num;
//   console.log(x);   


/**
 * --------- old way ------------------
*/

// let course = ["javascript","sixMonth","geekyShows"];
// let lang = course[0];
// let dur = course[1];
// let tut = course[2];
// console.log(lang);

/**
 * --------------- new way with destructuring --------
 */

 let course = ["javascript","sixMonth","geekyShows"];
 let[lang,dur,tut] = course;
 console.log(lang);