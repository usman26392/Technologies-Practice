function animateObserver() {
  // Only apply JavaScript animations on screens larger than 767px
  // For smaller screens, CSS takes care of showing elements without animation
  if (window.innerWidth > 767) {
    // Get all elements with the animate class
    let anim = [...document.querySelectorAll(".animate")];

    // If there are no elements to animate, return early
    if (anim.length === 0) return;

    // Configure the Intersection Observer options to better detect elements
    let options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px 0px -50px 0px", // triggers earlier, regardless of screen height
      threshold: 0.01, // only 1% needs to be visible
    };

    // Callback function to handle intersection changes
    let animate = (entries, observer) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting with the viewport
        if (entry.isIntersecting) {
          // Get the delay from the data-delay attribute (defaults to 0s if not specified)
          const delay = entry.target.dataset.delay || "0s";

          entry.target.style.animation = "none";
          void entry.target.offsetWidth;

          // Apply the animation - just use the keyframe name from CSS
          entry.target.style.animation = `anim 0.7s ${delay} forwards ease-out`;

          // Stop observing this element once animation is applied
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer instance
    let observer = new IntersectionObserver(animate, options);

    // Start observing all animate elements
    anim.forEach((item) => {
      observer.observe(item);
    });
  }
}

export default animateObserver;
