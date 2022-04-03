(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // custom dropdown
        $('.dropdown-menu li').on('click', function () {
            var getValue = $(this).text();
            $('.dropdown-select').text(getValue);
        });

    });


}(jQuery));