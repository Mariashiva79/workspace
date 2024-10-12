const { Transformaciones_string } = require('./index');

describe('ejercicio_8 strings', () => {
  it('check if the string is transformed to an array of characters', () => {
    const transform_to_array = new Transformaciones_string('hello');
    expect(transform_to_array.stringToArray()).toStrictEqual(['h', 'e', 'l', 'l', 'o']);
  });
});
