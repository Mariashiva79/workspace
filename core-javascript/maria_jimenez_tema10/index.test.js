/**
 * @jest-environment jsdom
 */

let { start_stop, seconds, minutes, intervalId } = require('./index');

describe('Chronometer Tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    document.body.innerHTML = '<div id="chronometer">00:00</div>';
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('click event starts and stops the timer', () => {
    document.dispatchEvent(new Event('click'));
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    document.dispatchEvent(new Event('click'));
    jest.advanceTimersByTime(5000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:05');
    document.dispatchEvent(new Event('click'));
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
    expect(document.getElementById('chronometer').innerHTML).toBe('00:15');
  });

  it('timer resets after 60 minutes', () => {
    start_stop();
    jest.advanceTimersByTime(3600000);
    expect(document.getElementById('chronometer').innerHTML).toBe('00:00');
  });
});
