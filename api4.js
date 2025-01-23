document.addEventListener("DOMContentLoaded", () => {
  let movieInfo = document.getElementById("movieInfo");
  let searchBtn = document.getElementById("searchBtn");
  // let title = document.getElementById("title");
  // let actors = document.getElementById("actors");
  // let posters = document.getElementById("posters");
  // let year = document.getElementById("year");
  // console.log(movieInfo, searchBtn, title, actors, posters, year);
  searchBtn.addEventListener("click", () => {
    let movieTitle = movieInfo.value;
    if (movieInfo.value != "") {
      getMovie(movieTitle);
    } else {
      console.log("Please enter movie name");
    }
  });
});
async function getMovie(movieTitle) {
  let apiKey = "630804c4";
  let apiUrl = `http://www.omdbapi.com/?apiKey=${apiKey}&t=${movieTitle}`;
  try {
    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
    if (200 === 200) {
      title.innerHTML = `Title: ${data.Title}`;
      actors.innerHTML = `Actors : ${data.Actors}`;
      posters.innerHTML = `<img src=${data.Poster} height=400px width=350px>`;
      year.innerHTML = `Year : ${data.Year}`;
      language.innerHTML = `Language : ${data.Language}`;
      country.innerHTML = `Country : ${data.Country}`;
      released.innerHTML = `Released : ${data.Released}`;
    }
  } catch (error) {
    console.log(`Your API is not working ${apiKey}`, error);
  }
}
getMovie("hero");
