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


function playAudio() {
  audioPlayer.play();
  changeIcon(playBtn.lastChild, "fa-play", "fa-pause");
  if (highlightedBtn) {
    changeIcon(highlightedBtn.lastChild, "fa-circle-play", "fa-circle-pause");
  }
}

function pauseAudio() {
  audioPlayer.pause();
  changeIcon(playBtn.lastChild, "fa-pause", "fa-play");
  if (highlightedBtn) {
    changeIcon(highlightedBtn.lastChild, "fa-circle-pause", "fa-circle-play");
  }
}

function changeIcon(icon, from, to) {
  icon.classList.remove(from);
  icon.classList.add(to);
}