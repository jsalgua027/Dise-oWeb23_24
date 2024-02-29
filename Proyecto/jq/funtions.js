

$(document).ready(function() {
     $("nav#menu_desple").css({'display':'none'})
     $("div#login_desplegue").css({'display':'none'})
     $("div#crearCuenta_desple").css({'display':'none'})
     
    $("div#menu_header svg").on("click", function(){
       
        $("nav#menu_desple").toggle("slow"); // parte 2
    
    })
    $("nav#menu-tablet-escrito svg").on("click", function(){
      $("div#login_desplegue").slideToggle("slow"); // parte 2
 
     
  })




 $('svg.iniciar').click(function() {
        // Redirige a la URL deseada
       
        window.location.href = 'login.html';
      });

      
    $('svg.iniciar_Ini').click(function() {
        // Redirige a la URL deseada
        
        window.location.href = 'Pages/login.html';
      });

   
      $('nav#menu-tablet-escrito button').click(function() {
        // Redirige a la URL deseada
        console.log("entra")
        window.location.href = 'Inicio.html';
      });
  
  /* si pulso el boton de crear uasuario lo mando a su fame*/
      function redireccionar() {
        
        window.location.href = 'crearCuenta.html';
    }
    $(document).ready(function() {
      // Selecciona el botón por su ID y añade un manejador de eventos al clic
      $("#crear").on("click", function() {
          // Llama a la función redireccionar cuando se hace clic en el botón
          redireccionar();
      });
  });



});


