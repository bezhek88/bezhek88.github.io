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

// input validation

$(document).ready(function() {
    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #b5a263'});
                $('#valid').text('');
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('Invalid address');
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('The email field must not be empty');
        }
    });
});