const genreBtns = document.querySelectorAll(
  "#music > .grid-container > button"
);
const audioPlayer = document.querySelector("#music > .audio-player");
// console.log(audioPlayer);

genreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    HighlightBtn(btn);
  });
});
  


function HighlightBtn(btn) {
  genreBtns.forEach(btn => {
    btn.classList.remove("genre-highlight");
  });
  btn.classList.add("genre-highlight");
  console.log(btn.value);
  audioPlayer.src = `./audio/${btn.value}.mp3`;
  togglePlay();
}

function togglePlay() {
  console.log(audioPlayer.paused);
  if (audioPlayer.paused) {
    audioPlayer.play();
  }
  else {
    audioPlayer.pause();
  }
};