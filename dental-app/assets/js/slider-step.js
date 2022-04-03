let howValueSpan, changeBtn

let hasAmount = document.querySelectorAll('.has-amount')
let hasPara = document.querySelectorAll('.has-amount .item-info p')

for (let i = 0; i < hasAmount.length; i++) {

    // For Each step go How Many slider Step
    hasAmount[i].onclick = function () {


        // Create Span Tag
        howValueSpan = document.createElement('span')
        howValueSpan.classList.add('how-items')

        // Create change button
        changeBtn = document.createElement('button')
        changeBtn.classList.add('how-btn')
        changeBtn.setAttribute('type', 'button')
        changeBtn.innerHTML = 'change'

        hasAmount[i].lastElementChild.appendChild(howValueSpan)
        hasAmount[i].lastElementChild.appendChild(changeBtn)


        // Show Slider How Many Items Step
        if (hasAmount[i].previousElementSibling.checked == false) {

            document.getElementById('step-1').parentElement.style.display = 'none'
            document.getElementById('step-1').classList.remove('slideInLeft')
            document.getElementById('step-slider').parentElement.style.display = 'block'
            document.getElementById('step-slider').classList.add('slideInRight')



            $('html, body').animate({
                scrollTop: ($(this).offset().top - 350)
            }, 100);

            // Hide first step para
            hasAmount[i].querySelector('.item-info p').classList.add('active')

            //Clear Radio btn
            clearRadioBtn()

            //Change How many Items per click
            let ChangeBtn = hasAmount[i].children[1].lastElementChild

            ChangeBtn.onclick = function (e) {
                e.stopPropagation()
                document.getElementById('step-1').parentElement.style.display = 'none'
                document.getElementById('step-1').classList.remove('slideInLeft')
                document.getElementById('step-slider').parentElement.style.display = 'block'
                document.getElementById('step-slider').classList.add('slideInRight')


                // Remove error
                document.querySelector('.item-value').classList.remove('active')


                $('html, body').animate({
                    scrollTop: ($(this).offset().top - 350)
                }, 100);


                // Dragable slider init
                var flkty = new Flickity('.carousel', {
                    // options
                    cellAlign: 'left',
                    freeScroll: true,
                    contain: true,
                    // disable previous & next buttons and dots
                    prevNextButtons: false,
                    pageDots: false
                });


            }

            // Dragable slider init
            var flkty = new Flickity('.carousel', {
                // options
                cellAlign: 'left',
                freeScroll: true,
                contain: true,
                // disable previous & next buttons and dots
                prevNextButtons: false,
                pageDots: false
            });


        } else {
            hasAmount[i].querySelector('.item-info p').classList.remove('active')
            hasAmount[i].querySelectorAll('.how-items').forEach(e => e.remove());
            hasAmount[i].querySelectorAll('.how-btn').forEach(btn => btn.remove());

            //Clear Radio btn
            clearRadioBtn()


        }
        // Remove error
        document.querySelector('.item-value').classList.remove('active')



    }



    // back to first step from slider step
    document.getElementById('backs_1').onclick = function () {

        // Check Button 
        var radioelem = document.getElementsByName("howmany")
        for (let relem = 0; relem < radioelem.length; relem++) {
            if (radioelem[relem].checked) {
                document.getElementById('step-1').parentElement.style.display = 'block'
                document.getElementById('step-1').classList.add('slideInLeft')
                document.getElementById('step-slider').parentElement.style.display = 'none'
                document.getElementById('step-slider').classList.remove('slideInRight')
                document.querySelector('.item-value').classList.remove('active')


                $('html, body').animate({
                    scrollTop: ($(this).offset().top - 350)
                }, 100);


            } else {

                // Add error
                document.querySelector('.item-value').classList.add('active')
            }

        }

    }
}

// clear radio btn
function clearRadioBtn() {
    var radioelem = document.getElementsByName("howmany")
    for (let relem = 0; relem < radioelem.length; relem++) {
        radioelem[relem].checked = false
    }
}



// Slider step button check and get Value from checkbox
let howMany = document.getElementsByName('howmany')
for (let j = 0; j < howMany.length; j++) {

    howMany[j].onclick = function (e) {
        let howManyValue = e.target.value
        howValueSpan.innerHTML = `<strong>${howManyValue}</strong> tooth selected`
        if (howManyValue) {
            document.querySelector('.item-value').classList.remove('active')
        }
    }
}



// Date Picker

var today = new Date();
var dateFixed = new Date(today.getFullYear(), today.getMonth(), today.getDate())
var day;
$(document).ready(function () {
    $('#date-pick').calendar({
        type: 'date',
        inline: true,
        minDate: dateFixed,
        formatter: {
            date: function (date, settings) {
                if (!date) return '';
                day = date.getDate();
                var month = date.getMonth() + 1;
                var monthName = date.toLocaleString('default', {
                    month: 'long'
                });
                const dayName = date.toLocaleString('default', {
                    weekday: 'long'
                });
                var year = date.getFullYear();
                return dayName + ', ' + day + ' ' + monthName + ', ' + '' + year;
            }
        },
        onChange: function (date, text) {
            var newValue = text;
            $('.date-data').html(newValue)
        }
    });

    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();


});


// Map JS

var map;

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: new google.maps.LatLng(-33.8697488, 151.1985443),
            zoom: 14
        });


    var icons = {
        info: {
            icon: 'assets/images/marker.png'
        }
    };

    var features = [{
        position: new google.maps.LatLng(-33.8697488, 151.1985443),
        type: 'info'
    }];

    // Create markers.
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}