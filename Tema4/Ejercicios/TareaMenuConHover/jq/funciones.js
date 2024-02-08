$(document).ready(function() {
    $(" header nav#main-menu ul#op-menu>li").hover(function () {
        $(this).children("a").css({"background-color": "red","font-weight": "bold"})
    },
    function() {
        $(this).children("a").css({"background-color": "","font-weight": ""})
    
    })
  
   
});

/* $(document).ready(function() {
    $("#menu li").hover(
      function() {
        // Al pasar el ratón por encima
        $(this).css({
          "background-color": "lightblue",
          "font-weight": "bold"
        });
      },
      function() {
        // Al dejar de estar encima
        $(this).css({
          "background-color": "", // Restaura el color de fondo
          "font-weight": "" // Restaura el estilo de fuente
        });
      }
    );
  }); */