// // Toggle class active
// const navbarNav = document.querySelector(".navbar-nav");
// // When Hamburger Menu Clicked
// document.querySelector("#hamburger-menu").onClick = () => {
//   navbarNav.classList.toggle("active");
// };

// JavaScript
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  // Mengalihkan kelas "active" pada elemen navbarNav
  navbarNav.classList.toggle("active");
};

//  out sidebar exit

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
