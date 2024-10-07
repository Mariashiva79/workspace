// 1.2. Imprimir sólo los números pares del 1 al 100 en log de consola
/* eslint-disable camelcase */

for (let i = 1; i < 100; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    console.log(i);
  }
}
