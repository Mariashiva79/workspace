// 3. Crea una función que convierta de Farenheit a Celsius, y si quieres que
// convierta de Celsius a Farenheit, y otra tercera que haga las dos cosas
// dependiendo el input.
/* eslint-disable camelcase */

function convert_degrees() {
  let celsius_or_farenheit = prompt(
    'Do you want to convert to Celsius or Farenheit?',
  );
  while (
    celsius_or_farenheit !== 'Celsius' &&
    celsius_or_farenheit !== 'Farenheit'
  ) {
    alert('Please, introduce a valid option');
    celsius_or_farenheit = prompt(
      'Do you want to convert to Celsius or Farenheit?',
    );
  }
  if (celsius_or_farenheit === 'Celsius') {
    let farenheit = prompt('Introduce the temperature in Farenheit');
    while (!/^-?[0-9]+(\.[0-9]+)?$/.test(farenheit)) {
      alert('Please, introduce a valid temperature, in °F');
      farenheit = prompt('Introduce the temperature in Farenheit');
    }
    convert_to_celsius(farenheit);
  } else if (celsius_or_farenheit === 'Farenheit') {
    let celsius = prompt('Introduce the temperature in Celsius');
    while (!/^-?[0-9]+(\.[0-9]+)?$/.test(celsius)) {
      alert('Please, introduce a valid temperature, in °C');
      celsius = prompt('Introduce the temperature in Celsius');
    }
    convert_to_farenheit(celsius);
  }
}

function convert_to_celsius(degrees) {
  const celsius = (degrees - 32) * (5 / 9);
  document.write(`${degrees}°F are ${celsius}°C`);
}

function convert_to_farenheit(degreesF) {
  const farenheit = degreesF * (9 / 5) + 32;
  document.write(`${degreesF}°C are ${farenheit}°F`);
}

convert_degrees();
