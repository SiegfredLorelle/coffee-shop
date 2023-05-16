const mainWrapper = document.querySelector(".main-wrapper");
// const sideNav = mainWrapper.querySelector(".side-nav");
// const sideNavContainer = sideNav.querySelector("ul");
const footer = document.querySelector("footer");
const main = document.querySelector("main")
changeLayout();
window.addEventListener("resize", changeLayout);


function changeLayout() {
  if (window.innerWidth > window.innerHeight) {
    mainWrapper.classList.add("desktop");
    footer.classList.add("desktop");
  }
  else {
    mainWrapper.classList.remove("desktop");
    footer.classList.remove("desktop");
  }

}