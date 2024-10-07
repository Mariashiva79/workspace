// Define una función que al clicar el botón del ratón la llames y te escriba
// en la página un saludo

// Agregar un listener para detectar clics en la página
document.addEventListener('click', function () {
  // Escribir el saludo en el contenedor con id "saludo"
  document.getElementById('saludo').innerText = '¡Hola, bienvenido!';
});
