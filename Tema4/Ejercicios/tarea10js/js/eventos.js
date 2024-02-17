$(function(){
    //escondo los elementos en la carga de la web
    $("body > main > article > div > section > div.texto ").css('display','none');

    let estado=false;
$("main>article>div>section>div").click(function(e){
  
    if(estado){ 
        e.preventDefault();
        $(this).next().fadeOut(300);
        console.log(estado);
        $(this).find('div > svg:nth-child(2)').css({"transform": "rotate(90deg)",
        "transition": "transform 0.4s ease"});
       
    } else {
        e.preventDefault();
        $(this).next().fadeIn(300);
        console.log(estado);
        $(this).find('div > svg:nth-child(2)').css({"transform": "rotate(0deg)",
        "transition": "transform 0.4s ease"});
      
    }
            
               
estado=!estado;
})
    
})
/*
find('div > svg:eq(1)')  otro selector es como un array
                         svg:eq(0) el primer elemento, svg:eq(1) es el segundo elemento

*/