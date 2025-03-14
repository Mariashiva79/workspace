// 1. Cambie el título de la página.
document.title = 'Había una vez...';

// 2. Cambie los colores de la página a tonos azules, verdes, naranjas o morados
//(a elección del alumno) usando propiedades CSS conocidas como:
// a. Fondo: background: #bdd2ea;
// b. Texto: color: blue;
// c. Imágenes: filter: hue-rotate(240deg);

// cambia el color de fondo
document.body.style.backgroundColor = '#bdd2ea';

// con esto le decimos que recorra todos los elementos 'p' y los ponga de color azul
const elements = document.getElementsByTagName('p');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue';
}

// como se quedaban textos sin poner en azul, he añadido otras líneas para completar,
// no he encontrado una manera más corta con "body" no me salía, con la clase "content" tampoco, además
// los textos que son imágenes no se colorean.
const elements = document.getElementsByTagName('a');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue';
}

const elements = document.getElementsByTagName('span');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue';
}

const elements = document.getElementsByTagName('div');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'blue';
}

// poner un filtro a las imagenes
const images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
  images[i].style.filter = 'hue-rotate(240deg)';
}

// 3. Añade un elemento HTML al árbol DOM de la página usando javascript

const myLabel = document.createElement('p');
const myText = document.createTextNode('I´m learning about DOM manipulation');
const place = document.getElementsByTagName('body')[0];

myLabel.appendChild(myText);
place.appendChild(myLabel);
