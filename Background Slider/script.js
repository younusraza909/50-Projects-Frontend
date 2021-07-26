const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  BodyBackground();
  changeSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  BodyBackground();
  changeSlide();
});

function BodyBackground() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function changeSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}

BodyBackground();
