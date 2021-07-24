const counters = document.querySelectorAll(".counter");

counters.forEach((count) => {
  count.innerHTML = 0;

  function updateCounter() {
    let target = +count.getAttribute("data-target");
    let c = +count.innerHTML;

    let increament = +target / 200;

    if (c < target) {
      count.innerHTML = `${Math.ceil(c + increament)}`;
    } else {
      count.innerHTML = target;
    }
    setTimeout(updateCounter, 1);
  }
  updateCounter();
});
