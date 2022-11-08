//! Nav Hamburger Menu
const hamburgerMenu = document.querySelector(".navMobileMenu");
const mobileUL = document.querySelector(".mobileUL");
hamburgerMenu.addEventListener("click", () => {
  mobileUL.style.display = mobileUL.style.display === "none" ? "block" : "none";
  setTimeout(() => {
    mobileUL.style.display = "none";
  }, 5000);
});

//! Dark Mode

const darkModeButton = document.querySelector(".lightModeContainer");
console.log(darkModeButton);

// elements to be changed
const modeBtn = document.getElementById("btn");
const haha = document.querySelectorAll("li");
const navLogo = document.querySelector(".navLogo");
const navMobileMenu = document.querySelector(".navMobileMenu");

darkModeButton.addEventListener("click", () => {
  [...haha].forEach(function (el) {
    modeBtn.checked
      ? (el.style.color = "#f1f3f5")
      : (el.style.color = "#1d1c1e");
  });
  //
  [...haha].forEach(function (el) {
    modeBtn.checked
      ? el.style.setProperty("--black", "white")
      : el.style.setProperty("--black", "black");
  });

  //
  navLogo.src = modeBtn.checked
    ? "../assets/shared/desktop/logo-light.png"
    : "../assets/shared/desktop/logo-dark.png";

  navMobileMenu.style.color = modeBtn.checked ? "#f1f3f5" : "#1d1c1e";
});

//! Redirect

let icon = document.querySelector(".navLogo");
console.log("");

icon.addEventListener("click", () => {
  window.location.href = "../index.html";
});
