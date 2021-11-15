const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
    // top 滑動效果
    $('.top a').click(function (e) { 
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 3000);
    });
    $(window).scroll(function() {
      if($(this).scrollTop() > 180) {
        $('.top a').fadeIn();
      } else {
        $('.top a').fadeOut();
      }
    });
});