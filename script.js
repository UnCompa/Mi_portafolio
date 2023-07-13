const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav__menu")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav__menu--visible")
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
})

const boton1 = document.querySelector(".btn1")
boton1.addEventListener("click",()=>{
    window.open("https://google.com")
})