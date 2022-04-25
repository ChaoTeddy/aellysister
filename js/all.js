$(document).ready(function () {
    $('.menubar-search-box').click(function (e) { 
        e.preventDefault();
        $('.mobile-pc-meun').slideToggle('active');
        $('body,html').toggleClass('active');
        $('.menu-search').slideUp();
    });
    $('.jqclick-search').click(function (e) { 
        e.preventDefault();
        $('.menu-search').slideToggle('active');
        // $('body,html').toggleClass('active');
        $('.mobile-pc-meun').slideUp();
    });
    $('.menubar-search-box').click(function (e) { 
        e.preventDefault();
        $('.menu-border').toggleClass('active');
        $('.menubar-search-box').toggleClass('active');
    });
    $('.jqclick-search').click(function (e) { 
        e.preventDefault();
        $('.menu-border.active').removeClass('active');
        $('.menubar-search-box').removeClass('active');
    });

    /* menu原版 li */
    // $('.menu-father-inner').click(function (e) { 
    //     // e.preventDefault();
    //     $(this).find('.menu-child-wrap').slideToggle();
    //     $(this).siblings().find('.menu-child-wrap').slideUp();
    // });



    /* menu修正版 h3 */
    // $('.menu-father-inner h3').click(function (e) { 
    //     e.preventDefault();
    //     $(this).siblings('.menu-child-wrap').slideToggle();
    //     $(this).parent().siblings().find('.menu-child-wrap').slideUp();
    // });

    /* menu hover版 */
    $('.menu-father-inner').hover(function () {
            // over
            $(this).find('.menu-child-wrap').stop(true, false).slideDown();
        }, function () {
            // out
            $(this).find('.menu-child-wrap').stop(true, false).slideUp();
            // $(this).parent().siblings().find('.menu-child-wrap').slideUp();
        }
    );








    // mobile-filter price
    $('#mobilechanceSlider').on('change', function(){
        $('#mobilechance').val($('#mobilechanceSlider').val());
    });

    $('#mobilechance').on('keyup', function(){
        $('#mobilechanceSlider').val($('#mobilechance').val());
    });
    // pc-filter price
    $('#pcchanceSlider').on('change', function(){
        $('#pcchance').val($('#pcchanceSlider').val());
    });

    $('#pcchance').on('keyup', function(){
        $('#pcchanceSlider').val($('#pcchance').val());
    });







    // mobile-filter open
    $('.mobile-filter-btn').click(function (e) { 
        e.preventDefault();
        $('.mobile-filter-wrap').slideDown();
    });
    $('.mobile-filter-close-btn').click(function (e) { 
        e.preventDefault();
        $('.mobile-filter-wrap').slideUp();
    });
    // pc-filter open
    $('.pc-filter-btn').click(function (e) { 
        e.preventDefault();
        $('.pc-filter-wrap').slideToggle();
    });




    // color-choose
    $('.color-box').click(function (e) { 
        // e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.color-box').removeClass('active');
    });


    // size-choose
    $('.size-box').click(function (e) { 
        // e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.size-box').removeClass('active');
    });
 


});