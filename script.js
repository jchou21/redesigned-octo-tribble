$(document).ready(function(){
    $("#dropdown-content").hide();
    var body = true;
    var firstTime = true;
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
        if(firstTime){
            alert("The websites under other websites go decending in quality in my opinion");
            firstTime = false;
        }
        $("#dropdown-content").show();
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
    $("img").mouseenter(function(){
        $(this).animate({
            height:'50%',
            width:'50%',
            opacity: '0.75'
        },'slow');
        $(this).animate({
            height:'100%',
            width: '100%',
            opacity: '1'
        },'slow',function(){
            $(this).removeAttr('style');
        });
    })
});