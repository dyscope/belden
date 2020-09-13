jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

    var config = {
        vFactor : 0.1
    }
    window.sr = new scrollReveal(config);

    $("a.fancyimage").fancybox();

    $(".roll").css("opacity","0");
    $(".roll").hover(function () {
        $(this).stop().animate({
            opacity: 1
            }, 70);
        },
        function () {
            $(this).stop().animate({
                opacity: 0
            }, 70);
        }
    );

    $(".rollover").css("opacity","0");
    $(".rollover").hover(function () {
        $(this).stop().animate({
            opacity: 1
            }, 200);
        },
        function () {
            $(this).stop().animate({
                opacity: 0
            }, 80);
        }
    );

    $('.responsive').stackcolumns();
    $('.responsive2').stackcolumns();

    $('#accordion').dcAccordion({
        autoClose: true,
        saveState: false,
        disableLink: true,
        menuClose: false,
        speed: 'fast'
    });

});
