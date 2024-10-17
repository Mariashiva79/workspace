// 1.7 Crea una clase para trabajar diferentes transformaciones de un string
// inicial con diferentes métodos:
// - Conversión de todo el string a array de caracteres uno por uno
// - La ordenación de los caracteres de manera aleatoria
// - La inversión del orden de caracteres
// - Quitar las vocales
// - Quitar las consonantes.
// - Array de palabras
// - Inversión del orden de las palabras del string

class Transformaciones_string {
  constructor(string) {
    this.string = string;
    if (typeof string !== 'string') {
      throw new Error('The input must be a string');
    }
  }

  stringToArray() {
    return this.string.split('');
  }

  randomSort() {
    return this.string.split('').sort(() => Math.random() - 0.5);
  }
  reverseString() {
    return this.string.split('').reverse();
  }

  removeVowels() {
    return this.string.replace(/[aeiou]/gi, '');
  }

  removeConsonants() {
    return this.string.replace(/[bcdfghjklmnñpqrstvwxyz]/gi, '');
  }

  stringToWords() {
    return this.string.split(' ');
  }

  reverseWords() {
    return this.string.split(' ').reverse();
  }
}

module.exports = { Transformaciones_string };
