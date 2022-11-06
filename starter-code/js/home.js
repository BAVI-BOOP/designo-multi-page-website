const hamburgerMenu = document.querySelector(".navMobileMenu");
const mobileUL = document.querySelector(".mobileUL");
hamburgerMenu.addEventListener("click", () => {
  mobileUL.style.display = mobileUL.style.display === "none" ? "block" : "none";
  setTimeout(() => {
    mobileUL.style.display = "none";
  }, 2500);
});
