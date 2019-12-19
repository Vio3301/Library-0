$(document).ready(function(){
    $('div.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 1500,
        pauseOnHover: false,
        arrows: false,
        // fade: true,
        draggable: false,
        infinite: true,
        pauseOnDotsHover: false,
        autoplaySpeed: 1500,
      });
})