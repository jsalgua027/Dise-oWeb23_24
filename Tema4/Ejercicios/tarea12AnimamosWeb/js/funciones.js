$(document).ready(function () {
  var header = $("header"); /**se utiliza para seleccionar el elemento <header>
     en el documento HTML y almacenarlo en la variable header */

  $(window).scroll(function () {
    var scroll =
      $(
        window
      ).scrollTop(); /**se utiliza para obtener la posición actual de desplazamiento vertical (scroll)
           de la ventana del navegador,Cuando el usuario hace scroll hacia abajo,
            el valor de scroll aumenta. Este valor se utiliza en el código siguiente para determinar
            si la posición de desplazamiento es mayor que 100 píxeles
            */

    if (scroll > 100) {
      //si es mayor de 100 píxeles me añades la clase fixed-transparent
      header.addClass("fixed-transparent");
    } else {
      // quitas la clase
      header.removeClass("fixed-transparent");
    }
  });
  $("span").on("click", function () {
    $(
      "header>nav#menu-principal>input,header>nav#menu-principal>ul#menu"
    ).toggle();
  });
  $(window).on("resize", function () {
    $("header>nav#menu-principal>input,header>nav#menu-principal>ul#menu").css(
      "display",
      "none"
    );
  });

  $("nav#menu-principal>label").mouseenter(function () {
    $("nav#menu-principal>label").animate({
      "background-color": "rgba(95, 124, 197, 0.8)",
      "border-radius": "30%",
      width: "30px",
    });
  });
  $("nav#menu-principal>label").mouseleave(function () {
    $("nav#menu-principal>label").animate({
      "background-color": "rgba(255, 255, 255, 0.5)",
    });
  });
  /*Ejercicios tarea12*/
  /*Entra el raton */
  $("ul#menu>li").mouseenter(function () {
    $(this)
      .find("a")
      .css({
        "background-color": "rgba(95, 124, 197, 0.8)",
        "font-size": "2.5rem",
        padding: "0.5rem",
        margin: "1.5rem",
        "border-radius": "10px",
        transition: "background 0.5s ",
        transition: "font-size 0.5s",
      });
    /*sale el raton */
  });
  $("ul#menu>li").mouseleave(function () {
    $(this)
      .find("a")
      .css({
        "background-color": "aliceblue",
        "font-size": "",
        padding: "0",
        margin: "0",
      });
  });

  /*trato las imagenes*/

  $("main>article.item>a>picture").mouseenter(function(){
    $(this).find("img").css({'background-color':'rgba(95, 124, 197, 0.8)',
    
    'padding':'0.5rem',
    'margin':'1.5rem',
    'border-radius':'10px',
    'transition': 'background 1s ',
    'transition': 'padding 1s',
       
  });
  


  })
  
  $("main>article.item>a>picture").mouseleave(function(){
    $(this).find("img").css({'background-color':'rgba(95, 124, 197, 0.8)',
    'padding':'',
    'margin':'',
    'border-radius':'',
    'transition': 'background 0.5s ',
    'transition': 'padding 0.5s',
   
   
      
  })
  })

  /* intento mostrar nuevo elemento flotnate*/
  $("main>article.item").mouseenter(function(){
   
    $(this).find("#hola").css({
    
      'display':'block',
      'transition': 'display 0.5s'
   

         
    })
       
  });

  $("main>article.item").mouseleave(function(){
   
    $(this).find("#hola").css({
    
      'display':'none'
         
    })
       
  });


})
