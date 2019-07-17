$(document).ready(function () {
    $(".slider-1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        rtl: true,
        center:true,
        onInitialized: initDots
    });
    
    function initDots(event) {
        var element   = $(event.target);
        var _dots = element.find('.owl-dots');
        var _container = element.find('.owl-item.active').first().find('.container');
        var _containerEdge = _container.offset().left;
        _dots.css('right',_containerEdge);
    }
});