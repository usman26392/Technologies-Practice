


gsap.globalTimeline.duration(5);

// example-1
// gsap.globalTimeline.pause();

// example-2
// gsap.globalTimeline.to(".box-3", {
//     x: 600
// });

// example-3
let tl = gsap.timeline();
tl.to(".box-1", {
    x: 300,
    rotation: 180,
});

tl.to(".box-2", {
    x: 300,
    rotation: 180
});


