// localStorage.setItem('frutaFav', 'manzana');
// localStorage.getItem('frutaFav');
// localStorage.removeItem('frutaFav');
// localStorage.clear();
// sessionStorage.setItem('animalFav', 'pera');
// sessionStorage.getItem('animalFav');
// navigator.getBattery().then((bat)=>{console.log(bat)})
// window.Notification.requestPermission();
// new Notification("Funciona en mi Navegador!");
// navigator.geolocation.getCurrentPosition(console.table);
document.title = 'Título cambiado!';
alert(document.URL); //alert sobre la URL del documento
document.images[0]; //Primera imagen del documento
/* Creamos nodos HTML */
var miEtiqueta = document.createElement('p');
var miTexto = document.createTextNode(
  'Soy capaz de insertar elementos en el DOM'
);

/* Buscamos nodo padre existente*/
var element = document.getElementsByTagName('body')[0];

/* Añadimos nodos; Usamos orden correcto */
miEtiqueta.appendChild(miTexto);
element.appendChild(miEtiqueta);
