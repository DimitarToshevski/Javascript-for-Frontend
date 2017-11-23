(() => {
    $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    speed: 900,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000
});
})();
