$(document).ready(function() {

    function update() {
        var headerElm = document.getElementById('header');
        var headerBoundingRect = headerElm.getBoundingClientRect();

        var titleElem = document.getElementsByClassName('title')[0];
        var titleBoundingRect = titleElem.getBoundingClientRect();

        console.log("title top = " + titleBoundingRect.top);
        console.log("header top = " + headerBoundingRect.top);
        console.log("headerBoundingRect.height + headerBoundingRect.top = " + (headerBoundingRect.height + headerBoundingRect.top));

        var top = (headerBoundingRect.height + headerBoundingRect.top) * 0.5 - titleBoundingRect.height / 2;
        titleElem.style.top = top.toString() + "px";
    }

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

    $(window).scroll(update);

    update(); // initialize
});