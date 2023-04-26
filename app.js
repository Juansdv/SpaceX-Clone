const boton = document.getElementById("fa-solid")

const seccion = document.getElementById("starship-section")

const nav = document.getElementById("nav-content1")

function efecto(){
    boton.addEventListener("click", () => {
        seccion.style.filter="brightness(0.5)",
        nav.style.filter="brightness(0.5)"
    })
}

function efectoover(){
    boton.addEventListener("click", () => {
        seccion.style.filter="brightness(1)"
        nav.style.filter="brightness(1)"
    })
}