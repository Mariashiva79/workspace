const titulo = require('./index');

describe('cada palabra empieza con letra mayúscula', () => {
  it('prueba con una palabra', () => {
    expect(titulo('maría')).toBe('María');
  });
  it('prueba con un string vacío', () => {
    expect(titulo('')).toBe('');
  });
  it('prueba con un string solo espacio', () => {
    expect(titulo(' ')).toBe(' ');
  });
  it('prueba con números', () => {
    expect(titulo(28)).toBe('introduzca un texto válido');
  });
  it('prueba con numero string', () => {
    expect(titulo('28')).toBe('28');
  });
  it('prueba con un string', () => {
    expect(titulo('bienvenido a la jungla!')).toBe('Bienvenido A La Jungla!');
  });
  it('prueba con un string con mayúsculas', () => {
    expect(titulo('LA JUNGLA = ALBAÑILES DIGITALES!')).toBe(
      'La Jungla = Albañiles Digitales!',
    );
  });
  it('prueba con caracteres especiales', () => {
    expect(titulo('!@#$%^&*()')).toBe('!@#$%^&*()');
  });
  it('prueba con valor null', () => {
    expect(titulo(null)).toBe('introduzca un texto válido');
  });
  it('prueba con valor undefined', () => {
    expect(titulo(undefined)).toBe('introduzca un texto válido');
  });
});
