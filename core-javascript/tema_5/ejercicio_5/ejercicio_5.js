// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a
// una función que diga el número de veces que aparece el dígito en el
// número.
/* eslint-disable camelcase */
(digit = 3), (number = 3543.13);

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
