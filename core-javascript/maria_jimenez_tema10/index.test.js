const { start_stop, update_time } = require('./index');

describe('test update_time', () => {
  it('should return 0:0 after 60 minutes',  () => {
    let minutes = 0;
    let seconds = 0;
    start_stop();
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000000);
    expect(minutes).toBe(0);
    expect(seconds).toBe(0);
  });
});
