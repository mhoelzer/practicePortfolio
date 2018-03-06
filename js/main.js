/* General jQuery & JS stuff goes here. */

console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");
$(document).ready(function() {
        
    /* affix the navbar after scroll below header */
    $('#nav').affix({
    offset: {
    top: $('header').height()-$('#nav').height()
    }
    });    

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({ target: '#nav' })

    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function(){
    $('body,html').animate({scrollTop:0},1000);
    })

    /* smooth scrolling for nav sections */
    $('#nav .navbar-nav li>a').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({scrollTop:posi},700);
    });
});

jQuery(document).ready(function ($) {

    console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

    // Initialize wowjs 
    new WOW().init();


    /*-------------------
    MAGNIFICO STARTER - 
    Code from a starter example by the creator. 
    https://codepen.io/dimsemenov/pen/hutrb
    -------------------*/
    $('.with-caption').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',

        image: {
            verticalFit: true,
            titleSrc: function (item) {
                //More could be done here......
                //Also doesn't fit so good on iPad.
                var caption = item.el.attr('title');
                return caption;
            }
        },

        //This will let us click through images eventually....
        gallery: {
            enabled: true
        },
    });
});
