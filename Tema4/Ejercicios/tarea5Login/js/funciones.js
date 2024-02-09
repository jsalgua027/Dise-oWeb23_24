$(document).ready(function(){
    $("input").on("focus",function(){
        $(this).css({"background-color":"rgb(65, 106, 172)","font-size":"large"})
    })
    $("input").on("focusout",function(){
        $(this).css({"background-color":"","font-size":""})
    })

})