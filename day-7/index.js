function showMenu() {
  const menu = document.querySelectorAll(".menu");
  const modal = document.querySelectorAll(".notifications-modal");

  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle("active");
    modal[i].classList.toggle("translated");
  }
}

function showSearchBar() {
  const searchBar = document.querySelectorAll(".search-bar");

  for (var i = 0; i < searchBar.length; i++) {
    searchBar[i].classList.toggle("active");
  }
}
