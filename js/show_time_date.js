"use strict";

function showDate() {
  const date = document.querySelector(".date");
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-En", options);
  date.textContent = currentDate;
}
function showTime() {
  const time = document.querySelector(".time");
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}

export default showTime;
