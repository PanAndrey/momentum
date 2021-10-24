"use strict";

import showTime from "./js/show_time_date.js";
import showGreeting from "./js/show_greeting.js";
import getName from "./js/get_name.js";
import changeBg from "./js/change_bg.js";
import getWeather from "./js/show_weather.js";
import shouAudio from "./js/show_audio.js";
import getQuotes from "./js/show_quotes.js";

showTime();
showGreeting();
getName();
changeBg();

shouAudio();
getQuotes();

const quoteBtn = document.querySelector(".change-quote");
quoteBtn.addEventListener("click", getQuotes);

let city = document.querySelector(".city");
if (!localStorage.getItem("userCity")) {
  city.value = "Minsk";
} else {
  city.value = localStorage.getItem("userCity");
}

getWeather(
  `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=05246233012e4a7ff64e9504f527a4a0&units=metric`
);
