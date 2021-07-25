const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=700a1def4eec2bd8dbddbd8e67e307ea&page=1";
//From documentation
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
//Search Endpoint
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=700a1def4eec2bd8dbddbd8e67e307ea&query=''";

//   Getting Dom Elelment
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");
//getting Initial films
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const {poster_path, title, overview, vote_average} = movie;
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
    <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
    />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${classByVote(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <p>
            ${overview}
        </p>
    </div>
    `;
    main.appendChild(div);
  });
}

function classByVote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
  } else {
    window.location.reload();
  }
});
