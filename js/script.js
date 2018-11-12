$(window).on('load scroll', function(e){
    if($(this).scrollTop() > $(this).height()){
        $('.header-menu').addClass('scrolled');
    } else {
        $('.header-menu').removeClass('scrolled');
    }
});
$(document).ready(function(){

    

    $('#burger').click(function(e){
        e.preventDefault();
        $('#side-menu-shadow').fadeIn(400);
        $('#side-menu').addClass('show');
    });
    $('#side-menu-shadow, #close').click(function(e){
        e.preventDefault();
        $('#side-menu-shadow').fadeOut(400);
        $('#side-menu').removeClass('show');
    });

    $('.header .scroll-down').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 400);
    });

    $('#testimonial-carousel').owlCarousel({
        items: 1
    });
    $('#partners-carousel').owlCarousel({
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 5
            }
        }
    });
    $('#blog-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

});