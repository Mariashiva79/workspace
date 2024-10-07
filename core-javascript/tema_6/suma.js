function suma(a, b) {
  return a + b;
}
module.exports = suma;

// si en el módulo hay más de una función llamar en la carpeta de test
// import y llamar a cada función con modulo.funcion. P.E. llamamos a las funciones
// a, b, c y al modulo todas, para llamar en los test a la función b es todas.b
