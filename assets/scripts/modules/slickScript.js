$(document).on("ready", function () {
  $(".center").slick({
    autoplay: true,
    speed: 300,
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    lazyLoad: "ondemand",
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
