jQuery(document).ready(function() {
    jQuery('.slick-slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        dots: true
    });
    jQuery('.slick-slider-logo').slick({
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(document).on("scroll", window, function () {
        if ($(window).scrollTop()>200)
        {
            $(".scroll-top").show();
        }
        else
        {
            $(".scroll-top").hide();
        }
    });
    (function($) {
        $(function() {
            $('#up').click(function() {
                $('html, body').animate({scrollTop: 0},500);
                return false;
            })

        })
    })(jQuery)
    $(function() {
        $('nav#menu').mmenu({
            navbar: {
                title: "SEITE WÄHLEN",
            }
        });
    });
});
