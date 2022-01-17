$(document).ready(function () {
  AOS.init();

  updateNav();
  updateScroller();

  $(window).scroll(function () {
    updateNav();
    updateScroller();
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

  $(document).on("click", ".scroll-top", () => {
    $(window).scrollTop(0);
  });

});
