async function getWeather(url) {
  const city = document.querySelector(".city");
  const res = await fetch(url);
  const data = await res.json();

  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const weatherDescription = document.querySelector(".weather-description");

  weatherIcon.className = "weather-icon owf";

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  let temp = Math.round(data.main.temp);
  let humValue = data.main.humidity;
  let windSpeed = Math.round(data.wind.speed);

  humidity.textContent = `Humidity: ${humValue}%`;
  temperature.textContent = `${temp}°C`;
  wind.textContent = `Wind speed: ${windSpeed}m/s`;

  weatherDescription.textContent = data.weather[0].description;

  city.addEventListener("change", () => {
    localStorage.setItem("userCity", city.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=05246233012e4a7ff64e9504f527a4a0&units=metric`;
    getWeather(url);
  });
}

export default getWeather;
