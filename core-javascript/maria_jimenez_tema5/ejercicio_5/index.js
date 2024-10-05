// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a
// una función que diga el número de veces que aparece el dígito en el
// número.

// digit = 3, number = 3543.13

let digit = prompt('Chose a digit');
// quería decirle que pida números sólo del 0 al 9 y que sólo se pueda
// meter un dígito y me he encontrado al buscar con las expresiones regulares :)
while (!/^[0-9]$/.test(digit)) {
  alert('Please enter a digit from 0 to 9');
  digit = prompt('Chose a digit');
}

let number = prompt('Enter the number');
while (!/^-?[0-9]+(\.[0-9]+)?$/.test(number)) {
  alert('Please, enter a valid number');
  number = prompt('Enter the number');
}

function find_number_of_times(user_digit, user_number) {
  let counter = 0;
  for (let i = 0; i < user_number.length; i++) {
    if (user_number[i] === user_digit) {
      counter++;
    }
  }

  // para que diga time, en lugar de times, si solo es 1 vez
  // la que aparece el dígito
  if (counter === 1) {
    alert(`${digit} is in ${number}, ${counter} time`);
  } else
    alert(
      `The digit ${digit} appears in the number ${number} = ${counter} times`,
    );
}

find_number_of_times(digit, number);
