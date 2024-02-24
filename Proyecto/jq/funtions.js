

$(document).ready(function() {
     $("nav#menu_desple").css({'display':'none'})
     
    $("div#menu_header svg").on("click", function(){
        console.log("entra")
        $("nav#menu_desple").toggle("slow"); // parte 2
    
    })

    

   

});


