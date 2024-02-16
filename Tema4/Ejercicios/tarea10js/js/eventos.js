$(function(){
    let estado=false;
$("main>article>div>section>div").click(function(e){
  
    if(estado){
        $(this).next().fadeOut();
        console.log(estado);
        /* transform: rotate(90deg);
    transition: transform 0.3s ease;*/
       
    } else {
        $(this).next().fadeIn();
        console.log(estado);
      
    }
            
               
estado=!estado;
})
    
})
