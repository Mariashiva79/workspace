//  8. Crea un cronómetro en una página web (muy simple, sólo minutos y
//  segundos)
//  9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar
//  o continuar el tiempo. (No hace falta controlar el momento en el que se
//  para el tiempo a la hora de volver a empezar)

let seconds = 0;
let minutes = 0;
let intervalId = null;

function update_time() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
  }
}

function start_stop() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (minutes === 60) {
        clearInterval(intervalId);
      }
      update_time();
      document.getElementById('chronometer').innerHTML = `${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
}

addEventListener('click', () => {
  start_stop();
});

module.exports = { start_stop, update_time };
