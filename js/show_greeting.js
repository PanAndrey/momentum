import showTime from "./show_time_date.js";
import getTimeOfDay from "./get_time_of_day.js";

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  document.querySelector(".greeting").textContent = greetingText;

  showTime();
}

export default showGreeting;
