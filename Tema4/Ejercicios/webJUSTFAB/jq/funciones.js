$(function(){
    $("ul#menu").css({'display':'none'});// oculto el menu

       
    $(Window).scroll(function(){
        var scroll= $(window).scrollTop();// parte 1

        if(scroll>800){
            $("#volverarriba").css({'display':'block'})

        }else{
            $("#volverarriba").css({'display':''})
        }

    });

    $("header>div>nav#menu-principal>span").on("click", function(){
        $("ul#menu").toggle("slow"); // parte 2

    })
  // parte 3 y parte 4 submenu y icono 
    $("ul#menu>li").on("mouseenter", function(){
        $(this).children('ul').stop().toggle('slow')
        $(this).find('a>span>i').css({"transform": "rotate(180deg)",
        "transition": "transform 0.6s ease"});  
    

    })
    $("ul#menu>li").on("mouseleave", function(){
        $(this).children('ul').stop().toggle('slow')  
        $(this).find('a>span>i').css({"transform": "rotate(0deg)",
        "transition": "transform 0.6s ease"}); 
    

    })

    //parte 5 cabecera
    var cabecera= $('header')
    $(Window).scroll(function(){
        var espacio= $(window).scrollTop();

        if(espacio>100){
            cabecera.css({'position':'fixed','top':'0', 'width':'100%'})

        }else{
            cabecera.css({'position':''})
        }

    });

    // parte 6 fotos
    
    $("main>article.item>a>picture img").on("mouseenter", function(){
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-1.jpg"))
        console.log("entra");
    

    })
    $("main>article.item>a>picture img").on("mouseleave", function(){
        $(this).attr("src", $(this).attr("src").replace("-1.jpg", ".jpg"))
        console.log("sale");  
      
    

    })

})


