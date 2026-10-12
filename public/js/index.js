const FOOTER_FIXED = "footer-fixed";

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Slick carousels (requires jQuery)
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

    // Initialize ScrollReveal
    window.scrollReveal = ScrollReveal({
        reset: false,
        distance: '100px',
        scale: 1.0,
        viewFactor: 0.5
    });

    window.scrollReveal.reveal('.reveal');

    var titleFixed = false;

    function updateTitle() {
        // Skip parallax on mobile (screens under 770px)
        if (window.innerWidth < 770) {
            return;
        }

        var headerElm = document.getElementById('header');
        var headerBoundingRect = headerElm.getBoundingClientRect();

        var titleElem = document.getElementsByClassName('title')[0];
        var titleBoundingRect = titleElem.getBoundingClientRect();

        var headerViewableHeight = headerBoundingRect.height + headerBoundingRect.top;
        var transitionThreshold = titleBoundingRect.height + 10 /* padding */;

        if (titleFixed && headerViewableHeight >= transitionThreshold) {
            titleElem.classList.remove("title-locked");
            titleFixed = false;
        }

        if (titleFixed)
            return;

        var top = headerViewableHeight * 0.7 - titleBoundingRect.height / 2;
        titleElem.style.top = top.toString() + "px";

        if (headerViewableHeight <= transitionThreshold) {
            titleElem.style.top = "";
            titleElem.classList.add("title-locked");
            titleFixed = true;
        }
    }

    function updateFooter() {
        var headerBoundingRect = document.getElementById('header').getBoundingClientRect();
        var footerElm = document.getElementById('footer');
        var windowHeight = window.innerHeight;
        var revealFactor = 0.7;

        var footerTop = windowHeight + (headerBoundingRect.top * revealFactor);
        var footerHeight = footerElm.getBoundingClientRect().height;

        if (footerElm.classList.contains(FOOTER_FIXED))
          return;

        footerTop = Math.max(footerTop, windowHeight - footerHeight);

        if (footerTop == windowHeight - footerHeight) {
          footerElm.classList.add(FOOTER_FIXED);
          footerElm.style = {};
          return;
        }

        footerElm.style.top = footerTop + "px";
    }

    function update() {
        updateTitle();
        updateFooter();
    }

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update(); // initialize
});
