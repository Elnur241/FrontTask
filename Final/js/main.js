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

  $(".page").hover(function () {
    $(".pages").css("opacity", "1");
  });
  $("nav").mouseleave(function () {
    $(".pages").css("opacity", "0");
  });

  $(document).on("click", ".scroll-top", () => {
    $(window).scrollTop(0);
  });

  $(".buttons button").on("click", function () {
    $(".buttons button").removeClass("work-button-active");
    $(this).addClass("work-button-active");
    $(".img-wrapper1").addClass("d-none");
    let datafilter = $(this).attr("data-filter");
    $(".img-wrapper1" + datafilter).removeClass("d-none");
  });

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    nav: false,
    items: 3,
    dots: true,
  });

  $(function () {
    if ($(".accordions").length) {
      $(".accordions").on("click", ".accordion-title", function (e) {
        e.preventDefault();
        $(this)
          .addClass("accordion-active")
          .closest(".accordion-item")
          .siblings()
          .find(".accordion-info")
          .removeClass("d-none")
          .slideUp();

        $(this)
          .closest(".accordion-item")
          .siblings()
          .removeClass("accordion-active")
          .find(".bi")
          .addClass("bi-plus-lg")
          .removeClass("bi-dash");

        $(this)
          .closest(".accordion-item")
          .toggleClass("open")
          .find(".accordion-info")
          .slideToggle();

        $(this).find(".bi").toggleClass("bi-plus-lg bi-dash");
      });
    }
  });
});
