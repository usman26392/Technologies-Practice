//Image Observer Start
let imageObserver1 = [...document.querySelectorAll(".img__observer__one")];
let imageObserver2 = [...document.querySelectorAll(".img__observer__two")];

let options = {
  rootMargin: "0px",
  threshold: 0.2,
};

let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(setItemActive, options);

imageObserver1.forEach((item1, idx) => {
  observer.observe(item1);
});

imageObserver2.forEach((item2, idx) => {
  observer.observe(item2);
});