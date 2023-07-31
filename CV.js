const boton1 = document.querySelector("#btn1")
const boton2 = document.querySelector("#btn2")
boton1.addEventListener('click',()=>{
    window.open("./index.html")
})
boton2.addEventListener('click',()=>{
    window.open("./index.html", "_self")
})