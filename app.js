const menu = document.querySelector("#mobile_menu");
const bar = document.querySelectorAll("bar");

menu.addEventListener("click", () => {
    menu.classList.toggle("is_active");
})