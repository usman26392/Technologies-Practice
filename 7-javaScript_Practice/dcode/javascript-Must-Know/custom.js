

//------------------------------------ 7 MUST KNOW JavaScript Tips and Tricks -------------------

// 1) event object's destructuring

// example1:
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function({target}) {
//     console.log(target)
//     if(target.className == "btn active") {
//         // do something
//         console.log("button pressed!")
//     }
// });


// example2:
// let btn = document.querySelector(".hide");
// btn.addEventListener("click", function({target}) {
//     if(target.classList.contains("btn--primary")) {
//         // do something
//         console.log("button primary clicked");
//     }
// });


// 2) deep copy with json

// const person = {
//     name: "DOM",
//     age: 38,
//     skills: [
//         "programming",
//         "cooking",
//         "Tennis"
//     ]
// }

// // way1:
// const personCopy = JSON.parse(JSON.stringify(person));
// console.log(personCopy);
// console.log(personCopy.skills == person.skills);  // false  How ?????

// // way2: with same copy
// const personCopy2 = {...person};
// console.log(personCopy2);
// console.log(personCopy2.skills == person.skills); // true




// 3 default OR operator approach

// let person = {
//     // UserName: "Usman",
//     getUserName: function() {
//         console.log(this.UserName);
//     }
// };


// let personName = person.getUserName();

// // way1:
// // if(personName === null) {
// //     personName = "Rehan";
// // }

// // way2: simple
// personName = person.getUserName() || "Rehan";
// console.log(personName);


// 4) advanced Array Searching 
// const occupations = ["Lawyer", "Doctor", "Programmer", "Developer", "Chef", "Manager"];
// // let result = occupations.find((occp)=> { return occp.startsWith("C")});
// // or
// let result = occupations.find(occp => (occp.startsWith("C")));

// console.log(result);


// 5) remove Array duplicates
// const numbers = [5, 10, 5, 20];

// const setValues = new Set(numbers);
// console.log(setValues);

// const withoutDuplicate = Array.from(setValues);
// console.log(withoutDuplicate);

// or
// const withoutDuplicate = Array.from(new Set(numbers));

// 6) self-invoking function or immediate invoked function expression (IIFE)
// const someComplexValue = (function() {
//     const a =  10,
//           b = 20;
//     if(a > b) {
//         return a * b;
//     }
//     return b / a;
// })();

// console.log(someComplexValue); // 2



// 7) array copy with spread operator ...
// let numbers = [5, 19, 24, 36];
// let copyNumbers = [...numbers];

// console.log(copyNumbers);
// console.log(copyNumbers === numbers ) // false


// --------------------------------------- 5 MUST KNOW JavaScript DOM Methods ---------------------------
// 1. closest()
// const navLink = document.querySelector(".navigation-list__link");

// // finding a closest parent 
// console.log(navLink.closest(".navigation-list__item"));
// console.log(navLink.closest(".navigation-list"));
// console.log(navLink.closest("nav"));

// 2. append()
// let list = document.querySelector(".empty-list");

// let listItem = document.createElement("li");
// listItem.textContent = "News";

// let listItem2 = document.createElement("li");
// listItem2.textContent = "About";

// let listItem3 = document.createElement("li");
// listItem3.textContent = "Blog";

// list.append(listItem, listItem2, listItem3);


// 3. insertAdjacentHTML() or insertAdjacentElement()
// let box = document.querySelector(".box");
// box.insertAdjacentHTML("afterend" , "<p>This is also a text appended</p>")

// let para = document.createElement("p");
// para.textContent = "this appended text";
// box.insertAdjacentElement("beforebegin", para);

// 4. matches()
    // let div = document.querySelector("div");
    // if(div.matches(".box")) {
    //     console.log("yes that is exist");
    // }

// 5. replaceWith()
// let box = document.querySelector(".box");
// let para = document.createElement("p");
// para.textContent = "this is a para text!";
// para.className = "light-para";
// box.replaceWith(para);

// -------------------------------- Another 5 MUST KNOW JavaScript DOM Methods -----------------------
// 1. scrollIntoView()
// let gotElement = document.querySelector(".important-para");

// // example:1
// // gotElement.scrollIntoView({
// //     behavior: "smooth"
// // });

// // example:2
// document.querySelector(".btn").addEventListener("click", function() {
//     gotElement.scrollIntoView({
//         behavior: "smooth"
//     });
// });

// 2. contains()
// let navList = document.querySelector(".navigation-list");
// let navLink = document.querySelector(".navigation-list__link");
// console.log(navList.contains(navLink));

// 3. cloneNode()
let list = document.querySelector(".color-list"),
    item = document.querySelector(".color-list__item"),
    copyItem = item.cloneNode(true);

    list.appendChild(copyItem)


