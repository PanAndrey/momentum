"use strict";

import showTime from "./js/show_time_date.js";
import showGreeting from "./js/show_greeting.js";
import getName from "./js/get_name.js";

showTime();
showGreeting();
getName();

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {}
