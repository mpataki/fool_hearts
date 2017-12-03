slickOptions = {
};

$(document).ready(function() {
    $('.videos').slick({
        draggable: true,
        mobileFirst: true,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        slidesToShow: 1
    });

    $('.testimonials').slick({
        draggable: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1
    });
});