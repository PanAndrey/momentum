async function getWeather(url) {
  const city = document.querySelector(".city");
  const res = await fetch(url);
  const data = await res.json();

  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  weatherIcon.className = "weather-icon owf";

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;

  city.addEventListener("change", () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=05246233012e4a7ff64e9504f527a4a0&units=metric`;
    getWeather(url);
  });
}

export default getWeather;
