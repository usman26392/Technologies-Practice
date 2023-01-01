

// ----------------------------- create element --------------------------------------
// Creating HTML elements dynamically

// let newEl = document.createElement("div");
// console.log( newEl);
// console.dir(newEl);




// ------------------------------- setAttribute ------------------------
// changing the value of attribute 

// let inputEl = document.querySelector("input");
// inputEl.setAttribute("value", "burger");

// example:
// let newEl = document.createElement("input");
// newEl.setAttribute("type", "password");
// newEl.setAttribute("placeholder", "password");
// document.body.appendChild(newEl);



// -------------------------------- textContent ------------------------------------------
// changing the text content in an element

// let el = document.querySelector(".title");

// getting text of element
// console.log( el.textContent );

// setting text of an element
// el.textContent = "wow"




// ------------------------------- innerHTml ----------------------------------------------
// changing inner html of element

    // let el = document.querySelector(".title");

    // // setting
    // el.innerHTML = "<em>DOM javascript</em>"

    // // getting
    // console.log(el.innerHTML);


// --------------------------------- appendChild() -----------------------------------------
// appending a child node to a parent

    // // parent element
    // let fruitList = document.querySelector(".fruit-list");

    // // new list item
    // let item = document.createElement("li");
    // item.textContent = "Mango";

    // fruitList.appendChild(item);

// example:
    // let fruitList = document.querySelector(".fruit-list");

    // let fruits = ["Mango", "Banana", "Orange"];
    
    
    // let listItems =  fruits.map( (fr)=> {
    //     let item = document.createElement("li");
    //      item.textContent = fr
    //     return fruitList.appendChild(item)
    // });

    // console.log( listItems );


// example:
    // let fruitList = document.querySelector(".fruit-list");
    // let fruits = ["Mango", "Banana", "Orange"];

    // for(let fruit of fruits) {
    //     let item = document.createElement("li");
    //     item.textContent = fruit;
    //     fruitList.appendChild(item);
    // }


// ----------------------------- document fragment ----------------------------
// document fragment aik tarhan ka DOM hi hay,
// magar ye aik tarhan ka invisible document hota hay,
// jub hummay chayey hota hay tub hum real DOM may append kar daytay hayn.

// is ki example yey ho sakhti hay,k  hummay jesy elements chayen,
// wo hum bana kar rakh layn gay, document fragment may,
// jub zarorat ho gi un elements ki tub hum DOM may append kardayn gay.


// let fruitList = document.querySelector(".fruit-list"),
//     docFrag = document.createDocumentFragment(),

//     item1 = document.createElement("li"),
//     item2 = document.createElement("li");

//     item1.textContent = "Mangoes";
//     item2.textContent = "Banana";
    
//     // appends item1, item2 inti fragment.
//     docFrag.appendChild(item1);
//     docFrag.appendChild(item2);


//     console.log( docFrag );
//     // now append docFragment(invisible DOM) into fruitlist (Real DOM element)
//     fruitList.appendChild(docFrag);

//     console.log( docFrag );


// -------------------------- classList property ----------------------------
// The 'Class List' (HTMLElement.classList property) allows you to powerfully manipulate
//  the classes attached to an HTML Element. You can use it to add, remove,
//  toggle and even replace classes on an element.

// let mainTitle = document.querySelector(".title");

// // console.log(mainTitle.classList);

// // add class on an element
// mainTitle.classList.add("display-1");

// or add more than one class on an element
// mainTitle.classList.add("display-1", "bold");

// remove a class
// mainTitle.classList.remove("title");

// // remove classes
// mainTitle.classList.remove("title", "bold");

// toggle a class
// let result = mainTitle.classList.toggle("display-1");
// console.log( result )

// if use true as an argument than toggle function will work as a add function,
// otherwise will work as a remove function, by default second argumeny will be false.
// mainTitle.classList.toggle("display-1", true);



// replace with other class
// mainTitle.classList.replace("display-1", "myNewTitle");

// contain
// let result = mainTitle.classList.contains("display-1");
// console.log(result)



// ------------------------ dataset property ---------------------------------
// The 'Dataset' (HTMLElement.dataset property) allows you to easily
//  set or get the values of custom 'data-' prefixed HTML attributes on your elements.
//  It works like a regular object and it gives you the power to
//  do pretty interesting stuff with the components on the page.


// let listItem = document.querySelector("li.active");
// console.log( typeof listItem.dataset);


// console.log(listItem.dataset);

// // getting data-id's value
// console.log(listItem.dataset.id);

// // setting data-id's value
// console.log(listItem.dataset.id = "graphics");


// example:
// let tabsList = document.querySelectorAll(".tabs li"),
//     tabsContentEl = document.querySelector(".tabs-content");

// tabsList.forEach(function(el, i) {
//     el.addEventListener("click", function(evt) {
//         let currentList = evt.target;
//         // console.log(evt);
//         // console.log(evt.target.parentElement.children);
//         // for tabs list
//         for (const li of evt.target.parentElement.children) {
//             // console.log(li);
//             li.classList.remove("active");
//         }

//         currentList.classList.add("active");


//         // for tabs content
//         let currentListData = evt.target.dataset;
//         // console.log(currentListData);
//         // console.log(currentListData.id)
//         let currentTabsContentEl =  document.querySelector(`#${currentListData.id}`);
//         // console.log(currentTabsContentEl.parentElement.children);
//         let tabsContentChildren = currentTabsContentEl.parentElement.children;
        
//         for (const chld of tabsContentChildren) {
//             // console.log(chld)    
//             chld.classList.remove("active");
//         }
//         currentTabsContentEl.classList.add("active");
//     })
// });





// ----------------------------- Node.insertBefore -------------------------
// The 'insertBefore' method in the Javascript DOM allows you to insert a new node
//  onto an existing parent node before one of the other child nodes.
//  This is commonly used with HTML Elements (which are a type of Node).

// let vegetablesList = document.querySelector(".vegetables"),
//     item2 = document.querySelector(".item2");

//     let onionItem = document.createElement("li");
//     onionItem.textContent = "onion";
//     vegetablesList.insertBefore(onionItem, item2);



    // example:
    // let vegetablesList = document.querySelector(".vegetables"),
    //     item2 = document.querySelector(".item2");

    // let onionItem = document.createElement("li");
    // onionItem.textContent = "onion piyaz";
    
    // // this function opposite to appendChild
    // function addToBeginning(parent, toInsertEl) {
    //     let firstEl = parent.firstElementChild;
    //     parent.insertBefore(toInsertEl, firstEl);
    // }

    // addToBeginning(vegetablesList, onionItem);


// ------------------------------ Node.cloneNode() ------------------------
// Using the Node.cloneNode() method in Javascript, you able to make a copy of a Node 
// (most commonly an element). It allows for a deep copy and also a shallow copy.

// let vegetablesList = document.querySelector(".vegetables"),
//     item2 = document.querySelector(".item2");

//     item2.addEventListener("click", function(e) {
//         console.log(e)
//     })

//     let vegetablesItems = vegetablesList.children,
//         spanichItem = vegetablesItems[1];

//     let spanichItemCopy =  spanichItem.cloneNode(true);

//     vegetablesList.appendChild(spanichItemCopy);



// -------------------- Node.nextElementSibling ----------
// The 'nextElementSibling' read-only property in the Javascript DOM allows you to
//  get the next 'Element' sibling of another Node/Element.
// let vegList = document.querySelector(".vegetables"),
//     spinachItm = vegList.querySelector(".item2");

//     // let siblingOfitem = spinachItm.nextElementSibling;
//     // console.log(siblingOfitem)







// example of event bubling
// let vegList = document.querySelector(".vegetables"),
//     spinachItm = vegList.querySelector(".item2");

//     // parent
//     vegList.addEventListener("click", function() {
//         alert("list event");
//     });

//     // child
//     spinachItm.addEventListener("click", function(e) {
//         // e.stopPropagation()
//         alert("itm event");
//     })


// example of event capturing
// let vegList = document.querySelector(".vegetables"),
//     spinachItm = vegList.querySelector(".item2");

//     // parent
//     vegList.addEventListener("click", function(e) {
//         // e.stopPropagation();
//         alert("list event");
//     }, true);

//     // child
//     spinachItm.addEventListener("click", function(e) {
//         alert("itm event");
//     })


// stopPropagation agar , event bubbling may lagay ga toh wo bubbling honay say rokay ga,
// or agar event capturing may lagay ga toh , event capturing honay say rokay ga.
















// ------------------------ querySelectorAll() ------------------


// let elms = document.querySelectorAll(".title");
// console.log(elms);

// // iteration with foreach loop
// // elms.forEach(function(el, i) {
// //     el.classList.add("abc")
// // })

// // iteration with for loop
// // for (let i = 0; i < elms.length; i++) {
// //     const el = elms[i];
// //     el.classList.add("wow");   
// // }


// // iteration with for-of loop
// // for (const el of elms) {
// //     el.classList.add("zabardast")  
// // }
















    













