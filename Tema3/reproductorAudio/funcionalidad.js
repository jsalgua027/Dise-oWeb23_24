var audio=document.getElementById("audio");
var boton_play=document.getElementById("play");
var boton_stop=document.getElementById("stop");
var boton_pausa=document.getElementById("pausa");
var boton_reiniciar=document.getElementById("reiniciar");
var boton_repetir_on=document.getElementById("loop-on");
var boton_repetir_off=document.getElementById("loop-off");
var volume_off = document.getElementById("volume-off");
var volume_on = document.getElementById("volume-on");
var bajar_volumen = document.getElementById("bajar-volumen");
var subir_volumen = document.getElementById("subir-volumen");
var rango_volumen = document.getElementById("volume-range");
var rango_tiempo = document.getElementById("time-range");
var tiempo = document.getElementById("tiempo");
window.onload = tiempo_repro();

function play() {
    
    if (audio.paused) {
        audio.play();
        cambiarIconosPlayPause();
    } else {
       
        audio.pause();
        cambiarIconosPlayPause();
    }
 
}

function cambiarIconosPlayPause() {
    if (audio.paused) {
        
        boton_play.style.display = "inline-block";
        boton_pausa.style.display = "none";
    } else {
       
        boton_play.style.display = "none";
        boton_pausa.style.display = "inline-block";
    }
}


function stop() {
    audio.pause();
    audio.currentTime = 0;
    rango_tiempo.value = 0;
}
function pausa() {
    audio.pause();
    cambiarIconosPlayPause()
}
function reiniciar() {
    audio.currentTime = 0;
    rango_tiempo.value = 0;
    audio.play();
    cambiarIconosPlayPause()
}

function repetir() {
   
    audio.loop = !audio.loop;
    cambioIconosLoop();
  
}

function mute() {
       audio.muted = !audio.muted;
        cambioIconosVolumen()
}

function volume() {
    audio.volume = rango_volumen.value / 100;
    //control_mute();
}

function bajar_vol() {
    if (audio.volume >= 0.05) {
        audio.volume -= 0.05;
        rango_volumen.value -= 5;
    } else {
        audio.volume = 0;
        rango_volumen.value = 0;
     
    }
    cambioIconosVolumen()
}

function subir_vol() {
    if (audio.volume <= 0.95) {
        audio.volume += 0.05;
        rango_volumen.value = Number(rango_volumen.value) + 5;
       
    } else {
        audio.volume = 1;
        rango_volumen.value = 100;
        cambioIconosVolumen()
}
}
function cambioIconosVolumen() {
    if (audio.muted) {
        volume_on.style.display = "none";
        volume_off.style.display = "inline-block";
    } else {
        volume_on.style.display = "inline-block";
        volume_off.style.display = "none";
    }
}

//Loop


function cambioIconosLoop() {
    if (audio.loop) {
        boton_repetir_on.style.display = "none";
        boton_repetir_off.style.display = "inline-block";
    } else {
        boton_repetir_off.style.display = "none";
        boton_repetir_on.style.display = "inline-block";
    }
}

// tiempo
//Evento para el tiempo transcurrido

audio.addEventListener("timeupdate", tiempo_repro, true);
/*
 audio.addEventListener("loadedmetadata", function() {
    tiempo_repro();
});  */


function seg_to_contador(seg) {

    if (isNaN(seg)) { //Controla que entre a 0
        seg = 0;
    }
    var contador = "00:00";
    if (seg < 3600) {
        contador = new Date(seg * 1000).toISOString().substring(14, 19)
    } else {
        contador = new Date(seg * 1000).toISOString().substring(11, 19)
    }

    return contador;
}


function tiempo_repro() {

    tiempo.innerHTML = seg_to_contador(audio.currentTime) + "/" + seg_to_contador(audio.duration);

    if (isNaN(audio.duration)) { //Controla cuando no ha cargado el audio
        rango_tiempo.value = 0;
    } else {
        rango_tiempo.value = audio.currentTime / audio.duration * 100;
    }

    rango_tiempo.step = 100 / audio.duration;

    if (audio.currentTime == audio.duration) { //Cuando acaba cambia el boton play/pause
        boton_pause.className = "oculto";
        boton_play.className = "visible";

    }
}


//Duracion


function modificar_tiempo() {
    let nuevo_tiempo = rango_tiempo.value * audio.duration / 100;
    audio.currentTime = nuevo_tiempo;
    tiempo.innerHTML = seg_to_contador(nuevo_tiempo) + "/" + seg_to_contador(audio.duration);

}


/*
 
boton_play.addEventListener("click", play);
boton_stop.addEventListener("click", stop);
boton_pausa.addEventListener("click", pausa);
boton_reiniciar.addEventListener("click", reiniciar);
boton_repetir_on.addEventListener("click", repetir);
boton_repetir_off.addEventListener("click", repetir);
volume_off.addEventListener("click", mute);
volume_on.addEventListener("click", mute);
tiempo.addEventListener("input",modificar_tiempo);
bajar_volumen.addEventListener("click", bajar_vol);
subir_volumen.addEventListener("click", subir_vol);
*/

