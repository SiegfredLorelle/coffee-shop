const genreBtns = document.querySelectorAll("#music > .grid-container > div");

console.log(genreBtns);

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
}