(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('.form-group input').on('keyup', function () {
            if ($(this).val().length > 0) {
                $(this).parents('.form-group').addClass('foucs-content');
            } else {

                $(this).parents('.form-group').removeClass('foucs-content');
            }
        });
    });
}(jQuery));
