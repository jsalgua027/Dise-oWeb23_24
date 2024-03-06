$(document).ready(function () {

 // Ocultar mensajes de error al principio
 $(".error-message").css({"visibility": "hidden"});

 // Agregar evento blur a los campos requeridos
 $("#nombre, #email").blur(function () {
   // Verificar si la longitud es 0
   var errorMessage = $(this).siblings(".error-message");

   if ($(this).val().trim().length === 0) {
     // Mostrar mensaje de error en el span correspondiente
     console.log("Campo vacío. Mostrando mensaje de error.");
     errorMessage.css({"visibility": "visible"});
   } else {
     // Ocultar mensaje de error si la condición no se cumple
     console.log("Campo no vacío. Ocultando mensaje de error.");
     errorMessage.css({"visibility": "hidden"});
   }
 });




  $("#miTexto").on("input", function () {
    // Obtener la cantidad de caracteres escritos
    var caracteresEscritos = $(this).val().length;
    // Calcular los caracteres restantes
    var caracteresRestantes = 100 - caracteresEscritos;

    // Actualizar el mensaje de caracteres restantes
    // necesitamos un span donde hacer el contador
    $("#contador-caracteres").text(
      "Dispone de " + caracteresRestantes + " caracteres"
    );
  });

  $( "#datepicker" ).datepicker();
});
