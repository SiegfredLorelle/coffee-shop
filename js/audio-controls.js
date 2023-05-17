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


let highlightedBtn = genreBtns[0];

genreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    HighlightBtn(btn);
    highlightedBtn = btn;
  });
});
  

/* Remove all buttons' highlight, then highlight the clicked btn */
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


genreBtnPlayBtns.forEach(btn => {
  btn.addEventListener("click", togglePlay);
});
playBtn.addEventListener("click", togglePlay);


function togglePlay() {
  if (audioPlayer.src && audioPlayer.paused) {
    playAudio();
  }
  else {
    pauseAudio();
  }
};

function playAudio() {
  audioPlayer.play();
  changeIcon(playBtn.lastChild, "fa-pause");
  if (highlightedBtn) {
    changeIcon(highlightedBtn.lastChild, "fa-circle-pause");
  }
}

function pauseAudio() {
  audioPlayer.pause();
  changeIcon(playBtn.lastChild, "fa-play");
  if (highlightedBtn) {
    changeIcon(highlightedBtn.lastChild, "fa-circle-play");
  }
}

/* Chang icon by replacing last class item */
function changeIcon(icon, to) {
  icon.classList.remove(icon.classList.item(1));
  icon.classList.add(to);
}



const volumeSlider = document.querySelector(
  ".audio-control-container > input[type='range']"
);

const muteBtn = document.querySelector(
  ".audio-control-container > button:nth-child(2)"
  );
  
let prevVol = 0.25;

  updateVol();
  volumeSlider.addEventListener("input", updateVol);
  
  muteBtn.addEventListener("click", () => {
    toggleVol();
  });
  
  
  function updateVol() {
    audioPlayer.volume = volumeSlider.value;
    updateVolIcon();
  }
  
function updateVolIcon() {
  if (volumeSlider.value >= 0.25) {
    changeIcon(muteBtn.lastChild, "fa-volume-high");
  }
  else if (volumeSlider.value == 0) {
    changeIcon(muteBtn.lastChild, "fa-volume-xmark");
  }
  else {
    changeIcon(muteBtn.lastChild, "fa-volume-low");
  }
}


function toggleVol() {
  if (volumeSlider.value != 0) {
    prevVol = volumeSlider.value;
    volumeSlider.value = 0;
  }
  else {
    volumeSlider.value = prevVol;
  }
  updateVol();
}