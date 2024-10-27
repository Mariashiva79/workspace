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
// 4. Recibir la lista de todos los artículos
// 5. Contar cuántos hay
// 6. Listar los títulos
// 7. Hacer una tabla con los títulos y los contenidos

async function fetch_articles() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    console.log('Status ' + response.status);

    if (response.ok) {
      const json = await response.json();
      document.write(
        `<h3> Article list length: ${json.length}</h3>
        <h3>Title list:</h3> <ol> ${json
          .map((article) => `<li>${article.title}</li>`)
          .join('')}</ol><br>
          <br><table> <tr> <th>Title</th> <th>Content</th> </tr> ${json
            .map(
              (article) =>
                `<tr> <td>${article.title}</td> <td>${article.body}</td> </tr>`
            )
            .join('')} </table>`
      );
    } else {
      document.write(`<h1>Error !! ${response.status} can't find article</h1>`);
    }
}

fetch_articles();

module.exports = { fetch_articles };
