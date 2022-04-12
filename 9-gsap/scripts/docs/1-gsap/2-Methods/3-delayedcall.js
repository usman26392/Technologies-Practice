




function myFunction(param1, param2) {
    console.log("execute after 2 second!");
    gsap.to(".box-1", {
        x: 300,
        duration: 2
    });
}


let check = gsap.delayedCall(2, myFunction, ["param1", "param2"]);

console.log(check);