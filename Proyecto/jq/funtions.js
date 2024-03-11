$(document).ready(function () {
  $("nav#menu_desple").css({ display: "none" });
  $("div#login_desplegue").css({ display: "none" });
  $("div#crearCuenta_desple").css({ display: "none" });

  $("div#menu_header svg").on("click", function () {
    $("nav#menu_desple").stop(true, false).toggle("slow"); // parte 2
  });

  $(window).resize(function() {
    // Cierra el elemento con el ID #meu_toglle
    $("#menu_desple").stop(true, false).hide(150)
  });
  /*despliegue login*/
  $("nav#menu-tablet-escrito svg").on("click", function () {
    if ($("div#crearCuenta_desple").css("display") != "none") {
      $("div#crearCuenta_desple").stop(true, false).slideUp("slow");
    } else {
      $("div#login_desplegue").stop(true, false).slideToggle("slow"); // parte 2
    }
  });
  $("ul#menu li").on({
    mouseenter: function () {
        $(this).css({
            "background-color": "#8C0444",
        }),
        $(this).find("a").css({
          "color": "#FFF"
        })
        $(this).find("a svg path").attr({
          "fill": "#FFF"
        })
    },
    mouseleave: function () {
        $(this).css({
            "background-color": "#d9bd9c"
        }),
        $(this).find("a").css({
          "color": "#000"
        })
        $(this).find("a svg path").attr({
          "fill": "#000"
        })
    }
  });
  /*despliegue crear cuenta*/
  $("#login_desplegue button#crear_desple").on("click", function () {
    $("div#login_desplegue").stop(true, false).slideToggle("slow"); // parte 2
    $("div#crearCuenta_desple").stop(true, false).slideToggle("slow"); // parte 2
  });

  $("svg.iniciar").click(function () {
    // Redirige a la URL deseada

    window.location.href = "login.html";
  });

  $("svg.iniciar_Ini").click(function () {
    // Redirige a la URL deseada

    window.location.href = "Pages/login.html";
  });

  $("nav#menu-tablet-escrito button").click(function () {
    // Redirige a la URL deseada
    console.log("entra");
    window.location.href = "Inicio.html";
  });

  /* si pulso el boton de crear uasuario lo mando a su frame*/
  function redireccionar() {
    window.location.href = "crearCuenta.html";
  }
  $(document).ready(function () {
    $("#crear").on("click", function () {
      redireccionar();
    });
  });
 /*retorno al inicio desde el boton crear cuenta del desplegable mismo nivel*/
  function redireccionar2() {
    window.location.href = "Inicio.html";
  }
  $(document).ready(function () {
    $("#crear_desple_2").on("click", function () {
      redireccionar2();
    });
  });
   /*retorno al inicio desde el boton crear cuenta del desplegable distinto nivel*/
  function redireccionar3() {
    window.location.href = "../Inicio.html";
  }
  $(document).ready(function () {
    $("#crear_desple_3").on("click", function () {
      redireccionar3();
    });
  });
});
