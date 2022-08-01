const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btnMenu");
let menuState = false;
let scrollMenuState = false;
const body = document.getElementById("body");
function displayMenu() {
  if (!menuState) {
    menu.style.left = "0px";
    btnMenu.textContent = "X";
    menuState = true;
  } else {
    menu.style.left = "-1000rem";
    menuState = false;
    btnMenu.textContent = "☰";
  }
}

function displayMenuOff() {
  if (menuState) {
    menu.style.left = "-1000rem";
    menuState = false;
    btnMenu.textContent = "☰";
  }
}
