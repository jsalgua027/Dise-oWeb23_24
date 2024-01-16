var audio=document.getElementById("audio");
var boton_play=document.getElementById("play");
var boton_stop=document.getElementById("stop");
var boton_pausa=document.getElementById("pausa");
var boton_reiniciar=document.getElementById("reiniciar");
var boton_repetir=document.getElementById("loop");
var volume_off = document.getElementById("volume-off");
var volume_on = document.getElementById("volume-on");
var bajar_volumen = document.getElementById("bajar-volumen");
var subir_volumen = document.getElementById("subir-volumen");


function play() {
    if(audio.paused){
        audio.play;
    }
}
function pausa() {
    audio.paused;
    
}
