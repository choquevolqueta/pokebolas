let ataqueJugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}


function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else { alert('Selecciona un pokemon porfa')
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        // Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        // Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        // Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
}
function aleatorio(min, max){
     return Math.floor(Math.random() * (max-min +1) +min)   
}

window.addEventListener('load', iniciarJuego)