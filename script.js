//Menu hambuergesa
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
const navBoton = document.querySelectorAll(".nav-link")

console.log(navBoton)

navBoton.forEach((boton)=>{
  boton.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu--visible")
  })
})

//Boton CV
const botonCV = document.querySelector("#btn-cv")
botonCV.addEventListener('click',()=>{
      window.open("./CV.html","_self")
})

//Proyectos 
const Proyectos1 = document.querySelector("#proyectos1")
Proyectos1.addEventListener('click',()=>{
  window.open("https://uncompa.github.io/La_calculadora/","_blank")
})
const Proyectos2 = document.querySelector("#proyectos2")
Proyectos2.addEventListener('click',()=>{
  window.open("https://uncompa.github.io/Pomodoro/","_blank")
})
const Proyectos3 = document.querySelector("#proyectos3")
Proyectos3.addEventListener('click',()=>{
  window.open("https://uncompa.github.io/Formulario_Transferencia/","_blank")
})
//Formulario
const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
  nombre: /^[a-zA-Z0-9\_\-\ ]{4,16}$/,
  correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  asunto:/^[a-zA-Z0-9]{4,30}$/,
  area:/^[a-zA-Z0-9\_\-\ ]{10,400}$/,
}
const campos = {
  nombre: false,
  correo: false,
  asunto: false,
  area: false
}

const validarFormulario = (e)=>{
  switch (e.target.name) {
    case "name":
      comprobarCampo(expresiones.nombre, e.target, "Nombre")
    break;
    case "email":
      comprobarCampo(expresiones.correo, e.target, "Email")
    break;
    case "subject":
      comprobarCampo(expresiones.asunto, e.target, "Asunto")
    break;
    case "comments":
      comprobarCampo(expresiones.area, e.target, "Area")
    break;
  }
}
const comprobarCampo = (expresion,input,campo)=>{
  if (expresion.test(input.value)){
    document.getElementById(`${campo}`).classList.remove("formulario__input--invalido")
    document.getElementById(`${campo}`).classList.add("formulario__input--valido")
    campos[campo] = true
  } else {
    document.getElementById(`${campo}`).classList.add("formulario__input--invalido")
    document.getElementById(`${campo}`).classList.remove("formulario__input--valido")
    campos[campo] = false
  }
}
inputs.forEach((input)=>{
  input.addEventListener("keyup", validarFormulario)
  input.addEventListener("blur", validarFormulario)
})

formulario.addEventListener('submit', (e)=>{
  e.defaultPrevented()
  if(campos.nombre && campos.correo && campos.asunto && campos.area)
    formulario.reset();
})
//Informacion Botones:
const infoBoton1 = document.querySelector("#info-btn1")
const infoBoton2 = document.querySelector("#info-btn2")
const infoBoton3 = document.querySelector("#info-btn3")
const infoBoton4 = document.querySelector("#info-btn4")
const infoBoton5 = document.querySelector("#info-btn5")
infoBoton1.addEventListener('click',()=>{
  open("https://facebook.com")
})
infoBoton2.addEventListener('click',()=>{
  open("https://github.com/UnCompa")
})
infoBoton3.addEventListener('click',()=>{
  open("https://instagram.com")
})
infoBoton4.addEventListener('click',()=>{
  open("https://tiktok.com")
})