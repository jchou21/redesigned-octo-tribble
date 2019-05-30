$(document).ready(function(){
$("#dropdown-content").hide();
var body = true;
$(document).dblclick(function(e) {
    if(e.target.classList.contains('content')) {
        $('.content').fadeOut('slow');
        body = false;
    } else if(e.target.getAttribute("id") == "baited") {
        var baited = $(".content").append("<p>lol baited</p>");
    }
})
$("#header").mouseenter(function(){
    if(!body){
        $(".content").fadeIn("slow");
        body = true;
    }
})
$(".dropdown").hover(function(){
    $("#dropdown-content").show();
    // $("#header > h2").css("backgroundColor","tomato");
    $("#dropdown-content").css("width", $("#header > h2").outerWidth());
    $("#header > h2").mouseout(function(){
        $(this).css("background-color" , "tomato");
    })
    $("#header > h2").mouseover(function(){
        $(this).css("background-color","aqua");
    })
},function(){
    $("#dropdown-content").hide();
    $("#header > h2").css("background-color","transparent");
})
});