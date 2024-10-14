// Array.from. Aquí usamos Array.from para convertir una cadena en una matriz de caracteres:
let str = '𝒳😂';

// separa str en un array de caracteres
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

// Try...catch MUY IMPORTANTE!! leerse la documentación del flipped 9

// IMPORTANTE TAMBIÉN
Relanzando (rethrowing)
En el ejemplo anterior usamos try...catch para manejar datos incorrectos. Pero, ¿es posible que ocurra otro error inesperado dentro del bloque try{...}? Como un error de programación (la variable no está definida) o algo más, no solo “datos incorrectos”.

Por ejemplo:

let json = '{ "age": 30 }'; // dato incompleto

try {
  user = JSON.parse(json); // <-- olvidé poner "let" antes del usuario

  // ...
} catch (err) {
  alert("Error en JSON: " + err); // Error en JSON: ReferenceError: user no está definido
  // (no es error JSON)
}
