// var searchBtn = document.querySelector("#search-btn");
// var cityInput = document.querySelector("#city-input");
// var cityListEl = document.querySelectorAll("#city-list");
// var weatherForm = document.querySelectorAll("#weather-form");
// var currentWeatherEl = document.querySelector("#current-container");
// var searchedCity = "";

class Fetch {
    async fetchCurrent(cityInput) {
        const apiKey = "41ea287d4912f0b2e0fa6621fbca8b89"
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        return data;
    }
}