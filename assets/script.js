var searchBtnEl = document.querySelector("#enterBtn");
var cityInput = document.querySelector("#city-input");
var cityListEl = document.querySelectorAll('#city-list');
var weatherFormEl = document.querySelectorAll('#weather-form');

function showCityList(event) {
    event.preventDefault();

    var cityItem = querySelectorAll('input[name="city-input"]').value();

    if (!cityItem) {
        console.log('No city was entered!');
        return;
    }

    cityListEl.append('<li>' + cityItem + '</li>');

    querySelectorAll('input[name="city-input"]').val('');
}

function listCities(event) {
    event.preventDefault();
    console.log(event);
    var list = "cityInput.value";
    cityListEl.textContent = list;
}
searchBtnEl.addEventListener('click', showCityList);


function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#city-input').value;


    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

    location.assign(queryString);
}

weatherFormEl.addEventListener('submit', handleSearchFormSubmit);