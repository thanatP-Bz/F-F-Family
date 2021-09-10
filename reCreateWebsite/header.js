const menuBtn = document.getElementById("menu-btn");

const menuBar = document.querySelector(".menu-bar");

menuBtn.onclick = () => {
  menuBar.classList.toggle("active");
};
