var weatherApiKey = "ab07125a22cc73e0964ebddfb1d89370";
var weatherQueryUrl = "https://api.openweathermap.org";
var city = "atlanta";

var clickSearch = document.getElementById("search-btn");
var currentCard = document.getElementById("current-card");
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function getData() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial" +
    "&appid=" +
    weatherApiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currentTemp = document.createElement("p");
      currentTemp.textContent = "Temp: " + data.main.temp_max + "°F";
      var currentHumidity = document.createElement("p");
      currentHumidity.textContent = " Humidity: " + data.main.humidity + "%";
      var currentWind = document.createElement("p");
      currentWind.textContent =  " Wind: " + data.wind.speed + " MPH";
      currentCard.append(currentTemp);
      currentCard.append(currentHumidity);
      currentCard.append(currentWind);

    });
}
clickSearch.addEventListener("click", getData);


      //   for (var i = 0; i < data.length; i++) {
      //     var currentWeather = document.createElement("div");
      //     currentWeather.textContent = data[i].main[0].main[3].wind[1];
      //     currentCard.append(currentWeather);
      //   }for other cards