
// Get HTML Elements

const weatherForm = document.getElementById("weatherForm");

const cityInput = document.getElementById("cityInput");

const message = document.getElementById("message");

const weatherResult = document.getElementById("weatherResult");

const welcomeMessage = document.getElementById("welcomeMessage");

const searchBtn = document.getElementById("searchBtn");


// Weather Form Event

weatherForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city name!";
        return;
    }

    // Loading Message

    message.textContent = "⏳ Fetching weather details...";

    weatherResult.hidden = true;
    welcomeMessage.hidden = true;
    searchBtn.disabled = true;

    try {

        // Step 1: Get City Coordinates

        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoUrl);

        if (!geoResponse.ok) {
            throw new Error("Unable to search for the city.");
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found! Please enter a valid city.");
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;


        // Step 2: Get Weather Information

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
            throw new Error("Unable to fetch weather information.");
        }

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;


        // Step 3: Weather Conditions

        let condition = "";
        let icon = "";

        const code = current.weather_code;

        if (code === 0) {
            condition = "Clear Sky";
            icon = "☀️";
        }

        else if (code === 1) {
            condition = "Mainly Clear";
            icon = "🌤️";
        }

        else if (code === 2) {
            condition = "Partly Cloudy";
            icon = "⛅";
        }

        else if (code === 3) {
            condition = "Overcast";
            icon = "☁️";
        }

        else if (code === 45 || code === 48) {
            condition = "Foggy";
            icon = "🌫️";
        }

        else if (code >= 51 && code <= 57) {
            condition = "Drizzle";
            icon = "🌦️";
        }

        else if (code >= 61 && code <= 67) {
            condition = "Rainy";
            icon = "🌧️";
        }

        else if (code >= 71 && code <= 77) {
            condition = "Snowy";
            icon = "❄️";
        }

        else if (code >= 80 && code <= 82) {
            condition = "Rain Showers";
            icon = "🌦️";
        }

        else if (code === 85 || code === 86) {
            condition = "Snow Showers";
            icon = "🌨️";
        }

        else if (code >= 95 && code <= 99) {
            condition = "Thunderstorm";
            icon = "⛈️";
        }

        else {
            condition = "Unknown Weather";
            icon = "🌡️";
        }


        // Step 4: Display City Details

        document.getElementById("cityName").textContent =
            `${location.name}, ${location.country}`;

        document.getElementById("dateTime").textContent =
            `Local Time: ${current.time.replace("T", " ")}`;


        // Step 5: Display Temperature

        document.getElementById("temperature").textContent =
            `${current.temperature_2m}°C`;

        document.getElementById("feelsLike").textContent =
            `${current.apparent_temperature}°C`;


        // Step 6: Display Weather Condition

        document.getElementById("weatherIcon").textContent = icon;

        document.getElementById("condition").textContent = condition;


        // Step 7: Display Additional Details

        document.getElementById("humidity").textContent =
            `${current.relative_humidity_2m}%`;

        document.getElementById("windSpeed").textContent =
            `${current.wind_speed_10m} km/h`;

        document.getElementById("precipitation").textContent =
            `${current.precipitation} mm`;

        document.getElementById("weatherType").textContent =
            condition;


        // Step 8: Show Weather Card

        message.textContent = "";

        weatherResult.hidden = false;

    }

    catch (error) {

        message.textContent = "❌ " + error.message;

        welcomeMessage.hidden = false;

        weatherResult.hidden = true;

    }

    finally {

        searchBtn.disabled = false;

    }

});
