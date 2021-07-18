const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const container = document.querySelector(".btnContainer");
sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;
  container.appendChild(button);

  //   Add Event Listner
  button.addEventListener("click", () => {
    const song = document.getElementById(sound);
    stopSongs();
    song.play();
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
