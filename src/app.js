let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let dates = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${month} ${dates}, ${year} ${hours}:${minutes}`;

function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text");
  let maincity = document.querySelector("#maincity");
  maincity.innerHTML = `${searchInput.value}`;

  search(searchInput.value);
}

function search(city) {
  let apiKey = `24f1c0075dd230a627ed2df630716f94`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(currentWeather);
}

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", newCity);

function currentWeather(response) {
  let maintemp = document.querySelector("#maintemp");
  maintemp.innerHTML = `${Math.round(response.data.main.temp)}`;
  let maincity = document.querySelector("#maincity");
  maincity.innerHTML = response.data.name;
  let humidityElement = document.querySelector("#humidity");
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}
