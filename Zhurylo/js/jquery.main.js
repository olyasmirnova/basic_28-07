$( document ).ready(function() {


   //slick
    $('.team').slick({
        dots: true,
    });


    //nav btn
    $('.nav__btn').click(function(e){
        e.preventDefault();
        $('.nav__btn span:nth-child(1)').toggleClass('first')
        $('.nav__btn span:nth-child(2)').toggleClass('second')
        $('.nav__btn span:nth-child(3)').toggleClass('third')
        $('.nav__list').toggleClass('active');
    })


    //tabs
    $('.tabs-block__btn').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');

        $('.tabs-block__btn').removeClass('current');
        $('.tabs-block__content').removeClass('current');

        $(this).addClass('current');
        $(tab_id).addClass('current');
    })


    // $(".accordion__opener").on("click", function(e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //     if (!$this.hasClass("accordion__opener_active")) {
    //         $(".accordion__slide").slideUp(400);
    //         $(".accordion__opener").removeClass("accordion__opener_active");
    //     }
    //     $this.toggleClass("accordion__opener_active");
    //     $this.next().slideToggle();
    // });
});