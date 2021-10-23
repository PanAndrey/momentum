import getTimeOfDay from "./get_time_of_day.js";

function changeBg() {
  const body = document.querySelector("body");
  const slideNext = document.querySelector(".slide-next");
  const slidePrev = document.querySelector(".slide-prev");
  let randomNum;

  function getRandomNumber() {
    let min = 1;
    let max = 20;
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function setBg(timeOfDay, bgNum) {
    const img = new Image();
    bgNum = String(bgNum).padStart("2", "0");
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    };
  }

  getRandomNumber();
  setBg(getTimeOfDay(), randomNum);

  function getSlideNext() {
    if (randomNum >= 20) {
      randomNum = 1;
    } else {
      randomNum++;
    }
    setBg(getTimeOfDay(), randomNum);
  }
  function getSlidePrev() {
    if (randomNum <= 1) {
      randomNum = 20;
    } else {
      randomNum--;
    }
    setBg(getTimeOfDay(), randomNum);
  }
  slideNext.addEventListener("click", getSlideNext);
  slidePrev.addEventListener("click", getSlidePrev);
}

export default changeBg;
