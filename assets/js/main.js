const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// const toggle = document.getElementById("nav-toggle");
// const nav = document.getElementById("nav-menu");
// toggle.addEventListener("click", () => {
//   nav.classList.toggle("show-menu");
// });

// remove menu in mobile

const navlink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navlink.forEach((n) => {
  n.addEventListener("click", linkAction);
});
