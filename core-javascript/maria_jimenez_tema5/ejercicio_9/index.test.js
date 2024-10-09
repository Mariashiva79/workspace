const titulo = require('./index');

describe('cada palabra empieza con letra mayúscula', () => {
  it('prueba con una palabra', () => {
    expect(titulo('maria')).toBe('Maria');
  });
  it('prueba con un string vacío', () => {
    expect(titulo('')).toBe('');
  });
  it('prueba con números', () => {
    expect(titulo(28)).toBe(28);
  });
});
