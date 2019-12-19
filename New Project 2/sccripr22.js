$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dots:false,
        type:  true,
        default: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items:1,
                dots: true,
                
    },
            // breakpoint from 480 up
            480: {
               items: 3,
                
    },
            // breakpoint from 768 up
            768: {
                items: 5,
                nav: true,
                
    }
        }

    });
});