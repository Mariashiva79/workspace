// 7. Crea un programa que pida un valor de tamaño de array por input y
// después el número del cuál se van a obtener múltiplos y devuelva un
// array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])

const prompt = require('prompt-sync')();

function array_of_multiples() {
  const size_array = parseFloat(prompt('What is the size of the array?'));
  const number_to_multiples = parseFloat(prompt('number to multiples?'));
  if (
    !Number.isInteger(size_array) ||
    !Number.isInteger(number_to_multiples) ||
    size_array < 0
  ) {
    throw new Error('Please, enter a valid number');
  }
  const new_array = new Array(size_array);

  for (let i = 0; i < new_array.length; i++) {
    new_array[i] = number_to_multiples * (i + 1);
  }
  return new_array;
}

//array_of_multiples(user_size_array,user_number_to_multiples)

module.exports = {
  array_of_multiples,
};
