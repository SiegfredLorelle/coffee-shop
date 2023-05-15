const genreBtns = document.querySelectorAll(
  "#music > .grid-container > button"
);

const genreBtnPlayBtns = document.querySelectorAll(
  "#music > .grid-container > button > i"
);
const audioPlayer = document.querySelector("#music > .audio-player");
const playBtn = document.querySelector(
  ".audio-control-container > button:nth-child(1)"
);

console.log(genreBtnPlayBtns);

genreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    HighlightBtn(btn);
  });
});
  

function HighlightBtn(btn) {
  // console.log(audioPlayer.src.includes(`${btn.value}.mp3`));
  if (audioPlayer.src.includes(`${btn.value}.mp3`)) {
    return;
  }

  genreBtns.forEach(btn => {
    btn.classList.remove("genre-highlight");
  });
  btn.classList.add("genre-highlight");
  audioPlayer.src = `./audio/${btn.value}.mp3`;
}





function togglePlay() {
  if (audioPlayer.src && audioPlayer.paused) {
    audioPlayer.play();
  }
  else {
    audioPlayer.pause();
  }
};

genreBtnPlayBtns.forEach(btn => {
  btn.addEventListener("click", togglePlay);
});
playBtn.addEventListener("click", togglePlay);



