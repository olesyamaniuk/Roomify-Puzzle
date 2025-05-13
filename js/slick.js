$(function () {
  $(".e-t-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".e-t-gallery-list-left",
    nextArrow: ".e-t-gallery-list-right",
  });
});
