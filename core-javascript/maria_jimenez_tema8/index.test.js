const { Transformaciones_string } = require('./index');

describe('ejercicio_8 strings', () => {
  it('check if the input is a not a string', () => { 
    const invalid_input = () => new Transformaciones_string(123);
    expect(invalid_input).toThrowError('The input must be a string');
  });

  it('check if the string is transformed to an array of characters', () => {
    const transform_to_array = new Transformaciones_string('hi world');
    expect(transform_to_array.stringToArray()).toStrictEqual([
      'h',
      'i',
      ' ',
      'w',
      'o',
      'r',
      'l',
      'd',
    ]);
  });

  it('check if the string is sorted randomly', () => {
    const random_sort = new Transformaciones_string('hi world');
    const original_array = ['h', 'i', ' ', 'w', 'o', 'r', 'l', 'd'];
    const sorted_array = random_sort.randomSort();

    expect(sorted_array).toEqual(expect.arrayContaining(original_array));
    expect(sorted_array).not.toStrictEqual(original_array);
  });

  it('check if an empty string is transformed to an empty array', () => {
    const transform_to_array = new Transformaciones_string('');
    expect(transform_to_array.stringToArray()).toStrictEqual([]);
  });

  it('check if the string is reversed', () => {
    const reverse_string = new Transformaciones_string('hi world');
    expect(reverse_string.reverseString()).toStrictEqual([
      'd',
      'l',
      'r',
      'o',
      'w',
      ' ',
      'i',
      'h',
    ]);
  });

  it('check if the vowels are removed', () => {
    const remove_vowels = new Transformaciones_string('hi world');
    expect(remove_vowels.removeVowels()).toBe('h wrld');
  });

  it('check if the consonants are removed', () => {
    const remove_consonants = new Transformaciones_string('hi world');
    expect(remove_consonants.removeConsonants()).toBe('i o');
  });

  it('check if the string is transformed to an array of words', () => {
    const string_to_words = new Transformaciones_string('hi world');
    expect(string_to_words.stringToWords()).toStrictEqual(['hi', 'world']);
  });

  it('check if the words are reversed', () => {
    const reverse_words = new Transformaciones_string('hi world');
    expect(reverse_words.reverseWords()).toStrictEqual(['world', 'hi']);
  });
});
