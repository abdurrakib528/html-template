(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
//        $(document).on({
//            "contextmenu": function (e) {
//                console.log("ctx menu button:", e.which);
//
//                // Stop the context menu
//                e.preventDefault();
//            },
//            "mousedown": function (e) {
//                console.log("normal mouse down:", e.which);
//            },
//            "mouseup": function (e) {
//                console.log("normal mouse up:", e.which);
//            }
//        });
//
//
//        document.onkeydown = function (e) {
//            if (event.keyCode == 123) {
//                return false;
//            }
//            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//                return false;
//            }
//            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//                return false;
//            }
//            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//                return false;
//            }
//            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//                return false;
//            }
//        };



        $('.chat-bx-body').scroll(function () {
            if ($(this).scrollTop() > 20) {

                $('.chat-bx-header-text.front').fadeOut(200);

            } else {

                $('.chat-bx-header-text.front').fadeIn(400);
            }
        });


        $("#chat-bx-outer").animate({
            left: '250px',
            opacity: '0'
        }, 0);

        $(".start-cnvrtn").on('click', function (e) {
            e.preventDefault();
            $("#chat-bx-inner").animate({
                left: '-250px',
                opacity: '0'
            });

            $("#chat-bx-outer").animate({
                left: '0px',
                opacity: '1'
            });
        });

        $(".check-bx-inner-in").on('click', function (e) {
            e.preventDefault();
            $("#chat-bx-inner").animate({
                left: '0px',
                opacity: '1'
            });

            $("#chat-bx-outer").animate({
                left: '250px',
                opacity: '0'
            });
        });





        $(".popup-button a").on('click', function (e) {
            e.preventDefault();


            $('.chat-box-area').toggleClass('active');

            if ($('.po-button i.fa').hasClass('fa-bars')) {
                $('.po-button i.fa').addClass('fa-close').removeClass('fa-bars');
            } else {
                $('.po-button i.fa').addClass('fa-bars').removeClass('fa-close');
            }

        });



        $('#chat-bx-outer .chat-bx-body').on("wheel", function () {
            $("#chat-bx-outer .chat-bx-header").toggleClass("shrink");
        });


        jQuery('input[class="inline-emoji"]').each(function () {
            jQuery(this).emojioneArea({
                pickerPosition: "top",
                tones: false,
                shortnames: true,
                searchPlaceholder: "Search Emoji",
                placeholder: "Send a Message"
                //hideSource: false
            });
        });






        
        new PerfectScrollbar('.chat-bx-body', {
            wheelSpeed: .8,
            swipeEasing: true,
            scrollYMarginOffset: -5,


        });





    });




}(jQuery));
