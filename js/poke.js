function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}


function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    
    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya')
    } else if (inputLangostelvis.checked) {
        alert('Seleccionaste a Langostelvis')
    } else if (inputTucapalma.checked) {
        alert('Seleccionaste a Tucapalma')
    } else if (inputPydos.checked) {
        alert('Seleccionaste a Pydos')
    } else { alert('Selecciona un pokemon porfa')
    }

}

window.addEventListener('load', iniciarJuego)