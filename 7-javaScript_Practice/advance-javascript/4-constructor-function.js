


// function Mobile(name) {
//     // const this = {}; behind the scene this object created, don't uncomment
//     this.name = name;
//     // return this;  behind the scene this object return, don't uncomment
// }

// let samsung = new Mobile("galaxy");
// let nokia = new Mobile("3310");
// let motorola = new Mobile("driod altra");

// // console.log(samsung);
// // console.log(samsung.name);

// // check all ojects
// console.log(samsung);
// console.log(nokia);
// console.log(motorola); 



// practical example
// (function() {
//     function TitleElement(type, content) {
//         this.el = document.createElement(type);
//         this.el.innerText = content;
//         document.body.append(this.el);
        
//         this.el.addEventListener("click", ()=> {
//             document.body.append(this.el.cloneNode(true))
//         })
//     }
    
//     let h1 = new TitleElement('h1', "javascript is a dynamic language!");

// })();



// example2
(function() {
    function TitleElement(type, content) {
        this.el = document.createElement(type);
        this.el.innerText = content;
        document.body.append(this.el);
        
        this.el.addEventListener("click", ()=> {
            document.body.append(this.el.cloneNode(true))
        });
    }

    const data = ["content1", "content2", "content3"];

    const myElements = data.map(function(dataItemContent) {
        return new TitleElement("p", dataItemContent)
    });
    
})();



















