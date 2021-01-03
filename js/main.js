$(function() {
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 2000
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

});