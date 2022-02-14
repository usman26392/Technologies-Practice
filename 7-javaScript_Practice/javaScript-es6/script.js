

// ----------------------- const keyword ------------------------


    // const pi = 3.142;
    // // pi = 10;   // not possible
    // // const pi = 10; // not possible
    // // console.log(pi);

    // function calcArea(r) {
    //     // pi = 10;  // not possible
    //     const pi = 10; // redeclaration possible in local scope/block scope. 
    //     console.log(`The area is ${pi * r * r}`);
    //     console.log(pi);
    // }
    // calcArea(5);
    // console.log(pi);





// --------------------------------- let keyword --------------------------


    // example-1

    // var x = 10;
    // if(x > 2) {
    //     x = 5;
    //     console.log("inside if block: " + x);
    // }
    // console.log("here x is in global scope: " + x);

    // ------------ with let keyword now ------------------------------
    // example-2

    // var x = 10; // x is in global scope 
    // // var k sath jo b variable declare hota hay kha wo global scope may ho
    // // ya phirh local scope may ho varible ka scope always global hi hoga.
    // if(x > 2) {
    //     let x = 5; // here x is in block scope with let keyword.
    //     console.log(`x inside of if block: ${x} with let keyword`);
    // }
    // console.log(`x is in global scope: ${x} with var keyword`);

    // example-3
    // let x = 10; // x is in global scope 
    // if(x > 2) {
    //     let x = 5; // here x is in block scope with let keyword.
    //     console.log(`x inside of if block: ${x} with let keyword`);
    // }
    // console.log(`x is in global scope: ${x} with let keyword`);

    // example-4
    // let x = 10; // x is in global scope 
    // if(x > 2) {
    //      x = 5; // here x is in block scope
    //     console.log(`x inside of if block: ${x}`);
    // }
    // console.log(`x is in global scope ${x} with let keyword`);



// --------------------- examples with DOM elements -----------------

    //------------------------  with var
    // is example may yey issue hay jub hum first li par click kartay hayn
    // toh output 4 ata hay , jub k 1 ana chayey tha.
    
    // var items = document.getElementsByTagName("li");
    // for(var x = 0; x < items.length; x++) {
    //     items[x].addEventListener("click", function() {
    //             console.log(x);
    //         });
    //     }
            
            
    //------------------------ with let
    // var items = document.getElementsByTagName("li");
    // for(let x = 0; x < items.length; x++) {
    //     items[x].addEventListener("click", function() {
    //         console.log(x);
    //     });
    // }




    // ----------------------- default parameters --------------------------

    // example-1
    // function printNumber(num) {
    //     console.log(num);
    // }
    // printNumber();

    // example-2
    // function printNumber(num = 10) {
    //     console.log(num);
    // }
    // printNumber();
    // // printNumber(11);


    // ------------------------------------ spread operator -----------------------
    // example-1
    // let meats = ["chicken", "Beef", "Mutton"];
    // console.log(...meats);

    // example-2
    // let nums1 = [1,2,3];
    // // let nums2 = [nums1,4,5,6];
    // let nums2 = [...nums1,4,5,6];

    // console.log(nums2);


    // example-3
    // let nums = [1,2,3];

    // function addNumbers(a,b,c) {
    //     console.log(a + b + c);
    // }

    // addNumbers(nums);
    // // addNumbers(...nums);



    // ---------------------------- template string ---------------------------
    // // let temp = `Hello, my name is Usman`;
    // let temp = `Hello,
    // my name is Usman`;
    // console.log(temp);

    // example-2
    // function printName(name, age) {
    //     // console.log("my name is " + name + " and " + "my age is "+ age +".");
    //     console.log(`my name is ${name} and my age is ${age}.`);
    // }

    // printName("usman", 29);



    // ----------------------- object literal enhancement ------------------------
    // ---------- with ES5

    // var beltname = "Crystal";
    // var belt = "Black";

    // var ninja = {
    //     name: beltname,
    //     belt: belt,
    //     chop: function(x) {
    //         console.log(`chopped the enemy ${x} times`);
    //     }
    // }

    // console.log(ninja.name);
    // ninja.chop(5);
    

    // -------------- with ES6
    // let beltname = "Crystal";
    // let belt = "Black";

    // let ninja = {
    //     belt, beltname,
    //     chop(x) {
    //         console.log(`chopped the enemy ${x} times`);
    //     }
    // }

    // console.log(ninja.beltname);
    // ninja.chop(5);


    // -------------------------- new string methods ---------------------------
    
    // .repeat()
    // .startsWith() // return true or false
    // .endsWith()   // return true or false
    // .includes()  // return true or false

    // example-1
    // let language_name = "javaScript ";
    // console.log(language_name.repeat(2));

    // example-2
    // let str = "goodbye";
    // console.log(str.startsWith("good"));
    // console.log(str.startsWith("o"));
    // console.log(str.startsWith("o", 1));

    // example-3
    // let str = "goodbye";
    // console.log(str.endsWith("e"));
    // console.log(str.endsWith("y", 6));


    // example-4
    // let test = "my name is usman";
    // console.log(test.includes("name"));




    // --------------------- Arrow function -----------------------------

    // es5
    // var printName = function(boy_name) {
    //     console.log(boy_name);
    // };

    // printName("usman");

    
    // es6
    // let printName = (boy_name)=> {
    //     console.log(boy_name);
    // };
     
    // or
    // let printName = boy_name => console.log(boy_name);
    // printName("rehan");
     
    // exampl-2
    // let sumNumbers = (num1, num2) => {
    //     return (num1 + num2);
    // };

    // console.log(sumNumbers(2,3));

    // exampl-3

    // let car = {
    //     car_name: "Honda Civic Turbo",
    //     engineName(x) {
    //         window.setInterval(() => {
    //             if(x > 0) {
    //                 console.log(`${this.car_name}'s engine is 1498 cc`);
    //                 x--;
    //             }
    //         }, 1000);
    //     }
    // };

    // car.engineName(5);




    // ------------------------------- Set constructor function -----------

    // let boy_names = new Set();

    // .add()
    // .delate()
    // .size
    // .clear()
    // .has()
    
    // .add()
    // boy_names.add("Farhan")
    //     .add("Usman")
    //     .add("Fahad")
    //     .add("Rehan");

    // console.log(boy_names);
    // console.log(typeof boy_names);

    // .delete()
    // console.log(boy_names.delete("Rehan"));
    // console.log(boy_names);

    // .size
    // console.log(boy_names.size);

    // .clear()
    // console.log(boy_names.clear());
    // console.log(boy_names);

    // .has()
    // console.log(boy_names.has("Farhan"));


    // example

    // an Array has with duplicate elements
    let fruit_names = ["Apple", "Orange", "Mango", "Banana", "Orange", "Mango" ];
    console.log(fruit_names);
     
    // a Set
    let refined_fruit_names = new Set(fruit_names);
    console.log(refined_fruit_names);

    // now we are removing duplicate elements from the Array.
    // we are assigning refined_fruit_names(e.g Set) to the fruit_names (e.g Array) 
        fruit_names = [...refined_fruit_names];
        console.log(fruit_names);

    
    

     


