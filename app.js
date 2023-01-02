const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".header_menu");

menu.addEventListener("click", () => {
    console.log(menuLinks)
    menu.classList.toggle("is_active");
    menuLinks.classList.toggle("active");
})