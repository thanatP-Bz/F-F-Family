const menuBtn = document.getElementById("menu-btn");
const colorBtn = document.getElementById("color-btn");
const themeBtn = document.getElementById("theme-btn");

const menuBar = document.querySelector(".menu-bar");
const colorsPalette = document.querySelector(".colors-palette");
const btnColorChange = document.querySelectorAll(".colors-palette .color");

menuBtn.onclick = () => {
  menuBar.classList.toggle("active");
  colorsPalette.classList.remove("active");
};

colorBtn.onclick = () => {
  colorsPalette.classList.toggle("active");
  menuBar.classList.remove("active");
};

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

btnColorChange.forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main-color", color);
  };
});

document.onclick = (e) => {
  if (e.target.id === colorsPalette) {
    colorsPalette.classList.remove("active");
  }
};
