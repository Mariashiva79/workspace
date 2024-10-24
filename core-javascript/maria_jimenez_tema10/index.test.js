/**
 * @jest-environment jsdom
 */

const { start_stop, update_time } = require('./index');

const fs = require('fs'); // con esto por fin lee el html!!!
window.document.body.innerHTML = fs.readFileSync('./index.html');

describe('test update_time', () => {
  // it('should return 0:0 after 60 minutes', () => {
  //   let minutes = 0;
  //   let seconds = 0;

  //   start_stop();
  //   jest.useFakeTimers();
  //   jest.advanceTimersByTime(5000000);
  //   expect(minutes).toBe(0);
  //   expect(seconds).toBe(0);
  // });
  test('click stops and restarts the timer', () => {
    let minutes = 0;
    let seconds = 0;
    let intervalId = null;
    jest.useFakeTimers();
    start_stop();
    jest.advanceTimersByTime(5000);
    expect(seconds).toBe(5);
    document.dispatchEvent(new Event('click'));
    expect(intervalId).toBe(null);
    jest.advanceTimersByTime(5000);
    expect(seconds).toBe(5);
    document.dispatchEvent(new Event('click'));
    jest.advanceTimersByTime(5000);
    expect(seconds).toBe(10);
    jest.runAllTimers();
    expect(seconds).toBe(0);
    expect(minutes).toBe(0);
  });
});
