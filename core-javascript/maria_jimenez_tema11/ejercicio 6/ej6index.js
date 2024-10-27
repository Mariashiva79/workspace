// 6. Pide información con fetch a la url:
// https://jsonplaceholder.typicode.com/posts/1. Loguea el status de
// la petición e imprime por pantalla el contenido del artículo que has
// recibido.
// 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
// número del artículo que se recibe.
// 8. Modifica el ejercicio anterior y recibe la lista de todos los artículos.
// ¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los
// títulos y los contenidos?

// Notes:
// 1. Loguear estatus de la petición
// 2. Imprimir por pantalla contenido del artículo (titulo y cuerpo)

async function fetch_single_article() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log('Status ' + response.status);
  if (response.ok) {
    const json = await response.json();
    document.body.innerHTML = `<h5><strong>Título: </strong></h5>${json.title} <br> <br> <h5><strong>Artículo: </strong></h5>${json.body}`;
  } else {
    console.error('Error ' + response.status);
  }
}

fetch_single_article();

module.exports = { fetch_single_article };
