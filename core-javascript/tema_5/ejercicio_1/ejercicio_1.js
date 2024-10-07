// Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
// La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y
// cada número es la suma de los dos anteriores.
// Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

// Fn = Fn-1 + Fn-2
/* eslint-disable camelcase */

function calculate_fibonacci(user_number) {
  if (user_number === 0 || user_number === 1) {
    -2;
    return user_number;
  }
  return (
    calculate_fibonacci(user_number - 1) + calculate_fibonacci(user_number - 2)
  );
}
document.write(calculate_fibonacci(6));
