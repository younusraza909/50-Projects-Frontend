const textContainer = document.querySelector(".jokeText");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      textContainer.innerText = data.joke;
    });
});
