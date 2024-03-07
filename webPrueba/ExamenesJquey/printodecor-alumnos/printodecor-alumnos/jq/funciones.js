
$(document).ready(function() {
    var mostrar=true;
        $("#hamburger").on('click', function() {
            /*if(mostrar){
                console.log("entra");
                $("ul#menu-toggle").stop(true).fadeIn()
                mostrar=false;
            }else{
                $("ul#menu-toggle").stop(true).fadeOut()
                mostrar=true;
            }*/
            /***ejercicio 1 */

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
    $("#menu-toggle > li:nth-child(3) > a").on('click',function(){
        console.log("Entra")
        var submenu = $("#menu-toggle > li:nth-child(3) > ul");
    
        if (submenu.is(":visible")) {
            // Si el menú está visible, lo ocultamos
            submenu.stop(true).animate({ width: "50px" }, 400, function() {
                $(this).hide(); // Oculta el menú después de la animación
            });
        } else {
            // Si el menú está oculto, lo mostramos
            submenu.show().stop(true).animate({ width: "150px" }, 400);
        }

    })
    //F
  // ejercicio 2
  //A
 //  la barra social
 var barraSocial = $("nav#barra-social");

 // Muestra la barra social con un efecto de cambio de opacidad
 barraSocial.css("display", "block"); // Cambia el display a block
 barraSocial.animate({ opacity: 1 }, 1000); // 1000 es la duración de la animación en milisegundos
   
// B


});