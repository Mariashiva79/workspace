// import nock from 'nock';

const fizzBuzz = require('./fizzbuzz');
const mapWithCb = require('./mapWithCb');

describe('1. fizzBuzz', () => {
  it('check if the number 33 is divisible by 3', () => {
    expect(fizzBuzz(33)).toBe('fizz');
  });

  it('check if the number 9 is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('fizz');
  });

  it('check if the number 55 is divisible by 5', () => {
    expect(fizzBuzz(55)).toBe('buzz');
  });

  it('check if the number 10 is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });

  it('check if the number 15 is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('check if the number 225 is divisible by both 3 and 5', () => {
    expect(fizzBuzz(225)).toBe('fizzbuzz');
  });

  it('check if the number 23 is not divisible by 3 and 5', () => {
    expect(fizzBuzz(23)).toBe('23');
  });
  // - what should `fizzbuzz(0)` return?
  // - what should happen if the function is passed a string?
  it('check if the number is 0', () => {
    expect(fizzBuzz(0)).toBe('fizzbuzz');
  });

  it('check if the number is a string', () => {
    expect(fizzBuzz('hola')).toBe('Please, enter a valid number');
  });
  it('returns "Invalid input" for null', () => {
    expect(fizzBuzz(null)).toBe('Please, enter a valid number');
  });

  it('returns "Invalid input" for undefined', () => {
    expect(fizzBuzz(undefined)).toBe('Please, enter a valid number');
  });
});

describe('2. mapWithCb', () => {
  it('throws an error if first argument is not an array', () => {
    // toThrow necesita una función flecha para que pueda capturar el error
    // https://archive.jestjs.io/docs/en/22.x/expect#tothrowerror
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

  // entendiendo que se refiere a pasar el callback por cada item del array
  it('calls the given function with any one item from the given array', () => {
    const mocked_function = jest.fn();
    const test_array = [1, 2, 3, 4];

    mapWithCb(test_array, mocked_function);
    for (let i = 0; i < test_array.length; i++) {
      expect(mocked_function).toHaveBeenCalledWith(test_array[i]);
    }
  });

  it('calls the given function a second time with the second item in the given array', () => {
    const mocked_function = jest.fn();
    const test_array = [1, 2, 3, 4];

    mapWithCb(test_array, mocked_function);
    expect(mocked_function).nthCalledWith(2, test_array[1]);
  });

  it('calls the given function a final time with the final item in the given array', () => {
    const mocked_function = jest.fn();
    const test_array = [1, 2, 3, 4];

    mapWithCb(test_array, mocked_function);
    expect(mocked_function).toHaveBeenLastCalledWith(
      test_array[test_array.length - 1],
    );
  });
});
