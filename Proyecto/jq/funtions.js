

$(document).ready(function() {
     $("nav#menu_desple").css({'display':'none'})
     
    $("div#menu_header svg").on("click", function(){
        console.log("entra")
        $("nav#menu_desple").toggle("slow"); // parte 2
    
    })

    $('svg.iniciar').click(function() {
        // Redirige a la URL deseada
        console.log("entra")
        window.location.href = 'login.html';
      });

      
    $('svg.iniciar_Ini').click(function() {
        // Redirige a la URL deseada
        console.log("entra")
        window.location.href = 'Pages/login.html';
      });

   

});


