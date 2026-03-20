

gsap.defaults({
    ease: Bounce.easeInOut,
    duration: 5,
    opacity: 0
});

gsap.to(".box", {
    x: 400
});

gsap.to(".box-2", {
    opacity: 1
});