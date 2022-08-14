const menu = document.getElementById("menu");
const menub = document.getElementById("menu-back");
const btnMenu = document.getElementById("btnMenu");
const anchor = document.getElementsByClassName("anchor-menu");

window.addEventListener("load", (e) => {
  screen.width > 1149 ? displayMenu() : hiddenMenu();
});

/*
// no funciona... saber por qué jaja
  anchor.document.addEventListener("click", (e) => {
    console.log(e);
  });
*/

const displayMenu = () => {
  menu.classList.contains("hide-menu") ? menuDisplayer() : hiddenMenu();
};

const menuDisplayer = () => {
  menu.classList.replace("hide-menu", "display-menu");
  btnMenu.classList.replace("change-x-burger", "change-burger-x");
  setTimeout(() => {
    btnMenu.textContent = "X";
  }, 250);
};
const hiddenMenu = () => {
  menu.classList.replace("display-menu", "hide-menu");
  btnMenu.classList.replace("change-burger-x", "change-x-burger");

  setTimeout(() => {
    btnMenu.textContent = "☰";
  }, 250);
};

window.addEventListener("resize", (e) => {
  screen.width > 1149 ? menuDisplayer() : hiddenMenu();
});

window.onscroll = function () {
  if (screen.width > 1149) {
    window.scrollY > 10
      ? menu.classList.add("background--dinamic")
      : menu.classList.remove("background--dinamic");
  } else {
    hiddenMenu();
  }
};
