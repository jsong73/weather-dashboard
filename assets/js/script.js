var weatherApiKey = "ab07125a22cc73e0964ebddfb1d89370";
var weatherQueryUrl = "https://api.openweathermap.org";
var city = "";

var clickSearch = document.getElementById("search-btn");
var currentCard = document.getElementById("current-card");
var inputBox = document.getElementById("search-bar");
var futureWeatherCards = document.getElementById("five-day-cards");


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

      var latVar = data.coord.lat;
      var lonVar = data.coord.lon;
      
      var cityElement = document.createElement("h3")
      cityElement.textContent= `Today's forcast for ${data.name}`;


      var tempEl = document.createElement("p");
      tempEl.textContent = "Temp: " + data.main.temp_max + "°F";
      var humidityEl = document.createElement("p");
      humidityEl.textContent = " Humidity: " + data.main.humidity + "%";
      var windEl = document.createElement("p");
      windEl.textContent =  " Wind: " + data.wind.speed + " MPH";
      currentCard.append(cityElement)

      currentCard.append(tempEl);
      currentCard.append(humidityEl);
      currentCard.append(windEl);
      getForecastCards(latVar, lonVar);
    
    });
}
clickSearch.addEventListener("click", getData);

function getForecastCards(latVar, lonVar){
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVar + "&lon=" + lonVar + "&units=imperial&exclude=minutely,hourly&appid=d91f911bcf2c0f925fb6535547a5ddc9"
    
    var futureWeather= document.createElement("h4");
    futureWeather.textContent = `Next 5 day forcast for ${city}`
    futureWeatherCards.append(futureWeather);
    
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
        for (var i = 0; i < 5; i++) {
            var dailyWeather = document.createElement("div");
            dailyWeather.textContent = "Temp: " + data.daily[i].temp.max + "°F";
            futureWeatherCards.append(dailyWeather);
          }
    });

    }
    // getForecastCards();
