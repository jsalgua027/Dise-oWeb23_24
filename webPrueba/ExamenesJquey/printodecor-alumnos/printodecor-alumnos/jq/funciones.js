
$(document).ready(function() {
    var mostrar=true;
        $("#hamburger").on('click', function() {
          

        $("ul#menu-toggle").stop().slideToggle(400) // efecto cortinilla  A
            //B  y //C
            if (mostrar) {
                $("#hamburger > span:nth-child(2)").stop(true).animate({ width: "67%" });
                $("#hamburger").stop(true).animate({ backgroundColor: "rgba(255, 0, 0, 0.5)" }, 400); // Cambia a rojo de forma progresiva
                mostrar = false;
            } else {
                $("#hamburger > span:nth-child(2)").stop(true).animate({ width: "40%" });
                $("#hamburger").stop(true).animate({ backgroundColor: "#e3e3e3" }, 400); // Restaura el color original de forma progresiva
                mostrar = true;
            }
       

    });
  //E
    $("#menu-toggle > li:nth-child(3)").on('click',function(){
        console.log("Entra")
        var submenu = $("#menu-toggle > li:nth-child(3) > ul");
    
        if (submenu.is(":visible")) {
            submenu.css({
                'left':'-50vw',
                'display':'none'
            });
            $('#menu-toggle > li:nth-child(3) > span').html('-')
        } else {
            // Si el menú está oculto, lo mostramos
            submenu.css({
                'left':'0',
                'display':'flex'
            })
            $('#menu-toggle > li:nth-child(3) > span').html('+')
        }

    })
    //F
    $(window).scroll(function () {
        // Obtener la posición del scroll horizontal
        var scrollLeft = $(document).scrollLeft();
        
        // Realizar cambios basados en la posición del scroll lateral
        // Aquí puedes agregar tu lógica específica
        console.log("Scroll Lateral:", scrollLeft);
        $("ul#menu-toggle").stop().slideToggle(400)
        $("#hamburger > span:nth-child(2)").stop(true).animate({ width: "40%" });
        $("#hamburger").stop(true).animate({ backgroundColor: "#e3e3e3" }, 400);
    });



  // ejercicio 2
  //A
 //  la barra social
 var barraSocial = $("nav#barra-social");

 // Muestra la barra social con un efecto de cambio de opacidad
 barraSocial.css("display", "block"); // Cambia el display a block
 barraSocial.animate({ opacity: 1 }, 1000); // 1000 es la duración de la animación en milisegundos
   
// B


});