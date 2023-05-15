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

let highlightedBtn;

console.log(genreBtnPlayBtns);

genreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    HighlightBtn(btn);
    highlightedBtn = btn;
  });
});
  

function HighlightBtn(btn) {
  if (audioPlayer.src.includes(`${btn.value}.mp3`)) {
    return;
  }

  genreBtns.forEach(btn => {
    btn.classList.remove("genre-highlight");
  });
  btn.classList.add("genre-highlight");
  audioPlayer.src = `./audio/${btn.value}.mp3`;
  pauseAudio();
}



function togglePlay() {
  if (audioPlayer.src && audioPlayer.paused) {
    playAudio();
  }
  else {
    pauseAudio();
  }
};


genreBtnPlayBtns.forEach(btn => {
  btn.addEventListener("click", togglePlay);
});
playBtn.addEventListener("click", togglePlay);





audioPlayer.addEventListener("play", () => {
  playBtn.lastChild.classList.remove("fa-play");
  playBtn.lastChild.classList.add("fa-pause");
});

audioPlayer.addEventListener("pause", () => {
  playBtn.lastChild.classList.remove("fa-pause");
  playBtn.lastChild.classList.add("fa-play");
});


function playAudio() {
  audioPlayer.play();
  playBtn.lastChild.classList.remove("fa-play");
  playBtn.lastChild.classList.add("fa-pause");
}

function pauseAudio() {
  audioPlayer.pause();
  playBtn.lastChild.classList.remove("fa-pause");
  playBtn.lastChild.classList.add("fa-play");
}