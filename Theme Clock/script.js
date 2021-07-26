const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHtml = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHtml = "Light Mode";
  }
});

const setTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();

  //   Fnction analog clock
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  //   Set Date and other stuff
  timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `
  ${Days[day]},${Months[month]}<span class="circle">${date}</span>
  `;
};

// Range Function
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
setTime();
