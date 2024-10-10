// 4. Una función que pida una dirección de email y valide si
// la dirección es correcta o no.
/* eslint-disable camelcase */

const email = prompt('Introduce your email address');

// expresión regular para validar emails
if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
  alert('Your email address is valid');
} else {
  alert('Your email address is not valid');
}
