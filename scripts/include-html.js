
/*function includeHTML() {
  var elements = document.querySelectorAll('[include-html]');
  var i = 0;

  function loadNext() {
    if (i < elements.length) {
      var elmnt = elements[i];
      var file = elmnt.getAttribute('include-html');
      if (file) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', file, false); // Solicitud síncrona
        xhttp.send();
        if (xhttp.readyState == 4) { // Comprobar si la solicitud está completa
          if (xhttp.status == 200) {
            elmnt.innerHTML = xhttp.responseText;
          } else {
            elmnt.innerHTML = 'Page not found.';
          }
          elmnt.removeAttribute('include-html');
          i++;
          loadNext(); // Llamar a la función recursivamente para cargar el siguiente elemento
        }
      }
    }
  }

  loadNext(); // Iniciar el proceso de carga
  xhttp = null;
}*/


async function includeHTML() {
  var elements = document.querySelectorAll('[include-html]');
  var i = 0;

  function loadNext() {
    if (i < elements.length) {
      var elmnt = elements[i];
      var file = elmnt.getAttribute('include-html');
      if (file) {
        var xhttp = new XMLHttpRequest();

        xhttp.open('GET', file, false); // Solicitud síncrona
        xhttp.send();
        if (xhttp.readyState == 4) { // Comprobar si la solicitud está completa
          if (xhttp.status == 200) {
            elmnt.innerHTML = xhttp.responseText;
          } else {
            elmnt.innerHTML = 'Page not found.';
          }
          elmnt.removeAttribute('include-html');
          i++;
          loadNext(); // Llamar a la función recursivamente para cargar el siguiente elemento
        }
      }
    }
  }

  loadNext(); // Iniciar el proceso de carga
  xhttp = null;
}

includeHTML();



