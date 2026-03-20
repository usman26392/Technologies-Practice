
# Data types and variables
 - datatype ( string, number, boolean, object ...)
 - variables 
 - scope
 - var, let, const (keywords for declaring variables)

# operators and expressions
 - arithmetic operators (+, - , * , / , **, % , ++, --)
 - comparisons operators (<, >, >=, <=, ==, !=, ===, !=== )
 - logical opertors      ( && , || )
 - bitwise operators     (& , | )
 - assigment operators ( = )

# conditional statements
 - if
 - if,else
 - else if
 - switch

# loops
 - for
 - while
 - do while
 - for each

# functions
 - create a function
 - parameterized func
 - argument object
 - default parameter
 - rest parameters
 - return statement
 - variable scope
 - block scope
 - variable hoisting
 - closure
 - function expression
 - anonymous func
 - arrow/flat func
 - IIFE (immediate invoke function expression)
 - type on operator in fn
 - undefined and null in fn
 - var, let, const in fn
 - recursion
 - callback fn

# Object
 - objecy literals
 - object constructor
 - dynamic-properties-methods
 - factory-function
 - constructor-function
 - check-instances
 - for-in-loop
 - constructor-class
 - private-prop-methods
 - prototype
 - prototype-object-concepts
 - prototype-inheritance
 - super-sub-classes
 - method-overriding
 - multilevel-inheritance
 - composition-or-mixin
 - ES6-class
 - default-constructor
 - parameterized-constructor
 - ES6-inheritance
 - static-method
 - object-destructuring
 - passed by Value VS Passed by Reference.




# Arrays
 - Array literal
 - Array constructor
 - length property
 - iterating array with for loop
 - iterating array with foreach loop
 - iterating array with for-of loop
 - Array prototype methods
 - Array Destructuring

# string
 - string overview
 - string concatenation
 - string escape
 - template literals
 - tag template
 - length property
 - string prototype methods

#  Numbers
 - number literals
 - number constructor
 - number with string
 - NaN
 - number prototype methods

# Math
 - Math literal
 - Math Constructor
 - Math prototype properties
 - Math prototype Methods


# Date 
 - Date literal
 - Date constructor
 - Date prototype Methods

# error / exception handling
 - try catch



# strict mode


# ------------------------------------------------ ES6 Topics -------------------------

 - Arrow function (Shorthand syntax for defining anonymous functions.)
 - let and const keywords (Block-scoped variable declarations.)
 - template string / literals (A more flexible way to concatenate strings.)
 - destructuring assignment ( Easily extract values from arrays or objects. )
 - default parameters
 - spread operator (...)
 - object literal enhancement
 - new string methods
 - Set API/ constructor function
 - classes  (A more concise way to create constructor functions and prototypes.)
 - Modules ( Support for modular programming with import and export statements. )
 - Promises ( A more flexible way to handle asynchronous operations. )


# ----------------------------------------------- OOP in javascript ------------------------------
 - object literal
 - updating properties
 - class
 - constructor
 - class Methods
 - Method chaining
 - inheritance
 - constructor under the hood
 - prototype
 - prototype inheritance
 

# ------------------------------------------------- DOM ------------------------------------
 # access elements
  - document.getElementById("p1");
  - document.getElementsByTagName("ul");
  - document.getElementsByClassName("list");
  - document.querySelectorAll(".list-1 li");
  - document.querySelectorAll(".list");
  - length property

 # document-methods-properties
  - console.log(document);
 
 # Node Object
  - nodeName
  - nodeValue
  - nodeType

 # attributes object
  - el.attributes

 # DOM traversal
  - el.parentNode
  - el.parentElement
  - el.childNodes
  - el.children
  - el.firstChild
  - el.firstElementChild
  - el.lastChild
  - el.lastElementChild
  - el.previousSibling
  - el.previousElementSibling
  - el.nextSibling
  - el.nextElementSibling

# creating nodes / element node
  - document.createElement("h2");
  - document.createTextNode("This is a text content");
  - document.createComment("This is a comment");

# append nodes / element nodes
  - myNewEl.appendChild(myNewTxt);
  - or myEl.appendChild(myNewEl);
  - myNewEl.textContent = "New updates";
  - myParentElNode.appendChild(myElNode);
  - normalize()

# insert nodes
 - myParentElNode.insertBefore(movElNode,elBefore);
 - newElNode.appendChild(txtNode);
 - myParentElNode.insertBefore(newElNode,elBefore);
 - myEl.cloneNode(true);
 - insertAdjacentElement()
    - myliElNode.insertAdjacentElement("beforebegin",movElNode);
    - myliElNode.insertAdjacentElement("beforeend",movElNode);
    - myliElNode.insertAdjacentElement("afterbegin",movElNode);
    - myliElNode.insertAdjacentElement("afterend",movElNode);
 - insertAdjacentHTML()
    - myliElNode.insertAdjacentHTML("beforebegin",movElNode);
    - myliElNode.insertAdjacentHTML("beforeend",movElNode);
    - myliElNode.insertAdjacentHTML("afterbegin",movElNode);
    - myliElNode.insertAdjacentHTML("afterend",movElNode);
 - insertAdjacentText()



# get and set content
 - elNode.innerHTML = " <li>this is a li</li>";
 - elNode.innerText = "This is a paragraph 3";
 - elNode.textContent = "This is a paragraph3";

# remove nodes
 - elParentNode.removeChild(elChildNode);
 - elParentNode.replaceChild(newELchild,oldElchild)
  

# element's get and set attributes
 - pElNode.attributes
 - hdgElNode.setAttribute("class","hdg__one");
 - hdgElNode.setAttribute("style","color:red");
 - hdgElNode.getAttribute("class")
 - hdgElNode.removeAttribute("class");
 - hdgElNode.hasAttribute("class")


# styling with javascript
 - hdgElNode.style.color = "green";
 - hdgElNode.style.cssText = "color:white; background-color: #000000;";
 - hdgElNode.style  //  getting style
 - hdgElNode.className = "hdg-2";
 - hdgElNode.classList  // property
    - hdgElNode.classList.add("heading-1");
    - hdgElNode.classList.add("heading-1","heading-2");
    - hdgElNode.classList.remove("hdg-1");
    - hdgElNode.classList.replace("hdg-1","hdg-2");
    - hdgElNode.classList.contains("hdg-1");
    - hdgElNode.classList.toggle("hdg-1");
    - ...


# events
 - event binding
 - overwriting event handlers
 - el.addEventListener("eventName", eventHandler);
 - binding event and event handler more than one together.
 - el.removeEventListener("click", eventHandler);
 - event propagation
   - bubbling phase --> default
   - capturing phase
   - stopPropagation() for bubbling phase
   - target phase
 - event object
 - mouse events ==> mousedown, mouseup, click, dbclick , ...
 - focus event, blur event
 - keyboard events ==> keydown, keypress, keyup , .....
 - text event
 - event delegation ( technique for dynamic elements )
 - form validation



# --------------------------------------------------- Advance javascript --------------------------------
 - prototype inheritance
 - prototype inheritance 2 ( difference between 'prototype' and  '__proto__')
 - prototype functions methods ( call(), apply(),  bind() )
 - class
 - factory function
 - constructor function
 - this keyword
 - Arrow function
 - Higher order function
 - closure
 - pass by value VS pass by reference
 - XMLHttpRequest() ( modern browsers have a built-in XMLHttpRequest object to request data from a server. )
 - async and callback (request/response data from a server)
 - promises (request/response data from a server)
 - async-await VS promise
 - fetch API (request/response data from a server)
 - dispatchEvent()

 






