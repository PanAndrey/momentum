import playList from "./play_list.js";
function showAudio() {
  const audio = document.querySelector("audio");
  const playBtn = document.querySelector(".play");
  const playNext = document.querySelector(".play-next");
  const playPrev = document.querySelector(".play-prev");

  let isPlay = false;
  let playNum = 0;

  let playListContainer = document.querySelector(".play-list");

  playList.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("play-item");
    li.textContent = element.title;
    playListContainer.append(li);
  });

  function nextTrack() {
    playBtn.classList.add("pause");
    if (playNum >= 3) {
      playNum = 0;
    } else {
      playNum++;
    }
    isPlay = false;
    chosenTrack(playNum);
    playAudio(playList[playNum]);
  }
  function prevTrack() {
    playBtn.classList.add("pause");
    if (playNum <= 0) {
      playNum = 3;
    } else {
      playNum--;
    }
    isPlay = false;
    chosenTrack(playNum);
    playAudio(playList[playNum]);
  }

  function playAudio(track) {
    audio.src = track.src;
    if (!isPlay) {
      audio.currentTime = 0;
      audio.play();
      isPlay = true;
    } else {
      audio.pause();
      isPlay = false;
    }
    chosenTrack(playNum);
  }
  function chosenTrack(n) {
    const musicList = document.querySelectorAll(".play-item");
    musicList.forEach((element) => {
      element.classList.remove("active");
    });
    musicList[n].classList.add("active");
  }
  playNext.addEventListener("click", nextTrack);
  playPrev.addEventListener("click", prevTrack);

  playBtn.addEventListener("click", () => {
    playBtn.classList.toggle("pause");
    playAudio(playList[playNum]);
  });
}
export default showAudio;
