export default function atroposAnimation() {
  let myatropos = document.querySelectorAll(".project-atropos");

  if (!myatropos.length) {
    console.warn("No Atropos elements found.");
    return;
  }

  myatropos.forEach((atro) => {
    Atropos({
      el: atro,
      shadow: false, // Enable shadow for better visual effect
      rotateXMax: 15,
      rotateYMax: 15,
    });
  });
}
