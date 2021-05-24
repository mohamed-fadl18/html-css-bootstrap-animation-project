//loading
$(document).ready(function () {

    $("#loading").fadeOut(2000, function () {

        $("body").css("overflow", "auto");
        $("#loading").remove();
    });
});
//end loading
//window height
$("#header").height($(window).height());
//end window height
//wow active
$(document).ready(function(){
    new WOW().init();
})
//nav style start
$(window).scroll(function () {

    var s = $(window).scrollTop();

    if(s>50)
        {
            $(".navbar-brand").css("color","#000");
            $("nav").addClass("navscroll");
            $(".navbar-light .navbar-nav .nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show > .nav-link").css("color","#000");
            $(".navbar-light .navbar-nav .active> .nav-link").css("color","#f9a02c");
        }
    else
    {
        $("nav").removeClass("navscroll")
        $(".navbar-brand").css("color","#fff");
        $(".navbar-light .navbar-nav .nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show > .nav-link").css("color","#fff");
        $(".navbar-light .navbar-nav .active> .nav-link").css("color","#f9a02c");

    }

})
//nav style end
//nice scroll start
 $(document).ready(function() {
        $("html").niceScroll(
		{
			 cursorcolor: "#f9a02c",
		}
		);
    });
$(window).scroll(function(){
    var s=$(window).scrollTop();
    if(s>500)
        {
            $("#btnScroll").fadeIn(500);
        }
    else{
        $("#btnScroll").fadeOut(500);
    }
});
//bntScroll back to home
$("#btnScroll").click(function () {
    $("html").animate({scrollTop:0},600)
});
//forarrow go to about-me
 $('.forarrow').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('name')).offset().top

        }, 1000);
    });
 $('.nav-item a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('name')).offset().top

        }, 1000);
    });
