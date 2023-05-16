const year = document.querySelector("footer > p > .year");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

year.innerHTML = currentYear;