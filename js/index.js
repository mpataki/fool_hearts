$(document).ready(function() {
    $('.videos').slick({
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        mobileFirst: true
    });
});