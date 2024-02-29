$(document).ready(function () {
  $("button").bind("click", function () {
    $(".line-menu").toggleClass("active");
    $(".line-menu").removeClass("no-animation");
  });
});

/* with pure javascript */

// window.onload = function () {
//   const lineMenu = document.querySelectorAll(".line-menu");
//   const button = document.querySelectorAll(".menu-icon")[0];

//   button.addEventListener("click", function () {
//     for (var i = 0; i < lineMenu.length; i++) {
//       lineMenu[i].classList.toggle("active");
//       lineMenu[i].classList.remove("no-animation");
//     }
//   });
// };
