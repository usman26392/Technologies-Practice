

// --------------- gsap Object overview ------------------

console.log(window);



//----------------- common methods for creating a Tween ---------------

// gsap.to(".box-1", {
//     rotation: 27,
//     x: 400,
//     duration: 6
// });

// gsap.to(".box", {
//     rotation: 27,
//     x: 400,
//     duration: 6,
//     delay: 2
// });



// ------------------------ Timeliene ---------------------------------
// let boxes_tl = gsap.timeline();
// boxes_tl.to(".box-1", {x: 300, opacity: 0.5, duration: 3,})
//         .to(".box-2", {x: 300, opacity: 0.5, duration: 3,})
//         .to(".box-3", {x: 500, opacity: 0.5, duration: 4 });


        
// way-2: not recommended way
// let boxes_tl2 = gsap.timeline();
// boxes_tl2.add(gsap.from(".box-1", {x: 300, rotation: 360, duration: 3}))
//          .add(gsap.from(".box-2", {x: 300, rotation: 360, duration: 3}));


// ----- position parameter -------------------------

// 0.5 ka matkab ye hay k tween,  apni timeline k 0.5seconds par 
// say start hoga tween hona.

// "+=1" matlab ye hay k tween, apni timeline k layhaaz say 1 second k baad 
// tween hona shoro hoga.

// "-=1" matlab yey hay k tween, apni timeline k layhaaz say 1 second pahlay 
// tween hona shoro hoga.


// let boxes_tl = gsap.timeline();
// boxes_tl.to(".box-1", {x: 300, opacity: 0.5, duration: 3})
//         .to(".box-2", {x: 300, opacity: 0.5, duration: 3}, 1)
//         .to(".box-3", {x: 300, opacity: 0.5, duration: 4}, "+=3");


// ------------ labels ------------------------------
// let boxes_tl = gsap.timeline();
// boxes_tl.addLabel("step2", 2);
// boxes_tl.addLabel("step4", 4);

// boxes_tl.to(".box-1", {
//         x: 300,
//         opacity: 0.5,
//         duration: 3
// }, "step2");

// boxes_tl.to(".box-2", {
//         x: 300,
//         opacity: 0.5,
//         duration: 3
// },"step4");



// ------------- Controlling Tweens and Timelines ---------------------
        let boxes_tl = gsap.timeline();
        boxes_tl.pause();

        boxes_tl.to(".box-3", {
                x: 300,
                duration: 5,
                // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        });

        let btn = document.querySelector("button");
        btn.addEventListener("click", function() {
                boxes_tl.play();
                // boxes_tl.timeScale(10);
        });

        let revBtn = document.querySelector("#reverse-btn");
        revBtn.addEventListener("click", ()=> {
                boxes_tl.reverse();
        });