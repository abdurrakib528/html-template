$(document).ready(function () {


    //    Menu Toggle
    $("#menubar").on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".menu-area").toggleClass("active");
    });




    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 90,
        values: [0, 90],
        step: 1,
        slide: function (event, ui) {
            $("#min-price").html(ui.values[0]);


            suffix = " ans";
            if (ui.values[1] == $("#max-price").data("max")) {
                suffix = " ans";
            }
            $("#max-price").html(ui.values[1] + suffix);
        }
    });

    $("#site-popup").on('click', function (e) {
        e.preventDefault();
        $(".popup-area").addClass("active");
    });
    $("a#close-popup ").on('click', function (e) {
        e.preventDefault();
        $(".popup-area").removeClass("active");
    });




});
