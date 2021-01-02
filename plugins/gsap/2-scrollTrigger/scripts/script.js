

/**
 *  scrollTrigger
 */

//  gsap.to(".box-3",{
//      scrollTrigger: ".box-3",
//      x: 400,
//      duration: 3,
//      rotation: 360
//  });


/**
 * toggle action:
 * scrollTrigger is an object.
 * toggleActions:"onEnter onLeave onEnterBack onLeaveBack"
 * You can use any of the following keywords for each action: 
 * "play", "pause", "resume", "reset", "restart",
 *  "complete", "reverse", and "none". 
 */  

// gsap.to(".box-3",{
//     scrollTrigger: {
//         trigger: ".box-3",
//         // toggleActions: "play none none none", // this default action
//         // toggleActions: "play pause resume reset",
//         markers: true
//     },
//     x: 400,
//     duration: 3,
//     rotation: 360
// });




/**
 *  'start' and 'end' Properties
 *  start: start scroller-start (in doh points k meets par  say animation start hogi)
 *  end: end scroller-end (in doh points k meets par animation end hogi)
 */
// gsap.to(".box-3",{
//     scrollTrigger: {
//         trigger: ".box-3",
//         toggleActions: "restart pause reverse pause",
//         markers: true,
//         start: "top center",
//     },
//     x: 400,
//     duration: 3,
//     rotation: 360
// });


/**
 * scrub animation
 */

// gsap.to(".box-3",{
//     scrollTrigger: {
//         trigger: ".box-3",
//         toggleActions: "play none none none",
//         markers: true,
//         scrub: false
//     },
//     x: 400,
//     duration: 3,
//     rotation: 360
// });

/**
 * scrollTrigger in a timeline
 */

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".box-4",
//         trigger: ".box-5",
//         toggleActions: "play none none pause",
//         markers: true,
//         scrub: false,
//         start: "top 90%"
//     }
// });

// tl.to(".box-4",{  
//     x: 400,
//     duration: 3,
//     rotation: 360
// });

// tl.to(".box-5",{  
//     x: 400,
//     duration: 3,
//     rotation: 360
// },"<");



/**
 * Pinning element
 */

gsap.to(".box-4",{
    scrollTrigger:{
        trigger: ".box-4",
        markers: true,
        toggleActions: "play none none pause",
        start: "top 90%",
        pin: true
    },
    x: 400,
    rotation: 360,
    duration: 3
});



/**
 *  Snapping
 */