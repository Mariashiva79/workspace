// Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
// La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y
// cada número es la suma de los dos anteriores.
// Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)
// function calculate_fibonacci(user_number){
// let a = 0
// let b = 1
// let c = a + b
// b = c
// a = b

// calculate_fibonacci()
// }
// Probar a resolver con recursivo y con for in
// meter en todos los ejercicios el package.json (copiar en el .zip)

// Define una función que al clicar el botón del ratón la llames y te escriba
// en la página un saludo

// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a
// una función que diga el número de veces que aparece el dígito en el
// número.

// digit = 3, number = 3543.13

let digit = prompt('Chose a digit');
// quería decirle que pida números sólo del 0 al 9 y que sólo se pueda
// meter un dígito y me he encontrado al buscar con las expresiones regulares :)
while (!/^[0-9]$/.test(digit)) {
  alert('Please, introduce a digit enter 0 and 9');
  digit = prompt('Chose a digit');
}

let number = prompt('Introduce the number');
while (!/^-?[0-9]+(\.[0-9]+)?$/.test(number)) {
  alert('Please, introduce a valid number');
  number = prompt('Introduce the number');
}

function find_number_of_times(user_digit, user_number) {
  let counter = 0;
  for (let i = 0; i < user_number.length; i++) {
    if (user_number[i] === user_digit) {
      counter++;
    }
  }
  alert(counter);
}

find_number_of_times(digit, number);
