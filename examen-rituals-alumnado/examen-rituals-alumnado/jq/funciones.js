$(document).ready(function () {

    // ejercicio 1  A y B
  $("#menu-principal > label > span").on("click", function () {
    if ($("#menu-toggle").css("display") == "none") {
      $("#menu-toggle").stop(false, true).slideDown();
      $(this).stop(false, true).animate({ "color": "#e9a140" },500);
    } else {
      $("#menu-toggle").stop(false, true).slideUp();
      $(this).stop(false, true).animate({ "color": "#1a191a" },500);
    }
  });

  // C  D E
  $('#menu-toggle > li').on('click', function(){
    // pongo todos en slideUp
    $('#menu-toggle > li>ul').slideUp();
    $('#menu-toggle > li>ul').animate({ "color": "#e9a140" });
    if($('#menu-toggle > li>ul').css("display") == "none"){
        $(this).find('ul').stop(false, true).slideDown();
        $('#menu-toggle > li:nth-child(1) > a > span.angulo').stop(false, true).rotate({
            duration:100,
            angle: 270,
            
            })
            $('#menu-toggle > li:nth-child(1) > a > span.angulo').stop(false, true).animate({ "color": "#e9a140" });
    }else{

        $(this).find('ul').stop(false, true).slideUp();
        $('#menu-toggle > li:nth-child(1) > a > span.angulo').stop(false, true).rotate(0)
        $('#menu-toggle > li:nth-child(1) > a > span.angulo').stop(false, true).animate({ "color": "white" });
    }
    

  })
  //  G
 var menu= $('#menu-toggle')
    $(Window).scroll(function(){
        var espacio= $(window).scrollTop();

        if(espacio>100){
            
            $("#menu-toggle").stop(false, true).slideUp();
           // $("#menu-principal > label > span").stop(false, true).animate({ "color": "white" },500);
            $("#menu-principal > label > span").removeAttr("style")
        }
           
        

    });
    // Ejercico 2 A
    $('#sec-gelducha > article>img').on('click',function(){
        console.log("compra");
         
        var posicion= $(this).offset();

        console.log(posicion)
        $('#cartel').stop(false,true).fadeIn(400, function(){
            $(this).css({display:'block',
            top:posicion.top,
            left:posicion.left})
        })
        $('#cartel').stop(false,true).fadeOut(400, function(){
            $(this).css({display:'none'})
            
        })
        
    })
  // B
    $('#sec-gelducha > article> input[type=button]').on('click',function(){
        console.log("compra");
         
        var posicion= $(this).offset();

        console.log(posicion)
        $('#cartel').stop(false,true).fadeIn(400, function(){
            $(this).css({display:'block',
            top:posicion.top,
            left:posicion.left})
        })
        $('#cartel').stop(false,true).fadeOut(400, function(){
            $(this).css({display:'none'})
            
        })
        
    })
    



    // Ejercicio 4  A y B
    $('#cookies').css({display:'flex'})
    $('#cookies > span:nth-child(1)').on('click', function(){
        $('#cookies').stop(false, true).slideUp();

    })
    $('#cookies > span:nth-child(3)').on('click', function(){
        $('#cookies').stop(false, true).slideUp();

    })



  // Ejercicio 5  A y B

  $(" #email,#pswd").blur(function () {
 
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
  
});
