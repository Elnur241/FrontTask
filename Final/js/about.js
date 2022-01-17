$(document).ready(function () {
  AOS.init();

  updateNav();
  updateScroller();

  $(window).scroll(function () {
    updateNav();
    updateScroller();
  });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    nav: false,
    items: 3,
    dots: true,
  });
  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".navbar").addClass("scrolled");
      $(".navbar-icon-svg").attr("src", "../img/black-icon.svg");
    } else {
      $(".navbar").removeClass("scrolled");
      $(".navbar-icon-svg").attr("src", "../img/white-logo.svg");
    }
  }

  function updateScroller() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn(200);
    } else {
      $(".scroll-top").fadeOut(200);
    }
  }

  $(".page").hover(function () {
    $(".pages").css("opacity", "1");
  });
  $("nav").mouseleave(function () {
    $(".pages").css("opacity", "0");
  });

  $(document).on("click", ".scroll-top", () => {
    $(window).scrollTop(0);
  });


});
