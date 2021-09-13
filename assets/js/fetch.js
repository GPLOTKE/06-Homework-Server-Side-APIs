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