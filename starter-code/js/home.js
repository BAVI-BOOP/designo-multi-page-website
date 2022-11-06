//! Nav Hamburger Menu
const hamburgerMenu = document.querySelector(".navMobileMenu");
const mobileUL = document.querySelector(".mobileUL");
hamburgerMenu.addEventListener("click", () => {
  mobileUL.style.display = mobileUL.style.display === "none" ? "block" : "none";
  setTimeout(() => {
    mobileUL.style.display = "none";
  }, 2500);
});

//! Dark Mode

const darkModeButton = document.querySelector(".lightModeContainer");
console.log(darkModeButton);

// elements to be changed
const modeBtn = document.getElementById("btn");
const haha = document.querySelectorAll("#light");
const navLogo = document.querySelector(".navLogo");
const navMobileMenu = document.querySelector(".navMobileMenu");

darkModeButton.addEventListener("click", () => {
  [...haha].forEach(function (el) {
    console.log(modeBtn.checked);
    modeBtn.checked
      ? (el.style.color = "#f1f3f5")
      : (el.style.color = "#1d1c1e");
  });
  //
  navLogo.src = modeBtn.checked
    ? "../starter-code/assets/shared/desktop/logo-light.png"
    : "../starter-code/assets/shared/desktop/logo-dark.png";

  navMobileMenu.style.color = modeBtn.checked ? "#f1f3f5" : "#1d1c1e";
});
