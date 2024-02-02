// funciones.js

var video = document.getElementById('video');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');
var restartButton = document.getElementById('restart');
var loopOnButton = document.getElementById('loop-on');
var loopOffButton = document.getElementById('loop-off');
var volumeOffButton = document.getElementById('volume-off');
var volumeOnButton = document.getElementById('volume-on');
var volumeLowButton = document.getElementById('volume-low');
var volumeRangeInput = document.getElementById('volume-range');
var volumeHighButton = document.getElementById('volume-high');
var fullscreenOnButton = document.getElementById('fullscreen-on');

pauseButton.addEventListener('click', play_pause);
stopButton.addEventListener('click', stop);
restartButton.addEventListener('click', restart);
loopOnButton.addEventListener('click', loop);
loopOffButton.addEventListener('click', loop);
volumeOffButton.addEventListener('click', mute);
volumeOnButton.addEventListener('click', mute);
volumeLowButton.addEventListener('click', volume_low);
volumeRangeInput.addEventListener('input', volume);
volumeHighButton.addEventListener('click', volume_high);
fullscreenOnButton.addEventListener('click', fullscreen);

function play_pause() {
    if (video.paused) {
        video.play();
        pauseButton.innerHTML = '<svg><!-- Icono de pausa --></svg>';
    } else {
        video.pause();
        pauseButton.innerHTML = '<svg><!-- Icono de reproducción --></svg>';
    }
}

function stop() {
    video.pause();
    video.currentTime = 0;
    pauseButton.innerHTML = '<svg><!-- Icono de reproducción --></svg>';
}

function restart() {
    video.currentTime = 0;
}

function loop() {
    video.loop = !video.loop;
    loopOnButton.classList.toggle('oculto');
    loopOffButton.classList.toggle('oculto');
}

function mute() {
    video.muted = !video.muted;
    volumeOffButton.classList.toggle('oculto');
    volumeOnButton.classList.toggle('oculto');
}

function volume_low() {
    // Lógica para ajustar el volumen bajo
}

function volume() {
    video.volume = volumeRangeInput.value / 100;
}

function volume_high() {
    // Lógica para ajustar el volumen alto
}

function speed_low() {
    // Lógica para ajustar la velocidad baja
}

function speed_high() {
    // Lógica para ajustar la velocidad alta
}

function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}
