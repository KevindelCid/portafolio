const menu = document.getElementById("menu");
const menub = document.getElementById("menu-back");
const btnMenu = document.getElementById("btnMenu");
const anchor = document.getElementsByClassName("anchor-menu");

window.addEventListener("load", (e) => {
  if (screen.width > 900) {
    menu.classList.add("display-menu");
    menu.classList.remove("hide-menu");
  } else {
    menu.classList.remove("display-menu");
    menu.classList.add("hide-menu");
  }
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
  if (screen.width < 900) {
    menu.classList.replace("display-menu", "hide-menu");
    btnMenu.classList.replace("change-burger-x", "change-x-burger");

    setTimeout(() => {
      btnMenu.textContent = "☰";
    }, 250);
  }
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
