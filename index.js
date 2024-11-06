const apiKey = "941bbad51fb00f7bb6f1d98271ec4805";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button ");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main.toLowerCase() === "clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main.toLowerCase() === "clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main.toLowerCase() === "rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main.toLowerCase() === "drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main.toLowerCase() === "fog") {
            weatherIcon.src = "images/fog.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }





}

searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



