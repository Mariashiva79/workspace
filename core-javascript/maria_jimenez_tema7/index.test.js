const { array_of_multiples } = require('./index');
const prompt = require('prompt-sync');

jest.mock('prompt-sync', () => {
  return jest.fn().mockImplementation(() => {
    return jest.fn();
  });
});

describe('ejercicio_7 arrays', () => {
  it('check if the numbers are 5 and 3', () => {
    const mockPrompt = prompt();
    mockPrompt.mockReturnValueOnce('5').mockReturnValueOnce('3');
    
    expect(array_of_multiples()).toStrictEqual([
      3, 6, 9, 12, 15,
    ]);
  });

  jest.mock('prompt-sync', () => {
    return jest.fn().mockImplementation(() => {
      return jest.fn();
    });
  });

  describe('ejercicio_7 arrays', () => {
    it('check if the numbers are 5 and 3', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('5').mockReturnValueOnce('3');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(array_of_multiples(size_array, number_to_multiple)).toStrictEqual([
        3, 6, 9, 12, 15,
      ]);
    });

    it('check if the numbers are 8 and 24', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('8').mockReturnValueOnce('24');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(array_of_multiples(size_array, number_to_multiple)).toStrictEqual([
        24, 48, 72, 96, 120, 144, 168, 192,
      ]);
    });

    it('check if the numbers are 0 and 2', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('0').mockReturnValueOnce('2');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(array_of_multiples(size_array, number_to_multiple)).toStrictEqual(
        [],
      );
    });

    it('check if the numbers are 3 and 0', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('3').mockReturnValueOnce('0');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(array_of_multiples(size_array, number_to_multiple)).toStrictEqual([
        0, 0, 0,
      ]);
    });

    it('check if any argument is not a number', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('f').mockReturnValueOnce('0');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(() =>
        array_of_multiples(size_array, number_to_multiple),
      ).toThrow();
    });

    it('check if any argument is not an integer number', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('1.5').mockReturnValueOnce('0');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(() =>
        array_of_multiples(size_array, number_to_multiple),
      ).toThrow();
    });

    it('check if the second argument is a negative number', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('9').mockReturnValueOnce('-3');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(array_of_multiples(size_array, number_to_multiple)).toStrictEqual([
        -3, -6, -9, -12, -15, -18, -21, -24, -27,
      ]);
    });

    it('check if the first argument is a negative number', () => {
      const mockPrompt = prompt();
      mockPrompt.mockReturnValueOnce('-3').mockReturnValueOnce('6');

      const size_array = parseFloat(mockPrompt());
      const number_to_multiple = parseFloat(mockPrompt());
      expect(() =>
        array_of_multiples(size_array, number_to_multiple),
      ).toThrow();
    });
  });
});
