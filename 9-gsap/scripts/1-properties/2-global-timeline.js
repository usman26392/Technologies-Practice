


gsap.globalTimeline.duration(5);
// gsap.globalTimeline.pause();
// gsap.globalTimeline.to(".box-3", {
//     x: 600
// });


let tl = gsap.timeline();

tl.to(".box-1", {
    x: 300,
    rotation: 180,
});

tl.to(".box-2", {
    x: 300,
    rotation: 180
});