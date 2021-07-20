const textarea = document.querySelector("textarea");
const container = document.querySelector(".badge-container");

textarea.addEventListener("keyup", (e) => {
  createBadge(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    chooseTag();
  }
});

function createBadge(tag) {
  const tagToInsert = tag
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //emptying the div
  container.innerHTML = "";
  tagToInsert.forEach((tag) => {
    let tagSpan = document.createElement("span");
    tagSpan.classList.add("badge");
    tagSpan.innerText = tag;
    container.appendChild(tagSpan);
  });
}

function chooseTag() {
  times = 30;
  const interval = setInterval(() => {
    tag = randomPick();
    tag.classList.add("highlight");

    setTimeout(() => {
      tag.classList.remove("highlight");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = randomPick();
      randomTag.classList.add("highlight");
    }, 100);
  }, times * 100);
}

function randomPick() {
  const tags = document.querySelectorAll(".badge");
  return tags[Math.floor(Math.random() * tags.length)];
}
