//active navbar

$("li").click(function () {
    $("li.active").removeClass("active");
    $(this).toggleClass("active");
});


// slick slider

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


