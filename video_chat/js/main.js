$(document).ready(function(){

    $('ul.dialog-nav li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.dialog-nav li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $(".user-info").click(function() {
        // assumes element with id='button'
        $(".nav-user").toggle();
    });


    $('.message-nav').click(function() {
        $(".messenger").addClass('open');
    });
    $('.hide-message').click(function() {
        $(".messenger").removeClass('open');
    });

})