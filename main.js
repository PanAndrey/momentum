"use strict";

import showTime from "./js/show_time_date.js";
import showGreeting from "./js/show_greeting.js";
import getName from "./js/get_name.js";
import changeBg from "./js/change_bg.js";
import getWeather from "./js/show_weather.js";
import shouAudio from "./js/show_audio.js";

showTime();
showGreeting();
getName();
changeBg();
getWeather(
  `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=05246233012e4a7ff64e9504f527a4a0&units=metric`
);
shouAudio();
