(function ($) {
    "use strict";
    $('.form-group input').on('keyup', function () {
        if ($(this).val().length > 0) {
            $(this).parents('.form-group').addClass('focus-content');
        } else {

            $(this).parents('.form-group').removeClass('focus-content');
        }
    });

    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            directionNav: false
        });
    });
}(jQuery));
