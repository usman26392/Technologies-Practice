

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

//  example: Technique 1
// Append Multiple Child Elements to a Parent Element

    // function createItems(text) {
    //     let li = document.createElement("li");
    //     li.textContent = text;
    //     return li;
    // }

    // function appendChildrens(parent, childrens) {
    //     childrens.forEach(function(child) {
    //         parent.appendChild(child);
    //     });
    // }

    // let myList = document.querySelector(".fruit-list");
    // let items = [ createItems("mango"), createItems("Banana"), createItems("Pomegranate")];

    // console.log(items);

    // appendChildrens(myList, items);

// way2:
    // function createItems(text) {
    //     let li = document.createElement("li");
    //     li.textContent = text;
    //     return li;
    // }

    // let myList = document.querySelector(".fruit-list");
    // let items = [ createItems("mango"), createItems("Banana"), createItems("Pomegranate")];

    // console.log(items);

    // items.forEach(function(itm) {
    //     myList.appendChild(itm);
    // });






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



// -------------------- Node.nextElementSibling -----------------------------------
// The 'nextElementSibling' read-only property in the Javascript DOM allows you to
//  get the next 'Element' sibling of another Node/Element.
// let vegList = document.querySelector(".vegetables"),
//     spinachItm = vegList.querySelector(".item2");

//     // let siblingOfitem = spinachItm.nextElementSibling;
//     // console.log(siblingOfitem)


// ---------------------------- outerHtml property --------------------------------
// The Element.outerHTML property of the Document Object Model allows you to.
//  both set and get the outerHTML of an Element. This is a simple HTML string,
//  inclusive of the opening and closing tags.

// let vegList = document.querySelector(".vegetables");
// // getting outerHtml
// console.log(vegList.outerHTML);
// // setting outerHtml
// console.log(vegList.outerHTML = "<p>This is replaced from ul</p>");


// ------------------- Element.querySelector("css selector") ---------------------------
// querySelector lets you find the first element that matches the css selector.

// example-1
// let title = document.querySelector("h1");
// console.log(title);

// example-2
// let title2 = document.querySelector(".title2");
// console.log(title2);

// example-3
// let box = document.querySelector(".box-1");
// console.log(box)

// example-4
// let container = document.querySelector(".container-2");
// console.log(container.querySelector(".box-1"));



// ------------------------ Element.querySelectorAll() ------------------
// querySelectorAll lets you find a list of elements that matches the css selector.

// example-1
// let elms = document.querySelectorAll(".card");
// console.log(elms);

// iteration with foreach loop
// elms.forEach(function(el, i) {
//     el.classList.add("abc")
// });

// // iteration with for loop
// for (let i = 0; i < elms.length; i++) {
//     const el = elms[i];
//     el.classList.add("wow");   
// }


// // iteration with for-of loop
// for (const el of elms) {
//     el.classList.add("zabardast")  
// }


// example-2
// let listItm = document.querySelectorAll("li");
// console.log(listItm);

// example-3
// let tab = document.querySelector(".tabs");
// console.log(tab.querySelectorAll("li"));





// ------------------------ event bubbling ------------------------
 
// examples of event bubbling:
// event bubbling may yey hota hay k , event: child to parent ki taraf flow karta hay
// jub hum child element par click kartay hayn.
// or agar sirf parent element par click hoga toh sirf wohi occur hoga.
// by default event bubbling hoti hay.
// us ko stop karnay k liyey stopPropagation ka istamaal kartay hayn child par.


// example-1

// let para = document.querySelector(".para"),
//     paraStrong = para.querySelector("strong");

//     // parent
//     para.addEventListener("click", function() {
//         alert("(parent) para element event clicked");
//     });

//     // child
//     paraStrong.addEventListener("click", function(e) {
//         alert("(child) strong element event clicked");
//     });



// example-2

// hum is flow (event bubbling) ko propagation ki help say rokh b sakhtay hayn.
// is may yey hoga k jub child par click hoga to parent ka event occur nai hoga.
// is example may jis element par click hoga, bus usi element ka event occur hoga.

// let para = document.querySelector(".para"),
//     paraStrong = para.querySelector("strong");

//     // parent
//     para.addEventListener("click", function() {
//         alert("(parent) para element event clicked ");
//     });

//     // child with stop propagation
//     paraStrong.addEventListener("click", function(e) {
//         e.stopPropagation();
//         alert("(child) strong element event clicked");
//     });



// ------------------------------------ event capturing ---------------------------
// examples of event capturing
// ab dobara child par click kartay hayn, toh ab paylay parent event occur hoga fir child event.

// let para = document.querySelector(".para"),
//     paraStrong = para.querySelector("strong");

//     // parent with true argument
//     para.addEventListener("click", function() {
//         alert("(parent) para element event clicked");
//     }, true);

//     // child
//     paraStrong.addEventListener("click", function(e) {
//         alert("(child) strong element event clicked");
//     });




// stopPropagation agar , event bubbling may lagay ga toh wo bubbling honay say rokay ga,
// event bubbling may hum, stopPropagation child par laga tay hayn. ta k wo parent event par na jae.

// event capturing by default false hoti hay, matlab yey hay k event, parent to child nai jata khud say.
// jub hum child par click kartay hayn.(matkab yey b hay k by default event capturing nai hoti.)
// or agar hum layjana chahatay hayn toh hummay addEventListener ka second argument true pass karna hota
// hay, parent element k liyey.

// event bubbling ho ya event capturing , dono casses may hum child element par click kartay hayn.
// by default event bubbling hoti hay.
// event capturing humay khud say karni hoti hay. agar zarorat ho toh.



// ------------------------------- textContent vs innerHTML ------------------
// Although commonly used interchangeably, there is a major difference between the textContent and innerHTML
//  properties when working with Elements in JavaScript, and it's important you know what that is.
//  The major difference is that when using the innerHTML property, the client browser will actually
//  interpret the content as HTML markup, and apply that change to the DOM/Window.
//  On the other hand, the textContent property will only change the the text, preserving any HTML markup.

// let container = document.querySelector(".container-1");

//     // getting
//     console.log(container.textContent);
//     console.log(container.innerHTML);

    // setting:
    // textContent
    // container.textContent = "this is updated text";
    // container.textContent = "this is <strong>updated</strong> text "; // wrong

    // innerHtml
    // container.innerHTML = "<span>This is updated text and tag</span>";
    // container.innerHTML = "this is <strong>updated</strong> text ";



// ------------------------------- insertAdjacentHTML --------------------------- 
// The Element.insertAdjacentHTML() method within the JavaScript DOM (Document Object Model)
//  allows you to insert a HTML string in one of four positions adjacently to another element.
//  This makes it a very powerful alternative to the innerHTML property.

//  The insertAdjacentHTML() method also will not disrupt any children of the target element
//  meaning that event listeners added to children won't be automatically removed - which is unfortunately
//  the case with the innerHTML property.

//  In this video I'll show you how to use the insertAdjecentHTML() method and how in most cases
//  you can use it as a great alternative to the innerHTML property. 

//  where insert positions
/**
 * beforebegin - insert, before element
 * afterend -  insert, after element.
 * beforeend -  insert, after last text child
 * afterbegin - insert,  before first text child
 */

    // let para = document.querySelector(".special-para");

    // para.insertAdjacentHTML("beforebegin", "<strong>wow</strong>");
    // para.insertAdjacentHTML("afterend", "<strong>wow</strong>");
    // para.insertAdjacentHTML("afterbegin", "<strong>wow</strong>");
    // para.insertAdjacentHTML("beforeend" , "<strong>wow</strong>");


// ----------------------- Element.insertAdjacentElement() -------------------
// Similar to both the appendChild() and insertBefore() methods, the insertAdjacentElement() method
//  within the JavaScript Document Object Model lets you insert an HTML Element relative
//  (or adjacently) to another HTML Element.

// This particular method can provide you a lot of flexibility when inserting an element due
//  to its four possible positions of insertion: beforebegin, afterbegin, beforeend and afterend.
































    













