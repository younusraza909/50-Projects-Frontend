const bg = document.querySelector(".container");
const text = document.querySelector(".timer");

timer = 0;

const int = setInterval(bluring, 30);

function bluring() {
  timer++;

  if (timer > 99) {
    clearInterval(int);
  }
  text.innerHTML = `${timer}%`;
  text.style.opacity = scale(timer, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(timer, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
