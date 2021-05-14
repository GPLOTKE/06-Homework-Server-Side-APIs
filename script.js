// window.onload = function() {

//     alert("welcome");

// };
// $(document).ready(function() {

//     $("a").click(function(event) {

//         alert("Thanks for visiting!");

//     });

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
    var list = cityInput.Value;
    cityListEl.textContent = list;
}
// searchBtnEl.addEventListener('submit', showCityList);