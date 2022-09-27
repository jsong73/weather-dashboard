var weatherApiKey = "ab07125a22cc73e0964ebddfb1d89370";
var weatherQueryUrl = "https://api.openweathermap.org";
var city = "";

var clickSearch = document.getElementById("search-btn");
var currentCard = document.getElementById("current-card");
var inputBox = document.getElementById("search-bar")


function getData(event) {
    event.preventDefault(); // shows form
    city = inputBox.value; // gets city value from user input from search bar
    currentCard.textContent = " "; //empties out previous city data

  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial" + //converts API unit from kelvin to farenheight
    "&appid=" +
    weatherApiKey;

//grabbing the current cards wind, humidity and temp
  fetch(requestUrl)
    .then(function (response) {  
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var tempEl = document.createElement("p");
      tempEl.textContent = "Temp: " + data.main.temp_max + "°F";
      var humidityEl = document.createElement("p");
      humidityEl.textContent = " Humidity: " + data.main.humidity + "%";
      var windEl = document.createElement("p");
      windEl.textContent =  " Wind: " + data.wind.speed + " MPH";
      currentCard.append(tempEl);
      currentCard.append(humidityEl);
      currentCard.append(windEl);
    });
}
clickSearch.addEventListener("click", getData);

    function
        for (var i = 0; i < data.length; i++) {
          var currentWeather = document.createElement("div");
          currentWeather.textContent = data[i].main[0].main[3].wind[1];
          currentCard.append(currentWeather);
        }