slickOptions = {
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    mobileFirst: true
};

$(document).ready(function() {
    $('.videos').slick(slickOptions);
    $('.testimonials').slick(slickOptions);
});