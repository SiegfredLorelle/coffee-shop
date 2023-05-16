const mainWrapper = document.querySelector(".main-wrapper");
const sideNav = mainWrapper.querySelector(".side-nav > ul");


deviceWidth = window.innerWidth;
deviceHeight = window.innerHeight;

console.log(deviceWidth, deviceHeight, sideNav);

if (deviceWidth > deviceHeight) {
  mainWrapper.classList.toggle("desktop");
  sideNav.classList.toggle("desktop");
}