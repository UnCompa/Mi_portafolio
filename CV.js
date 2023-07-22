const boton1 = document.querySelector("#btn1")
const boton2 = document.querySelector("#btn2")
boton1.addEventListener('click',()=>{
    window.open("http://127.0.0.1:5500/Proyectos/Portafolio/index.html")
})
boton2.addEventListener('click',()=>{
    window.open("http://127.0.0.1:5500/Proyectos/Portafolio/index.html", "_self")
})