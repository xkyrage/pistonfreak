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
// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .price-discount-button").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
