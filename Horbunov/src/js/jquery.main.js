$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
  });
  $(".header__btn").click(function (e) {
    e.preventDefault();
    $(".header__header-box").toggleClass("active");
  });
  $(".header__btn").click(function () {
    $(this).toggleClass("open");
  });
  $(".tabs-block__btn").click(function (e) {
    e.preventDefault();
    const tab_id = $(this).attr("href");

    $(".tabs-block__btn").removeClass("active");
    $(".tabs-block__content").removeClass("active");

    $(this).addClass("active");
    $(tab_id).addClass("active");
  });
  $(".accordion__opener").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion__opener_active")) {
      $(".accordion__slide").slideUp(400);
      $(".accordion__opener").removeClass("accordion__opener_active");
    }
    $this.toggleClass("accordion__opener_active");
    $this.next().slideToggle();
  });
});
