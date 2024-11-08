/* Script de ejemplo  */

//Añadimos un event listener al botón HTML.
// let button = document.getElementById('button');
// button.addEventListener('click', ajaxCheckWeather);

// función para mostrar si hemos recibido unas cordenadas, 
// sino sale un alert
function muestraCoordenadas() {
  navigator.geolocation.getCurrentPosition(ajaxCheckWeather, () =>
    alert('Ups! algo va mal')
  );
}

muestraCoordenadas();
function ajaxCheckWeather(posicion) {
  //obtenemos la información que necesitamos del formulario

  let ubicacion = `${posicion.coords.latitude}, ${posicion.coords.longitude}`;
  //Mostramos la ubicación en el documento HTML
  muestraUbicacion(ubicacion);

  /* LLAMADA AJAX*/
  //usamos la API provista en   https://openweathermap.org/current#name */
  //config llamada AJAX
  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  let url =
    'https://api.openweathermap.org/data/2.5/weather?' +
    `lat=${posicion.coords.latitude}&lon=${posicion.coords.longitude}` +
    '&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d';
  //ejemplo  url = "https://api.openweathermap.org/data/2.5/weather?q=Pamplona,es&&lang=es&appid=xxxxxxxx"

  //hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
  //gestionamos los errores con una alerta
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseManager(JSON.parse(result)))
    .catch((error) => alert('error', error));
}

/*funcion principal que gestiona la respuesta a la llamada AJAX*/
function responseManager(resp) {
  console.log(resp);
  cambiaIcono(resp.weather[0].icon);
  muestraDesc(resp.weather[0].description);
  muestraTemperatura(Math.round(resp.main.temp - 273.15));
  muestraHumedad(resp.main.humidity);
// en este if else, le digo que si no encuentra la ciudad, muestre el país,
// y si no hay país muestre la palabra "globe".
// lo del continente no lo he encontrado en el json que devuelve la petición
// y según he visto en internet no lo proporciona.
  if (resp.name) {
    muestraCiudad(resp.name);
  } else 
  if (resp.sys && resp.sys.country) {
    muestraCiudad(resp.sys.country);
  } else {
    muestraCiudad('globe');
  }
}

/*funciones auxiliares para cambiar el HTML/CSS*/

function cambiaIcono(nombreIco) {
  //añade o cambia el icono que tiene el id icono
  //utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
  icono = document.getElementById('icono');
  icono.src = 'img/' + nombreIco + '@2x.png';
}

function muestraDesc(desc) {
  //Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
  prev = document.getElementById('prevision');
  prev.innerHTML = desc;
}
function muestraTemperatura(temperatura) {
  //Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
  grades = document.getElementById('temp');
  grades.innerHTML = temperatura;
}
function muestraHumedad(humedad) {
  hum = document.getElementById('humedad');
  hum.innerHTML = humedad;
}

function muestraUbicacion(ubicacion) {
  //Lleva un texto (que contiene la ubicación del usuario)
  elemento = document.getElementById('ubicacionPedida');
  elemento.innerHTML = ubicacion;
}

function muestraCiudad(lugar) {
  // lleva un texto que indica la ciudad al
  sitio = document.getElementById('lugar');
  sitio.innerHTML = lugar;
}
