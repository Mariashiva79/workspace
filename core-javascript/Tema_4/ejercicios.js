// mostrar por pantalla NO ES CONSOLE.LOG, es un prompt
// control + click en el enlace del scrip de html

// 1.1. Imprimir los números del 1 al 100 de uno en uno como alerta
// for (let i = 1; i <= 100; i++) {
//  alert(i);
// }
// David dice que es mejor ++i; para hacerlo así hay que tener en cuenta por que número empieza
// en este caso da igual porque ya empieza por 1.
// se puede dar al f5 poniendo puntos de ruptura para ver información sobre la línea
// mirarse spread operator

// 1.2. Imprimir sólo los números pares del 1 al 100 en log de consola
// for (let i = 1; i < 100; i++) {
//   const esPar = i % 2 === 0;
//   if (esPar) {
//     console.log(i);
//   }
// }
// 1.3. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla

const multiplos_id = document.querySelector('multiplos');

for (let i = 1; i < 1000; i++) {
  const multiplos_de_20 = i % 20 === 0;
  if (multiplos_de_20) {
    multiplos_id.innerHTML = i;
  }
}
// 1.4. Dibujar un cuadrado por pantalla
