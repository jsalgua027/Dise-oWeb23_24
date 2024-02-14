$(document).ready(function(){
    $("smain>article>div>section>div>div>svg").click(function(e){
        console.log("entra")
        $("div.texto>p").faceIn();
    });
    $("main>article>div>section>div>div>svg:nth-child(2)").click(function(e){
        $("div.texto>p").faceOut();
    })

})