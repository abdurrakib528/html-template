(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $('.btnNext').click(function (e) {
            e.preventDefault();
            $('.tutorial-content').addClass('animation-left');
            $('.tutorial-content').removeClass('animation-right');
            $('.nav-tabs > .active').addClass('activated').next('li').find('a').trigger('click');
        });


        $('.btnPrevious').click(function (e) {
            e.preventDefault();
            $('.tutorial-content').removeClass('animation-left');
            $('.tutorial-content').addClass('animation-right');
            $('.nav-tabs > .active').removeClass('activated').prev('li').find('a').trigger('click');
        });


        $('.nav.nav-tabs li a').click(function (e) {
            e.preventDefault();
            $('.tutorial-content').addClass('fadeInLeft');
        });



        $('.menu-trigger a').click(function (e) {
            e.preventDefault();
            $('.left-menu').toggleClass('in');
            $('.canvas-blur').addClass('in-blur');
        });

        $('.canvas-blur').click(function () {
            $(this).removeClass('in-blur');
            $('.left-menu').removeClass('in');
        });
        
        
        
        const ul = document.getElementById('myTab1');
        const li = ul.querySelectorAll('.nav-tabs li');

        function MakeSiblings(index) {
            const before = [];
            const after = [];
            for (let i = 0; i < li.length; i++) {
                i <= index ? before.push(i) : after.push(i)
            }
            before.pop();
            return {
                after: after,
                before: before
            };
        }
        for (let i = 0; i < li.length; i++) {
            li[i].onclick = function() {
                const afBf = MakeSiblings(i);
                this.classList.toggle('activated');
                afBf.before.forEach(el => {
                    if (!li[el].classList.contains('activated')) {
                        li[el].classList.add('activated');
                    }
                });
                afBf.after.forEach(el => {
                    if (li[el].classList.contains('activated')) {
                        li[el].classList.remove('activated');
                    }
                });
            }
        }


    });



}(jQuery));
