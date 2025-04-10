function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

function toggleSearch() {
  document.getElementById("search").classList.toggle("active");
}
function toggleSearch() {
  let searchBar = document.getElementById("search");

  // Toggle class to show/hide the search bar
  if (window.innerWidth < 1024) {
    // Only for smaller screens
    searchBar.classList.toggle("active");
  }
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  let menu = document.getElementById("nav-links");
  let toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove("active");
  }
});