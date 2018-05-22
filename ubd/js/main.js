$(function () {
  // nav
  $(window).on('load', function () {
    $('.toggle-mnu').on('click', function () {
      $(this).toggleClass('open');
      $(this).siblings('.top-nav').slideToggle(150);
    });
    $('.top-nav li a').on('click', function () {
      if ($(window).width() <= 1200) {
        $('.top-nav').toggle();
        $('.toggle').toggleClass('on');
      }
    });
  });
  // toggle
  $(window).on('load', function () {
    $('.service-icon').on('click', function () {
      console.log();
      $(this).parent().siblings('.toggle-text').slideToggle(150);
      $(this).toggleClass('active');
    })
  });
  // modal
  $('.modal').magnificPopup({
    type: 'inline'
  });
  // toTop
  $(window).on('load', function () {
    if ($('#toTop').length) {
      var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $('#toTop').addClass('show');
          } else {
            $('#toTop').removeClass('show');
          }
        };
      backToTop();
      $(window).on('scroll', function () {
        backToTop();
      });
      $('#toTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 400);
      });
    }
  });
  // equal Heights
  $('.special-offers-title').equalHeights();
  $('.why-trust-title').equalHeights();
  $('.set-groups-title').equalHeights();

});