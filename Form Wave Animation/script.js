const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((ele, index) => {
      return `<span style="transition-delay: ${50 * index}ms"}>${ele}</span>`;
    })
    .join("");
});
