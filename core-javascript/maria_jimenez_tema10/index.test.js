/**
 * @jest-environment jsdom
 */

// este comentario es para que jest sepa que estamos trabajando con el DOM
// y no con Node.js
// https://jestjs.io/docs/configuration#testenvironment-string

const { start_stop } = require('./index');

describe('Chronometer Tests', () => {
  beforeEach(() => {
    jest.useFakeTimers(); 
    document.body.innerHTML = '<div id="chronometer">00:00</div>'; // le doy un html "de mentira" para que jest tenga algo con lo que trabajar
  });

  afterEach(() => {
    jest.advanceTimersByTime(3600000) // Resetea las variables minutos y segundos al llegar a 60 minutos
    jest.clearAllTimers(); 
  });

  it('click event starts and stops the timer', () => {
    document.dispatchEvent(new Event('click')); // Simula un click en el documento "de mentira"
    jest.advanceTimersByTime(5000); // Avanza 5 segundos
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    document.dispatchEvent(new Event('click')); // segundo click para parar el cronómetro
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    document.dispatchEvent(new Event('click')); // tercer click para reanudar el cronómetro
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:10');
  });

  it('start_stop starts and stops the timer correctly', () => {
    
    start_stop();
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    start_stop();
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    start_stop();
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:10');
  });

  it('timer resets after 60 minutes', () => {
    start_stop();
    jest.advanceTimersByTime(3600000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:00');
  });
});