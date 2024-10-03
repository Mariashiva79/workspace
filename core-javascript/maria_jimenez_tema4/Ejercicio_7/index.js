// 1.7 Página web ejecutada en bucle infinito que pregunta por una
// multiplicación y te responde con la solución mientras te vuelve a
// preguntar de nuevo.

while (true) {
  const number_1 = parseFloat(prompt('Please, enter the first number'), 10);
  const number_2 = parseFloat(prompt('Please, enter the second number'), 10);

  const result = number_1 * number_2;

  if (Number.isNaN(result)) {
    alert('Input a valid number, please');
    continue;
  }
  alert(result);
}
