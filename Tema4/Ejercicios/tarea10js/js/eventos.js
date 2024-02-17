$(function(){
    //escondo los elementos en la carga de la web
    $("body > main > article > div > section > div.texto ").css('display','none');

    let estado=false;
$("main>article>div>section>div").click(function(e){
  
    if(estado){ 
        e.preventDefault();
        $(this).next().fadeOut(300);
        console.log(estado);
        $(this).find('div > svg:eq(1)').css({"transform": "rotate(90deg)",
        "transition": "transform 0.3s ease"});
       
    } else {
        e.preventDefault();
        $(this).next().fadeIn(300);
        console.log(estado);
        $(this).find('div > svg:eq(1)').css({"transform": "rotate(0deg)",
        "transition": "transform 0.3s ease"});
      
    }
            
               
estado=!estado;
})
    
})
