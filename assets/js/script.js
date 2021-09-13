const fetch = new Fetch();
const ui = new UI();
const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city-input");
// var cityListEl = document.querySelectorAll("#city-list");
// var weatherForm = document.querySelectorAll("#weather-form");
// var currentWeatherEl = document.querySelector("#current-container");
// var searchedCity = "";

searchBtn.addEventListener("click", () => {
    const currentVal = search.value;

    fetch.getCurrent(currentVal).then((data) => {
        ui.generateHtml(data);
        ui.saveToLocal(data);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLocal();
    ui.generateHtml(dataSaved);
});