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

    window.scrollReveal = ScrollReveal();
    window.scrollReveal.reveal('.video-section', {
        duration: 600,
        reset: true
    });


    function update() {
        var headerElm = document.getElementById('header');
        var headerBoundingRect = headerElm.getBoundingClientRect();

        var titleElem = document.getElementsByClassName('title')[0];
        var titleBoundingRect = titleElem.getBoundingClientRect();

        var top = (headerBoundingRect.height + headerBoundingRect.top) * 0.5 - titleBoundingRect.height / 2;
        titleElem.style.top = top.toString() + "px";
    }


    $(window).scroll(update);

    update(); // initialize
});