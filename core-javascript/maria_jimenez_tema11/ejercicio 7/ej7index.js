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
// 3. Permitir cambiar el número del artículo

async function fetch_article() {
  let article_number = parseFloat(
    prompt('Introduce the number of the article you want to see: ')
  );

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${article_number}`
  );
  console.log('Status ' + response.status);

  if (response.ok) {
    const json = await response.json();
    document.write(
      `<strong>Number of article:</strong> ${json.id} <br> <br> <strong>Title of article:</strong> ${json.title} <br> <br> <strong>Article:</strong> <br> <br>${json.body}`
    );
  } else {
    document.write(`<h1>Error !! ${response.status} can't find article</h1>`);
  }
}

fetch_article();

module.exports = { fetch_article };
