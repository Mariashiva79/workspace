// import nock from 'nock';

const fizzBuzz = require('./fizzbuzz');
const mapWithCb = require('./mapWithCb');

describe('1. fizzBuzz', () => {
  it('check if the number 33 is divisible by 3', () => {
    expect(fizzBuzz(33)).toBe('fizz');
  });

  it('check if the number 55 is divisible by 5', () => {
    expect(fizzBuzz(55)).toBe('buzz');
  });

  it('check if the number 15 is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('check if the number 23 is not divisible by 3 and 5', () => {
    expect(fizzBuzz(23)).toBe('23');
  });
});

describe('2. mapWithCb', () => {
  it('throws an error if first argument is not an array', () => {
    expect(() => mapWithCb('!array', () => {})).toThrow();
  });

  it('throws an error if second argument is not a function', () => {
    expect(() => mapWithCb([], '!function')).toThrow();
  });

  it('calls the given function at least once', () => {
    const mocked_function = jest.fn();
    mapWithCb([1], mocked_function);
    expect(mocked_function).toHaveBeenCalled();
  });

  it('calls the given function a number of times equal to the length of the given array', () => {
    const mocked_function = jest.fn();
    const test_array = [1, 2, 3, 4];

    mapWithCb(test_array, mocked_function);
    expect(mocked_function).toHaveBeenCalledTimes(test_array.length);
  });

  it('calls the given function with any one item from the given array', () => {
  
  });

  it('calls the given function a second time with the second item in the given array', () => {
    const mocked_function = jest.fn();
    mapWithCb([1, 2], mocked_function);
    expect(mocked_function).toHaveBeenCalled(2).toHaveBeenCalledWith();
  });

  });

  it('calls the given function a final time with the final item in the given array', () => {});
});
