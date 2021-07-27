const buttons = document.querySelectorAll(".ripple");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const insideX = x - buttonLeft;
    const insideY = y - buttonTop;

    const ele = document.createElement("span");
    ele.classList.add("circle");
    ele.style.top = insideY + "px";
    ele.style.left = insideX + "px";

    this.appendChild(ele);
    setTimeout(() => ele.remove(), 500);
  });
});
