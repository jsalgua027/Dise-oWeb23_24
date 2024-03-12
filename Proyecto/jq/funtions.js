$(document).ready(function () {
  $("nav#menu_desple").css({ display: "none" });
  $("div#login_desplegue").css({ display: "none" });
  $("div#crearCuenta_desple").css({ display: "none" });
  $("span.error-registro").css({"visibility": "hidden"}); 
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
    mouseenter: function() {
      $(this).stop().animate(
        { backgroundColor: "#8C0444" },
        "fast",
        function() {
          $(this).find("a").stop().animate(
            { color: "#FFF" },
            "fast"
          );
          $(this).find("a svg path").stop().css(
            { fill: "#FFF" },
            "fast"
          );
        }
      );
    },
    mouseleave: function() {
      $(this).stop().animate(
        { backgroundColor: "#d9bd9c" },
        "fast",
        function() {
          $(this).find("a").stop().animate(
            { color: "#000" },
            "fast"
          );
          $(this).find("a svg path").stop().css(
            { fill: "#000" },
            "fast"
          );
        }
      );
    }
  });
  /***animación menú desplehable****/
  $("nav#menu_desple > a > div").on({
    mouseenter: function() {
      // Código a ejecutar cuando el ratón entra al elemento
      $(this).stop().animate(
        { backgroundColor: "#8C0444", color: "white" },
        "fast"
      );
    },
    mouseleave: function() {
      // Código a ejecutar cuando el ratón sale del elemento
      $(this).stop().animate(
        { backgroundColor: "#d9bd9c", color: "black" },
        "fast"
      );
    }
  });
  /* animacion redes sociales*/

  $(".redes_sociales svg").on({
    mouseenter: function() {
      // Cambiar el color a blanco al entrar con animate
      $(this).find("path").stop().css({ fill: "#FFF" }, "fast");
    },
    mouseleave: function() {
      // Cambiar el color al original al salir con animate
      $(this).find("path").stop().css({ fill: "#040404" }, "fast");
    }
  });
  /*Animación políticas*/

  $(".nav_footer a").on({
    mouseenter: function() {
      // Cambiar el color a blanco al entrar con animate
      $(this).stop().animate({ color: "#FFF" }, "fast");
    },
    mouseleave: function() {
      // Cambiar el color al original al salir con animate
      $(this).stop().animate({ color: "#000" }, "fast");
    }
  });
  
  /*errores de campo vacion formulario*/
  $(" #nombre,#email_1,#ciudad").blur(function () {
 
    // Verificar si la longitud es 0
    if ($(this).val().trim().length === 0) {
        console.log("caracteres 0")
      // Mostrar mensaje de error justo debajo del campo
      $(this).next(".error-registro").css({"visibility": "visible"}); // Eliminar mensaje de error existente
      
    } else {
      // Eliminar mensaje de error si la condición no se cumple
      $(this).next(".error-registro").css({"visibility": "hidden"}); 
    }
  });



  /*despliegue crear cuenta*/
  $("#login_desplegue button#crear_desple").on("click", function () {
    $("div#login_desplegue").stop(true, false).slideToggle("slow"); // parte 2
    $("div#crearCuenta_desple").stop(true, false).slideToggle("slow"); // parte 2
  });

  
  /*redireccionamiento*/

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

/*slider*/
  $(".rslides").responsiveSlides({
    auto: false,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: true,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Anterior",   // String: Text for the "previous" button
    nextText: "Siguiente",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });


});
