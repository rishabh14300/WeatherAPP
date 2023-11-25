const inputBox = document.querySelector('.inputBox');
const searchBtn = document.getElementById('searchBtn');

const temperature = document.querySelector('.temperature');
const desc = document.querySelector('.description');

async function checkWeather(city) {

    const api_key= "cd57ce97ee9c89668a453525e894fe29";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;

}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

