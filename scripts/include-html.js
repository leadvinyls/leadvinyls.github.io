/*function includeHTML() {
  var z, i, elmnt, file, xhttp;
  //Loop through a collection of all HTML elements:
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    //search for elements with a certain atrribute:
    file = elmnt.getAttribute("include-html");
    if (file) {
      //Make an HTTP request using the attribute value as the file name:
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the attribute, and call this function once more:
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, false);
      xhttp.send();
      //Exit the function: 
      return;
    }
  }
}

includeHTML();*/

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

  loadNext(); // Iniciar el proceso de carga
}

includeHTML();*/

function includeHTML() {
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

