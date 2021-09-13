const apiKey = "1e2f3008769242d33b43f8359ff3401c"
const searchBtn = document.querySelector("#searchBtn");
let cityInput = $('#input')
let labelIndex = 0;

function checkIt() {
    if (localStorage.length > -1) {
        for (let i = 0; i < localStorage.length; i++) {
            let index = i + 1
            let recCity = localStorage.getItem(`Recent Search ${index}`)
            console.log({ recCity })
            const cityCardHtml =
                `<div id="recentcity${index}" class="card">
                    <h2>${recCity}</h2>
                </div>`
            $('#city-list').append(cityCardHtml)
        }
    }
}

const appendUI = async(data) => {
    if (labelIndex <= 5) {
        localStorage.setItem('Recent Search ' + labelIndex, cityInput.val());
    } else {
        labelIndex = 0;
        localStorage.setItem('Recent Search ' + labelIndex, cityInput.val());
    }

    let results = await data
    console.log('APPENDUI DATA:', results)
    const currentWeatherHtml = `<div class="currentWeather card">
    <dl>${results.name}
    <dt>Max</dt>
    <dd>${results.main.temp_max}&#176 F</dd>
    <dt>Min</dt>
    <dd> ${results.main.temp_min}&#176 F</dd>
    <dt>Current Temp</dt>
    <dd>${results.main.temp}&#176 F<dd>
    </dl>
    </div>`
    $('#current-container').append(currentWeatherHtml)
}

const getWeather = () => {
    checkIt()
    $('#current-container').children().remove('.currentWeather')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.val()}&units=imperial&appid=${apiKey}`)
        .then((response) => {
            if (response.ok) {
                if (labelIndex < 5) {
                    labelIndex++
                } else if (labelIndex == 5) {
                    labelIndex = 0
                }
                let data = response.json()
                appendUI(data)
                return
            }
            alert(`That didn't work.`)
            return
        })
}


searchBtn.addEventListener("click", () => {
    $('#city-list').children().remove()
    console.log(`Fetching Weather Boss.`)
    getWeather()

})