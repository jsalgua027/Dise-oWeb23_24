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

    $("header>div>nav#menu-principal>#ul>li").on("mouseenter","mouseleave", function(){
        $(this)    
    

    })


})