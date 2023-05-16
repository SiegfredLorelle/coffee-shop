const mainWrapper = document.querySelector(".main-wrapper");
const sideNav = mainWrapper.querySelector(".side-nav");
const sideNavContainer = sideNav.querySelector("ul");
const footer = document.querySelector("footer");


deviceWidth = window.innerWidth;
deviceHeight = window.innerHeight;

console.log(deviceWidth, deviceHeight, sideNav);

if (deviceWidth > deviceHeight) {
  mainWrapper.classList.toggle("desktop");
  sideNavContainer.classList.toggle("desktop");
  sideNav.classList.toggle("desktop");
  footer.classList.toggle("desktop");
  // footer
}