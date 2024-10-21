// 6. Pide información con fetch a la url:
// https://jsonplaceholder.typicode.com/posts/1. Loguea el status de
// la petición e imprime por pantalla el contenido del artículo que has
// recibido.
// 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
// número del artículo que se recibe.
// 8. Modifica el ejercicio anterior y recibe la lista de todos los artículos.
// ¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los
// títulos y los contenidos?

let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
let text = await response.text();
console.log(text);
if (response.ok) { 
    let json = await response.text();
  } else {
    console.log("Error-HTTP: " + response.status);
  }
