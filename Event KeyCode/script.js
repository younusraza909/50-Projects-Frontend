const textContainer = document.querySelectorAll(".key small");

// Listen To Key Stroke
window.addEventListener("keypress", (e) => {
  const element = `
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>`;
  document.querySelector(".insert").innerHTML = element;
});
