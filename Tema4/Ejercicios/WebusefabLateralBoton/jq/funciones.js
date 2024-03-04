$(function(){
    $("#menu-principal > span").on("click", function(){
       
        $("ul#menu").stop(true,false).animate({"left":"0rem"},"slow")
        $("div#desplazable").stop(true,false).animate({"left":"20rem"},"slow")
        //$("div#oscuro").css({"display":"block"})// una version
        $("div#oscuro").stop(true, false).fadeIn(300) // faceIN transicion para elementos ocultos
    })


    $("div#oscuro").on("click", function(){
        

        $("ul#menu").stop(true,false).animate({"left":"-20rem"},"slow")
        $("div#desplazable").stop(true,false).animate({"left":"0rem"},"slow")
        //$("div#oscuro").css({"display":"block"})// una version
        $("div#oscuro").stop(true, false).fadeOut(300) // faceOUT transicion para elementos ocultos
    })



    /*Boton compra*/
    $("article.item").hover(

        function () {
            $(this).find("span.comprar").stop(true,false).fadeIn(300)
        },

        function () {
            $(this).find("span.comprar").stop(true,false).fadeOut(300)
        })



  
})