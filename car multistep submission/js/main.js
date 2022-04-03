var totalCurrentLiveMonth;
var leftMonthNeed;

//9 to 10 or 9.1 based on input value < 36
document.getElementById('currentAddress').addEventListener('click', () => {
    //total curent staying duration calculation
    var currentLivedYearDuration = document.getElementById("livedYears").value;
    var currentLivedMonthDuration = document.getElementById("livedMonths").value;
    if (!currentLivedYearDuration) {
        totalCurrentLiveMonth = parseInt(currentLivedMonthDuration);
    } else if (!currentLivedMonthDuration) {
        totalCurrentLiveMonth = parseInt(currentLivedYearDuration) * 12;
    } else if (currentLivedYearDuration && currentLivedMonthDuration) {
        totalCurrentLiveMonth = parseInt(currentLivedMonthDuration) + (parseInt(currentLivedYearDuration) * 12);
    }

    if (totalCurrentLiveMonth) {
        document.getElementById("totalMonthOf").value = totalCurrentLiveMonth;
        if (totalCurrentLiveMonth < 36) {
            document.getElementById('step-9').style.display = "none";
            document.getElementById('step-9.1').style.display = "block";
            document.getElementById('step-9.1').classList.remove('slideInLeft');
            document.getElementById('step-9.1').classList.add('slideInRight');
            document.getElementById('previousHomeDurationWarning1').innerHTML = 36 - totalCurrentLiveMonth;
            document.getElementById('previousHomeDurationWarning2').innerHTML = 36 - totalCurrentLiveMonth;
            document.getElementById('previousHomeDurationWarning3').innerHTML = 36 - totalCurrentLiveMonth;
            leftMonthNeed = 36 - totalCurrentLiveMonth;
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);



            var prevousAddressField = 'prevousAddressField';
            $(document).ready(function () {
                var defaultBounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(-33.8902, 151.1759),
                    new google.maps.LatLng(-33.8474, 151.2631));

                var input = document.getElementById('prevousAddressField');
                var options = {
                    bounds: defaultBounds,
                    types: ['geocode'],
                    componentRestrictions: {
                        country: 'gb'
                    }

                };

                autocomplete = new google.maps.places.Autocomplete(input, options);
                autocomplete.setFields(['address_component']);
                autocomplete.addListener('place_changed', fillInAddress);

                function fillInAddress() {
                    var place = autocomplete.getPlace();

                    for (var i = 0; i < place.address_components.length; i += 1) {
                        var addressObj = place.address_components[i];
                        for (var j = 0; j < addressObj.types.length; j += 1) {

                            if (addressObj.types[j] === 'postal_code') {
                                postalCode = addressObj.long_name; // confirm that this is the country name
                            } else {
                                postalCode = '';
                            }
                        }
                    }
                    var addressText = $('#prevousAddressField').val() + ', ' + postalCode;

                    $('#prevousAddressField').val(addressText);

                }

            });



        } else {
            document.getElementById("progress-bar").style.width = "55.6%";
            document.getElementById('step-9').style.display = "none";
            document.getElementById('step-10').style.display = "block";
            document.getElementById('step-10').classList.remove('slideInLeft');
            document.getElementById('step-10').classList.add('slideInRight');
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);

        }
    } else {
        document.getElementById("errorFirstYearField").style.opacity = 1;
        document.getElementById("livedYears").focus();
        document.getElementById("livedYears").classList.add('errorinput');
        document.getElementById("errorFirstMonthField").style.opacity = 1;
        document.getElementById("livedMonths").classList.add('errorinput');
    }



})

document.getElementById("livedYears").addEventListener('input', () => {
    document.getElementById("errorFirstYearField").style.opacity = 0;
    document.getElementById("livedYears").classList.remove('errorinput');
    document.getElementById("errorFirstMonthField").style.opacity = 0;
    document.getElementById("livedMonths").classList.remove('errorinput');
})

document.getElementById("livedMonths").addEventListener('input', () => {
    document.getElementById("errorFirstYearField").style.opacity = 0;
    document.getElementById("livedYears").classList.remove('errorinput');
    document.getElementById("errorFirstMonthField").style.opacity = 0;
    document.getElementById("livedMonths").classList.remove('errorinput');
    if (document.getElementById("livedMonths").value >= 12) {
        document.getElementById("errorFirstMonthField").innerHTML = "Maximum 11 Months.";
        document.getElementById("errorFirstMonthField").style.opacity = 1;
        document.getElementById("livedMonths").value = 11;
        setTimeout(() => {
            document.getElementById("errorFirstMonthField").style.opacity = 0;
            document.getElementById("errorFirstMonthField").innerHTML = "Enter '1' month if you just moved.";
        }, 1000);
    }
})


//step 9 to step 8 
document.getElementById('myPrev2').addEventListener("click", () => {
    document.getElementById("progress-bar").style.width = "44.48%";

    document.getElementById('step-9').style.display = "none";
    document.getElementById('step-8').style.display = "block";
    document.getElementById('step-8').classList.remove('slideInRight');
    document.getElementById('step-8').classList.add('slideInLeft');
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);

})





var previousAddressArray = [];

//step 9.1 to step 9.2 action 
document.getElementById('myNext9.1').addEventListener("click", () => {
    if (document.getElementById('prevousAddressField').value == '') {
        document.getElementById('prevAlert').style.display = "block";
        document.getElementById('prevousAddressField').focus();
        document.getElementById('prevousAddressField').classList.add('errorinput');

    } else {
        document.getElementById('step-9.1').style.display = "none";
        document.getElementById('step-9.2').style.display = "block";
        document.getElementById('step-9.2').classList.remove('slideInLeft');
        document.getElementById('step-9.2').classList.add('slideInRight');
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);
        previousAddressArray.push(document.getElementById('prevousAddressField').value + '-');
        document.getElementById('prevousAddressField').value = '';
    }

})

//oninput event to step 9.1
document.getElementById('prevousAddressField').addEventListener("input", () => {
    document.getElementById('prevousAddressField').classList.remove('errorinput');
    document.getElementById('prevAlert').style.display = "none";
})



//step 9.1 to step 9 action
document.getElementById('myPrev9.1').addEventListener("click", () => {
    if (previousLivingMonthArray.length == 0) {
        document.getElementById('step-9.1').style.display = "none";
        document.getElementById('step-9').style.display = "block";
        document.getElementById('step-9').classList.remove('slideInRight');
        document.getElementById('step-9').classList.add('slideInLeft');
        previousLivingMonthArray = [];
        previousAddressArray = [];
        previousRadioArray = [];
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

    } else if (previousLivingMonthArray.length >= 1) {
        document.getElementById('step-9.1').style.display = "none";
        document.getElementById('step-9.3').style.display = "block";
        document.getElementById('step-9.3').classList.remove('slideInRight');
        document.getElementById('step-9.3').classList.add('slideInLeft');
        previousLivingMonthArray.pop();
        leftmonthNumber = 0;
        for (i = 0; i < previousLivingMonthArray.length; i++) {
            leftmonthNumber = leftmonthNumber + parseInt(previousLivingMonthArray[i]);
        }
        document.getElementById('previousHomeDurationWarning1').innerHTML = leftMonthNeed - leftmonthNumber;
        document.getElementById('previousHomeDurationWarning2').innerHTML = leftMonthNeed - leftmonthNumber;
        document.getElementById('previousHomeDurationWarning3').innerHTML = leftMonthNeed - leftmonthNumber;
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

    }
})



var previousRadioArray = [];

//step 9.2 to step 9.3
document.getElementById('myNext9.2').addEventListener("click", () => {
    document.getElementById('step-9.2').style.display = "none";
    document.getElementById('step-9.3').style.display = "block";
    document.getElementById('step-9.3').classList.remove('slideInLeft');
    document.getElementById('step-9.3').classList.add('slideInRight');
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);


    var radioElement = document.getElementsByName('resiStatus');


    for (radio = 0; radio <= radioElement.length; radio++) {
        if (radioElement[radio].checked) {
            previousRadioArray.push(radioElement[radio].value);
        }
    }
})

//step 9.2 to step 9.1 action 
document.getElementById('myPrev9.2').addEventListener("click", () => {

    previousAddressArray.pop();

    document.getElementById('step-9.2').style.display = "none";
    document.getElementById('step-9.1').style.display = "block";
    document.getElementById('step-9.1').classList.remove('slideInRight');
    document.getElementById('step-9.1').classList.add('slideInLeft');
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);


})


var previousLivingMonthArray = [];
//step 9.3 to 10 or 9.1
document.getElementById('myNext9.3').addEventListener("click", () => {

    var previousYear = parseInt(document.getElementById('previouslivedYears').value);
    var previousMonth = parseInt(document.getElementById('previouslivedMonths').value);
    if (!previousYear) {
        totalPreviousMonth = previousMonth;

    } else if (!previousMonth) {
        totalPreviousMonth = previousYear * 12;

    } else if (previousYear && previousMonth) {
        totalPreviousMonth = (previousYear * 12) + previousMonth;

    }
    if (totalPreviousMonth) {
        previousLivingMonthArray.push(totalPreviousMonth);
    }




    //loop for total add of month number
    leftmonthNumber = 0;
    for (i = 0; i < previousLivingMonthArray.length; i++) {
        leftmonthNumber = leftmonthNumber + parseInt(previousLivingMonthArray[i]);
    }

    //validation for input fields
    if (!previousYear && !previousMonth) {
        document.getElementById("errorFirstYearFieldPrevious").style.opacity = 1;
        document.getElementById("previouslivedYears").focus();
        document.getElementById("previouslivedYears").classList.add('errorinput');
        document.getElementById("errorFirstMonthFieldPrevious").style.opacity = 1;
        document.getElementById("previouslivedMonths").classList.add('errorinput');
    } else {
        if (leftmonthNumber < leftMonthNeed) {
            document.getElementById('step-9.3').style.display = "none";
            document.getElementById('step-9.1').style.display = "block";
            document.getElementById('step-9.1').classList.remove('slideInLeft');
            document.getElementById('step-9.1').classList.add('slideInRight');
            document.getElementById('previousHomeDurationWarning1').innerHTML = leftMonthNeed - leftmonthNumber;
            document.getElementById('previousHomeDurationWarning2').innerHTML = leftMonthNeed - leftmonthNumber;
            document.getElementById('previousHomeDurationWarning3').innerHTML = leftMonthNeed - leftmonthNumber;
            document.getElementById('previouslivedYears').value = '';
            document.getElementById('previouslivedMonths').value = "";
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);


        } else {
            document.getElementById('step-9.3').style.display = "none";
            document.getElementById("progress-bar").style.width = "55.6%";

            document.getElementById('step-10').style.display = "block";
            document.getElementById('step-10').classList.remove('slideInLeft');
            document.getElementById('step-10').classList.add('slideInRight');
            document.getElementById('previouslivedYears').value = '';
            document.getElementById('previouslivedMonths').value = "";

            //store all information in input value
            document.getElementById("Total_previous_Living_Duration").value = previousLivingMonthArray.toString();
            document.getElementById("Total_previous_living_radio").value = previousRadioArray.toString();
            document.getElementById("previous_address_name_all").value = previousAddressArray.toString();
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);



        }
    }









})
//validation for step 9.3
document.getElementById("previouslivedYears").addEventListener("input", () => {
    document.getElementById("errorFirstYearFieldPrevious").style.opacity = 0;
    document.getElementById("previouslivedYears").classList.remove('errorinput');
    document.getElementById("errorFirstMonthFieldPrevious").style.opacity = 0;
    document.getElementById("previouslivedMonths").classList.remove('errorinput');
})
document.getElementById("previouslivedMonths").addEventListener("input", () => {
    document.getElementById("errorFirstYearFieldPrevious").style.opacity = 0;
    document.getElementById("previouslivedYears").classList.remove('errorinput');
    document.getElementById("errorFirstMonthFieldPrevious").style.opacity = 0;
    document.getElementById("previouslivedMonths").classList.remove('errorinput');
    if (document.getElementById("previouslivedMonths").value >= 12) {
        document.getElementById("errorFirstMonthFieldPrevious").innerHTML = "Maximum 11 Months.";
        document.getElementById("errorFirstMonthFieldPrevious").style.opacity = 1;
        document.getElementById("previouslivedMonths").value = 11;
        setTimeout(() => {
            document.getElementById("errorFirstMonthFieldPrevious").style.opacity = 0;
            document.getElementById("errorFirstMonthFieldPrevious").innerHTML = "Enter '1' month if you just moved.ukhj";
        }, 1000);
    }
})


//step 9.3 to 9.2
document.getElementById('myPrev9.3').addEventListener("click", () => {
    previousRadioArray.pop();


    document.getElementById('step-9.3').style.display = "none";
    document.getElementById('step-9.2').style.display = "block";
    document.getElementById('step-9.2').classList.remove('slideInRight');
    document.getElementById('step-9.2').classList.add('slideInLeft');
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);


})



// step 10 to step 9 or 9.3
document.getElementById("resetFirstInput").addEventListener("click", () => {
    if (previousLivingMonthArray.length == 0) {
        document.getElementById("progress-bar").style.width = "50.4%";

        document.getElementById('step-10').style.display = "none";
        document.getElementById('step-9').style.display = "block";
        document.getElementById('step-9').classList.remove('slideInRight');
        document.getElementById('step-9').classList.add('slideInLeft');
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

    } else {





        previousLivingMonthArray.pop();
        leftmonthNumber = 0;
        for (i = 0; i < previousLivingMonthArray.length; i++) {
            leftmonthNumber = leftmonthNumber + parseInt(previousLivingMonthArray[i]);
        }
        document.getElementById("progress-bar").style.width = "50.4%";

        document.getElementById('previousHomeDurationWarning1').innerHTML = leftMonthNeed - leftmonthNumber;
        document.getElementById('previousHomeDurationWarning2').innerHTML = leftMonthNeed - leftmonthNumber;
        document.getElementById('previousHomeDurationWarning3').innerHTML = leftMonthNeed - leftmonthNumber;
        document.getElementById('step-10').style.display = "none";
        document.getElementById('step-9.3').style.display = "block";
        document.getElementById('step-9.3').classList.remove('slideInRight');
        document.getElementById('step-9.3').classList.add('slideInLeft');
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

    }
})
