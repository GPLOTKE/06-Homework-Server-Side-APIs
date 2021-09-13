const apiKey = "1e2f3008769242d33b43f8359ff3401c"
const searchBtn = document.querySelector("#searchBtn");
let cityInput = $('#input')
    // var cityListEl = document.querySelectorAll("#city-list");
    // var weatherForm = document.querySelectorAll("#weather-form");
    // var currentWeatherEl = document.querySelector("#current-container");
    // var searchedCity = "";
const cityCard = `<div id=" class="card" `
const appendUI = async(data) => {
    let results = await data
    console.log('APPENDUI DATA:', results)
}
const getWeather = () => {
    console.log(`CITY INPUT: ${cityInput.val()}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.val()}&units=imperial&appid=${apiKey}`)
        // (`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`)
        .then((response) => {
            let data = response.json()
            return appendUI(data);
        })
}


searchBtn.addEventListener("click", (e) => {
    console.log(e.target)
    console.log(`Button Clicked`)
    console.log(`Fetching Weather Boss.`)
    getWeather()

})