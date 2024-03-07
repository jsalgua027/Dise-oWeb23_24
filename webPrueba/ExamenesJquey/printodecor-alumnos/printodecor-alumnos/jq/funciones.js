
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
    //F  no funciona
    $(window).scroll(function () {
        // Obtener la posición del scroll horizontal
        $(window).on("resize", function () {
            console.log("resize")
           
            /*
             $("ul#menu-toggle").stop().slideToggle(400)
            $("#hamburger > span:nth-child(2)").stop(true).animate({ width: "40%" });
            $("#hamburger").stop(true).animate({ backgroundColor: "#e3e3e3" }, 400);
            */
           
            
           
          });
       
      
    });



  // ejercicio 2
  //A
 //  la barra social
 var barraSocial = $("nav#barra-social");

 // Muestra la barra social con un efecto de cambio de opacidad
 barraSocial.css("display", "block"); // Cambia el display a block
 barraSocial.animate({ opacity: 1 }, 1000); // 1000 es la duración de la animación en milisegundos
   
// B

$("div#chat").css("display", "block");
$("div#chat").animate( {"opacity": "1"},500);
// C y D
   $("div#chat").on('click', function(){
        if($('#window-chat').is(':hidden')){
            $("header#header-chat2").css('display','block');
            $('#window-chat').stop().slideDown('slow')
        }else{
            $('#window-chat').stop().slideUp('slow');
            $("header#header-chat2").css('display','none');


        }   

    })
    $("header#header-chat2 >span").stop().on('click',function(){
        $('#window-chat').slideUp('slow');
    })
});