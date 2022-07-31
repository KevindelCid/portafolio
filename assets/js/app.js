const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btnMenu");
let menuState = false;
let scrollMenuState = false;
const body = document.getElementById("body");
function displayMenu() {
  if (!menuState) {
    menu.style.display = "block";
    btnMenu.textContent = "X";
    menuState = true;
  } else {
    menu.style.display = "none";
    menuState = false;
    btnMenu.textContent = "☰";
  }
}

function displayMenuOff() {
  if (menuState) {
    menu.style.display = "none";
    menuState = false;
    btnMenu.textContent = "☰";
  }
}
