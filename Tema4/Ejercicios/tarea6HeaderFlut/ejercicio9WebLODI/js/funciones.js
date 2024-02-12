$(document).ready(function () {
  var header = $("header"); /**se utiliza para seleccionar el elemento <header>
     en el documento HTML y almacenarlo en la variable header */

  $(window).scroll(function () {
    var scroll =
      $(
        window
      ).scrollTop(); /**se utiliza para obtener la posición actual de desplazamiento vertical (scroll)
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

$(document).ready(function () {
  $(window).on("resize", function () {
    $("input#menu-hamburger").prop("checked",false) // cambio el checked a falso

  });
});
