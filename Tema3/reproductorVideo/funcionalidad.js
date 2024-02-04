var video = document.getElementById("video");
var boton_play = document.getElementById("play");
var boton_pause = document.getElementById("pause");
var volume_off = document.getElementById("volume-off");
var volume_on = document.getElementById("volume-on");
var loop_off = document.getElementById("loop-off");
var loop_on = document.getElementById("loop-on");
var rango_volumen = document.getElementById("volume-range");
var rango_tiempo = document.getElementById("time-range");
var ultimo_vol = 50;
var indicador_velocidad = document.getElementById("velocidad");
var tiempo = document.getElementById("tiempo");

video.addEventListener("loadeddata", function () {
  // Video completamente cargado
  tiempo_repro();
});
video.addEventListener("loadedmetadata", function () {
  console.log("Metadata loaded");
});

video.addEventListener("canplay", function () {
  console.log("Video can be played");
});
window.onload = tiempo_repro();
/*controlo que en la carga inicial no me salgan los botones*/
loop_on.style.display = "none";
boton_pause.style.display = "none";
/*play y pausa */
function play_pause() {
  tiempo_repro();
  if (video.paused) {
    video.play();
    cambiarIconosPlayPause();
  } else {
    video.pause();
    cambiarIconosPlayPause();
  }
}
// cambios de iconos cuando se pulsa
function cambiarIconosPlayPause() {
  if (video.paused) {
    boton_play.style.display = "none";
    boton_pause.style.display = "inline-block";
  } else {
    boton_pause.style.display = "none";
    boton_play.style.display = "inline-block";
  }
}

function stop() {
  if (video.currentTime != 0) {
    video.pause();
    video.currentTime = 0;
    boton_pause.className = "oculto";
    boton_play.className = "visible";
    rango_tiempo.value = 0;
  }
}

function restart() {
  video.currentTime = 0;
  rango_tiempo.value = 0;
  if (video.paused) {
    video.play();
    boton_play.className = "oculto";
    boton_pause.className = "visible";
  }
}

function control_mute() {
  if (video.volume == 0) {
    volume_off.className = "oculto";
    volume_on.className = "visible";
  } else {
    volume_on.className = "oculto";
    volume_off.className = "visible";
  }
}

function mute() {
  if (video.volume > 0) {
    ultimo_vol = video.volume;

    video.volume = 0;
    rango_volumen.value = 0;
  } else {
    video.volume = ultimo_vol;
    rango_volumen.value = ultimo_vol * 100;
  }

  control_mute();
}

function volume() {
  video.volume = rango_volumen.value / 100;
  control_mute();
}

function volume_low() {
  if (video.volume >= 0.05) {
    video.volume -= 0.05;
    rango_volumen.value -= 5;
  } else {
    video.volume = 0;
    rango_volumen.value = 0;
    control_mute();
  }
}

function volume_high() {
  if (video.volume <= 0.95) {
    video.volume += 0.05;
    rango_volumen.value = Number(rango_volumen.value) + 5;
    control_mute();
  } else {
    video.volume = 1;
    rango_volumen.value = 100;
  }
}
function repetir() {
  cambioIconosLoop();
  video.loop = !video.loop;
}
//Cambio de iconos para los botones de loop

function cambioIconosLoop() {
  if (video.loop) {
    loop_on.style.display = "none";
    loop_off.style.display = "inline-block";
  } else {
    loop_off.style.display = "none";
    loop_on.style.display = "inline-block";
  }
}

//Evento para el tiempo transcurrido

video.addEventListener("timeupdate", tiempo_repro, true);

function seg_to_contador(seg) {
  if (isNaN(seg)) {
    //Controla que entre a 0
    seg = 0;
  }
  var contador = "00:00";
  if (seg < 3600) {
    contador = new Date(seg * 1000).toISOString().substring(14, 19);
  } else {
    contador = new Date(seg * 1000).toISOString().substring(11, 19);
  }

  return contador;
}

function tiempo_repro() {
  tiempo.innerHTML =
    seg_to_contador(video.currentTime) + "/" + seg_to_contador(video.duration);

  if (isNaN(video.duration)) {
    //Controla cuando no ha cargado el video
    rango_tiempo.value = 0;
  } else {
    rango_tiempo.value = (video.currentTime / video.duration) * 100;
  }

  rango_tiempo.step = 100 / video.duration;

  if (video.currentTime == video.duration) {
    //Cuando acaba cambia el boton play/pause
    boton_pause.className = "oculto";
    boton_play.className = "visible";
  }
}

//Duracion

function modificar_tiempo() {
  let nuevo_tiempo = (rango_tiempo.value * video.duration) / 100;
  video.currentTime = nuevo_tiempo;
  tiempo.innerHTML =
    seg_to_contador(nuevo_tiempo) + "/" + seg_to_contador(video.duration);
}

//Backward y Forward

function seg_backward() {
  if (video.paused) {
    //Para que no se inicie automaticamente
    video.currentTime -= 5;
    video.pause();
  } else {
    video.currentTime -= 5;
  }
}

function seg_forward() {
  if (video.paused) {
    //Para que no se inicie automaticamente
    video.currentTime += 5;
    video.pause();
  } else {
    video.currentTime += 5;
  }
}

//Pantalla completa

function fullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    // IE/Edge
    video.msRequestFullscreen();
  }

  // Muestra los controles del navegador en modo de pantalla completa
  if (
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    video.controls = true;
  }
}
