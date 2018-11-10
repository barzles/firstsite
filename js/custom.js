(function ($) {  


  $('.header-nav__btn').click(function() {
    $(this).toggleClass('active');
    $('.header-nav li').toggleClass('active');
  });


})(jQuery);