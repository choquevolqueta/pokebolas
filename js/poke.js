let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('selec-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar. addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('selec-masc')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('selec-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
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
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let MascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (MascotaAleatorio == 1) {
        // Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (MascotaAleatorio == 2) {
        // Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        // Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let AtaqueAleatorio = aleatorio(1,3)
    
    if(AtaqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (AtaqueAleatorio ==2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
    
}
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador 
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
       crearMensajefinal("Que pro, ganaste!")
        
    } else if (vidasJugador == 0){
        crearMensajefinal("Por Incel, perdiste...")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesJugador = document.getElementById('ataque-del-jugador')
    let ataquesEnemigo = document.getElementById('ataque-del-enemigo')

        let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo


   
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajefinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')


   
    sectionMensajes.innerHTML = resultadoFinal



    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}


function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
     return Math.floor(Math.random() * (max-min +1) +min)   
}

window.addEventListener('load', iniciarJuego)