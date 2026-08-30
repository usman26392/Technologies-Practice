export default function spaceLovers() {
  const discoBallEl = document.querySelector("#disco-ball");

  // If disco ball element doesn't exist, exit early
  if (!discoBallEl) return;

  const TOTAL_IMAGES = 200;

  // Extract the base path and format from the initial image (relative path)
  // Use getAttribute to get the relative path
  const initialSrc = discoBallEl.getAttribute('src');
  const lastSlashIndex = initialSrc.lastIndexOf("/");
  const basePath = initialSrc.substring(0, lastSlashIndex + 1);

  // New naming pattern: 1920x1080_00000.png, 1920x1080_00001.png, etc.
  const baseFilename = "1920x1080_";
  const extension = ".webp";

  console.log("Using image pattern:", basePath + baseFilename + "00000" + extension);

  // Function to update the image number in the src (set as relative path)
  function updateImageNumber(num) {
    // Ensure num is between 0 and TOTAL_IMAGES-1
    const imageNum = num % TOTAL_IMAGES;
    // Format number with leading zeros (5 digits)
    const formattedNum = imageNum.toString().padStart(5, "0");
    const newSrc = basePath + baseFilename + formattedNum + extension;

    // Only update if source is different
    if (discoBallEl.getAttribute('src') !== newSrc) {
      discoBallEl.setAttribute('src', newSrc); // Set as relative path
    }
  }

  // Use a more sensitive scroll factor for smoother animation
  const SCROLL_SENSITIVITY = 0.01; // Reduced for smoother transitions
  let ticking = false;
  let currentImageIndex = 0;

  function updateAnimation() {
    // Calculate which image to show based on scroll position
    const scrollPosition = window.scrollY * SCROLL_SENSITIVITY;
    const imageIndex = Math.floor(scrollPosition) % TOTAL_IMAGES;
    
    // Only update if the image index has changed
    if (imageIndex !== currentImageIndex) {
      currentImageIndex = imageIndex;
      updateImageNumber(imageIndex);
      
    }
    
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateAnimation);
      ticking = true;
    }
  });

  // Trigger initial display
  setTimeout(() => {
    updateImageNumber(0);
  }, 500);
}
