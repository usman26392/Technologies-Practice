export default function planetsMouseMove() {
  const planetsWrapper = document.querySelector(".main-side-panel");
  const planets = document.querySelectorAll(".planet-1, .planet-2, .planet-3, .planet-4");

  // if not length of planets or planetsWrapper.
  if (!planetsWrapper || !planets.length) {
    console.error("No planets or wrapper found for mouse move animation.");
    return;
  }

  planetsWrapper.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    planets.forEach((planet) => {
      try {
        const rect = planet.getBoundingClientRect();
        const planetX = rect.left + rect.width / 2;
        const planetY = rect.top + rect.height / 2;

        const deltaX = mouseX - planetX;
        const deltaY = mouseY - planetY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;

        const translateFactor = Math.max(-30, Math.min(30, (distance / maxDistance) * 30)); // Increased range
        planet.style.transform = `translate(${translateFactor}px, ${translateFactor}px)`;
      } catch (error) {
        console.error("Error applying mouse move animation to planet:", error);
      }
    });
  });
}
