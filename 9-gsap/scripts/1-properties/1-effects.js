
// register the custom effect (named tween) with GSAP:

// 

gsap.registerEffect({
    name: "fadeRotate",
    defaults: {duration: 2},
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            opacity: 0,
            rotate: "180deg"
        });
    }
});


//now we can use it like this:
gsap.effects.fadeRotate(".box");
