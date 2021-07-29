const colorInput = document.getElementById("color");
const sizeInput = document.getElementById("size");
const plus = document.getElementById("increase");
const minus = document.getElementById("decrease");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = sizeInput.innerHTML;
let color = "red";
let isPressed = false;
let x;
let y;

plus.addEventListener("click", () => {
  size++;
  if (size >= 50) {
    size = 50;
  }
  sizeInput.innerText = size;
});

minus.addEventListener("click", () => {
  size--;
  if (size <= 1) {
    size = 1;
  }
  sizeInput.innerText = size;
});

canvas.addEventListener("mousedown", (e) => {
  setProp();
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  setProp();
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  setProp();
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function setProp() {
  color = colorInput.value;
  size = sizeInput.innerHTML;
}
