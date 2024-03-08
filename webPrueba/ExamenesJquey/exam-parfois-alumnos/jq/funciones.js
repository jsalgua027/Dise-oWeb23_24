$(document).ready(function () {
  // ejercicio 1
  $("div#cookies > span").on("click", function () {
    $(this).parent().slideUp();

    //para cerrar
  });
  // ejercicio 2

  $("div#hamburger").on("click", function () {
    if ($("#menu-toggle").css("left") != "0px") {
      $("#menu-toggle").stop(false, true).animate({ left: "0px" });
      $("#contenido").stop(false, true).animate({ left: "20rem" });
      $("body").stop(false, true).css({ overflow: "hidden" });
    } else {
      $("#menu-toggle").stop(false, true).animate({ left: "-20rem" });
      $("#contenido").stop(false, true).animate({ left: "0px" });
      $("body").stop(false, true).css({ overflow: "scroll" });
    }
  });

  $(" ul#menu-toggle > li ").on("click", function () {
    //reseteo
    //Todos me los ocultaas
    $(" ul#menu-toggle > li> ul").stop(false, true).slideUp();
    //desde el li seleccionamos esa imagen
    $("ul#menu-toggle > li> span >img").rotate(0);
    //si el css del display es none,
    if ($(this).children("ul").css("display") == "none") {
      //solo la children que seleciono
      //lo muestro
      $(this).children("ul").stop(false, true).slideDown();
      $(this).children().children("img").rotate(90);
    } else {
      //si no esta none vuelve a la posicion inicial
      $(this).children().children("img").rotate(0);
    }
  });

  $(window).on("resize", function () {
    $("#menu-toggle").stop(false, true).animate({ left: "-20rem" });
    $("#contenido").stop(false, true).animate({ left: "0px" });
    $("body").stop(false, true).css({ overflow: "scroll" });
  });


var cabecera= $('header')
    $(Window).scroll(function(){
        var espacio= $(window).scrollTop();

        if(espacio>100){
            cabecera.css({'position':'fixed','top':'0', 'width':'100%'})
            $("div#promo").stop(false,true).slideUp()

        }else{
            cabecera.css({'position':''})
            $("div#promo").stop(false,true).slideDown()
        }

    });

    $('#iconos > ul > li:nth-child(1)').on('click',function(){
           
            if( $('#searcher').css('display')== 'none'){
                console.log("boton")
                $('#searcher').stop(false,true).slideDown()
            } else{
                $('#searcher').stop(false,true).slideUp()
            }
       

    })




});
