// genero la clase en el css que voy a usar

$(document).ready(function () {
  var header = $("header"); /**se utiliza para seleccionar el elemento <header>
   en el documento HTML y almacenarlo en la variable header */

  $(window).scroll(function () {
    var scroll =$(window).scrollTop(); /**se utiliza para obtener la posición actual de desplazamiento vertical (scroll)
         de la ventana del navegador,Cuando el usuario hace scroll hacia abajo,
          el valor de scroll aumenta. Este valor se utiliza en el código siguiente para determinar
          si la posición de desplazamiento es mayor que 100 píxeles
          */

    if (scroll > 100) {
      //si es mayor de 100 píxeles me añades la clase fixed-transparent
      header.addClass("fixed-transparent");
    } else {
      // quitas la clase
      header.removeClass("fixed-transparent");
    }
  });
});

/*Pruebas cambio de foto cuando hago hover*/

$(document).ready(function () {
  // Asociar evento mouseenter a todos los elementos con ID que comienza con "m"
  $('[id^="m"]').mouseenter(function () {
    // Obtener el número de ID
    var idNumero = this.id.replace("m", ""); // Remover la parte "m"

    // Hacer algo con el número de ID
    console.log("Número de ID: " + idNumero);

    // Llamar a la función para cambiar la imagen basada en el número de ID
    cambiarImagen(idNumero, $(this).closest("section"));
  });
  // $('[id^="m"]').mouseleave(function () {
  //   // Obtener el número de ID
  //   var idNumero = this.id.replace("m", ""); // Remover la parte "m"

  //   // Hacer algo con el número de ID
  //   console.log("Número de ID: " + idNumero);

  //   // Llamar a la función para cambiar la imagen basada en el número de ID
  //   cambiarImagen(idNumero, $(this).closest("section"));
  // });

  // Función para cambiar la imagen
  function cambiarImagen(idNumero, section) {
    // Obtén la imagen actual dentro del elemento section
    var imagenActual = section.find(".imagen");
    console.log(imagenActual+"imagen actual");

    // Ruta de la nueva imagen basada en el número de ID
    var nuevaRuta = "images/dormitorio" + idNumero + ".jpg";

    // Cambia la fuente de la imagen actual por la nueva ruta
    imagenActual.attr("src", nuevaRuta);
  }
});

