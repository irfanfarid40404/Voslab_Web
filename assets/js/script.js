let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");

menu.onclick = function() {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}