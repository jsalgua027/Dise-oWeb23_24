$(document).ready(function () {
  // Agregar evento blur a los campos requeridos
  $("#nombre, #email").blur(function () {
    // Verificar si la longitud es 0
    if ($(this).val().trim().length === 0) {
      // Mostrar mensaje de error justo debajo del campo
      $(this).next(".error-message").remove(); // Eliminar mensaje de error existente
      $(this).after(
        '<p class="error-message" style="color: red;">Este campo es obligatorio</p>'
      );
    } else {
      // Eliminar mensaje de error si la condición no se cumple
      $(this).next(".error-message").remove();
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
});
