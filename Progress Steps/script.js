const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

let activeCircle = 1;

next.addEventListener("click", () => {
  activeCircle++;

  if (activeCircle > circles.length) {
    activeCircle = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  activeCircle--;

  if (activeCircle < 1) {
    activeCircle = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const completed = document.querySelectorAll(".active");

  progress.style.width =
    ((completed.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCircle === 1) {
    prev.disabled = true;
  } else if (activeCircle === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
