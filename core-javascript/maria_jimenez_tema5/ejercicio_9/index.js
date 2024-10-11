// 9. Escribir la función titulo(), la cual recibe un string y lo retorna
// convirtiendo la primera letra de cada palabra a mayúscula y las demás letras a
// minúscula, dejando inalterados los demás caracteres. Precondición: el
// separador de palabras es el espacio: " "
/* eslint-disable camelcase */

function titulo(texto) {
  if (typeof texto !== 'string') {
    return 'introduzca un texto válido';
  }
  const array_de_palabras = texto.split(' ');
  const texto_convertido = array_de_palabras.map(
    (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(),
  );
  return texto_convertido.join(' ');
}

module.exports = titulo;
