document.getElementById("wMyPrev").addEventListener("click", () => {
    document.getElementById("progress-bar").style.width = "83.4%";

    document.getElementById("step-16").style.display = "none";
    document.getElementById("step-15").style.display = "block";
    document.getElementById("step-15").classList.remove("slideInRight");
    document.getElementById("step-15").classList.add("slideInLeft");
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);
})

var totalCurrentEmployInMonth;
var leftEmployMonth;

document.getElementById("wMyNext").addEventListener("click", () => {
    const employYearCurrent = parseInt(document.getElementById("emYear").value);
    const employMonthCurrent = parseInt(document.getElementById("emMonth").value);
    if (!employYearCurrent) {
        totalCurrentEmployInMonth = employMonthCurrent;
    } else if (!employMonthCurrent) {
        totalCurrentEmployInMonth = employYearCurrent * 12;
    } else if (employYearCurrent && employMonthCurrent) {
        totalCurrentEmployInMonth = employMonthCurrent + (employYearCurrent * 12);
    }
    if (!totalCurrentEmployInMonth) {
        document.getElementById("errorFirstYearField2").style.opacity = 1;
        document.getElementById("emYear").focus();
        document.getElementById("errorFirstMonthField2").style.opacity = 1;
        document.getElementById("emYear").classList.add("errorinput");
        document.getElementById("emMonth").classList.add("errorinput");

    } else {
        document.getElementById("currentEmployMonth").value = totalCurrentEmployInMonth;

        if (totalCurrentEmployInMonth < 36) {
            leftEmployMonth = 36 - totalCurrentEmployInMonth;
            document.getElementById("step-16").style.display = "none";
            document.getElementById("step-16.1").style.display = "block";
            document.getElementById("step-16.1").classList.remove("slideInLeft");
            document.getElementById("step-16.1").classList.add("slideInRight");
            document.getElementById("previousJobDurationWarning1").innerHTML = leftEmployMonth;
            document.getElementById("previousJobDurationWarning2").innerHTML = leftEmployMonth;
            document.getElementById("previousJobDurationWarning3").innerHTML = leftEmployMonth;
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);
        } else {
            document.getElementById("progress-bar").style.width = "94.52%";

            document.getElementById("step-16").style.display = "none";
            document.getElementById("step-17").style.display = "block";
            document.getElementById("step-17").classList.remove("slideInLeft");
            document.getElementById("step-17").classList.add("slideInRight");
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);
        }
    }
})

document.getElementById("emYear").addEventListener("input", () => {
    document.getElementById("errorFirstYearField2").style.opacity = 0;
    document.getElementById("errorFirstMonthField2").style.opacity = 0;
    document.getElementById("emYear").classList.remove("errorinput");
    document.getElementById("emMonth").classList.remove("errorinput");
})

document.getElementById("emMonth").addEventListener("input", () => {
    document.getElementById("errorFirstYearField2").style.opacity = 0;
    document.getElementById("errorFirstMonthField2").style.opacity = 0;
    document.getElementById("emYear").classList.remove("errorinput");
    document.getElementById("emMonth").classList.remove("errorinput");
    if (parseInt(document.getElementById("emMonth").value) >= 12) {
        document.getElementById("emMonth").value = 11;
        document.getElementById("errorFirstMonthField2").innerHTML = "Maximum 11 Month.";
        document.getElementById("errorFirstMonthField2").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("errorFirstMonthField2").style.opacity = 0;
            document.getElementById("errorFirstMonthField2").innerHTML = "Enter '1' month if you just started your job.";
        }, 1000);

    }
})
//##########################end of step 16

var previousEmploymentStatusRadio = [];

//next
document.getElementById("wmyNext16.1").addEventListener("click", () => {
    var dslkfjll = document.getElementsByName("employmentStatus");
    for (emRadio = 0; emRadio < dslkfjll.length; emRadio++) {
        if (dslkfjll[emRadio].checked) {
            previousEmploymentStatusRadio.push(dslkfjll[emRadio].value);
        };
    };

    document.getElementById("step-16.1").style.display = "none";
    document.getElementById("step-16.2").style.display = "block";
    document.getElementById("step-16.2").classList.remove("slideInLeft");
    document.getElementById("step-16.2").classList.add("slideInRight");
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);
})


//previous
document.getElementById("myPrev16.1").addEventListener("click", () => {
    if (previousJobDuration.length == 0) {
        document.getElementById("step-16.1").style.display = "none";
        document.getElementById("step-16").style.display = "block";
        document.getElementById("step-16").classList.remove("slideInRight");
        document.getElementById("step-16").classList.add("slideInLeft");
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

        previousEmploymentStatusRadio = [];
        previousJobCompanyName = [];
        previousJobDuration = [];
    } else {
        previousJobDuration.pop();
        leftPreviousMonthV = 0;
        for (r = 0; r < previousJobDuration.length; r++) {
            leftPreviousMonthV = leftPreviousMonthV + parseInt(previousJobDuration[r]);
        }
        document.getElementById("previousJobDurationWarning1").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById("previousJobDurationWarning2").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById("previousJobDurationWarning3").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById("step-16.1").style.display = "none";
        document.getElementById("step-16.3").style.display = "block";
        document.getElementById("step-16.3").classList.remove("slideInRight");
        document.getElementById("step-16.3").classList.add("slideInLeft");
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);
    }



})

//################ end of step - 16.1

var previousJobCompanyName = [];
var previousRecord;

//next
document.getElementById("myNext16.2").addEventListener("click", () => {
    var previousCompanyName = document.getElementById("previousCompanyName").value;
    var previousJobTitel = document.getElementById("previousJobTitle").value;
    if (previousCompanyName && previousJobTitel) {
        previousRecord = "Company Name : " + previousCompanyName + " and Job Title : " + previousJobTitel + "-";
        previousJobCompanyName.push(previousRecord);
    }

    if (!previousRecord) {
        document.getElementById("prevAlert2").style.display = "block";
        document.getElementById("prevAlert3").style.display = "block";
        document.getElementById("previousCompanyName").focus();
        document.getElementById("previousCompanyName").classList.add("errorinput");
        document.getElementById("previousJobTitle").classList.add("errorinput");
    } else {
        document.getElementById("step-16.2").style.display = "none";
        document.getElementById("step-16.3").style.display = "block";
        document.getElementById("step-16.3").classList.remove("slideInLeft");
        document.getElementById("step-16.3").classList.add("slideInRight");
        document.getElementById("previousCompanyName").value = '';
        document.getElementById("previousJobTitle").value = '';
        previousRecord = '';
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);
    }
})

//validation
document.getElementById("previousCompanyName").addEventListener("input", () => {
    document.getElementById("prevAlert2").style.display = "none";
    document.getElementById("previousCompanyName").classList.remove("errorinput");
})

document.getElementById("previousJobTitle").addEventListener("input", () => {

    document.getElementById("prevAlert3").style.display = "none";

    document.getElementById("previousJobTitle").classList.remove("errorinput");
})
//previous
document.getElementById("myPrev16.2").addEventListener("click", () => {
    previousEmploymentStatusRadio.pop();


    document.getElementById("step-16.2").style.display = "none";
    document.getElementById("step-16.1").style.display = "block";
    document.getElementById("step-16.1").classList.remove("slideInRight");
    document.getElementById("step-16.1").classList.add("slideInLeft");
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);
});

//#####################end of step 16.2

var previousJobDuration = [];
var totalPreviousJobMonth;

//next
document.getElementById("MyNext16.3").addEventListener("click", () => {
    var previousJobYear = parseInt(document.getElementById('emYearPrevious').value);
    var previousJobMonth = parseInt(document.getElementById('emMonthPrevious').value);

    if (!previousJobYear) {
        totalPreviousJobMonth = previousJobMonth;
    } else if (!previousJobMonth) {
        totalPreviousJobMonth = previousJobYear * 12;
    } else if (previousJobYear && previousJobMonth) {
        totalPreviousJobMonth = (previousJobYear * 12) + previousJobMonth;
    }

    if (totalPreviousJobMonth) {
        previousJobDuration.push(totalPreviousJobMonth);
    }

    leftPreviousMonthV = 0;
    for (r = 0; r < previousJobDuration.length; r++) {
        leftPreviousMonthV = leftPreviousMonthV + parseInt(previousJobDuration[r]);
    }

    if (!previousJobYear && !previousJobMonth) {
        document.getElementById("previousYearFieldError2").style.opacity = 1;
        document.getElementById("previousErrorFirstMonthField2").style.opacity = 1;
        document.getElementById("emYearPrevious").focus();
        document.getElementById("emYearPrevious").classList.add("errorinput");
        document.getElementById("emMonthPrevious").classList.add("errorinput");

    } else {
        if (leftPreviousMonthV < leftEmployMonth) {
            document.getElementById('step-16.3').style.display = "none";
            document.getElementById('step-16.1').style.display = "block";
            document.getElementById('step-16.1').classList.remove('slideInLeft');
            document.getElementById('step-16.1').classList.add('slideInRight');
            document.getElementById("previousJobDurationWarning1").innerHTML = leftEmployMonth - leftPreviousMonthV;
            document.getElementById("previousJobDurationWarning2").innerHTML = leftEmployMonth - leftPreviousMonthV;
            document.getElementById("previousJobDurationWarning3").innerHTML = leftEmployMonth - leftPreviousMonthV;
            document.getElementById('emYearPrevious').value = '';
            document.getElementById('emMonthPrevious').value = '';
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);
        } else {
            document.getElementById("progress-bar").style.width = "94.52%";

            document.getElementById('step-16.3').style.display = "none";
            document.getElementById('step-17').style.display = "block";
            document.getElementById('step-17').classList.remove('slideInLeft');
            document.getElementById('step-17').classList.add('slideInRight');
            document.getElementById('emYearPrevious').value = '';
            document.getElementById('emMonthPrevious').value = '';






            document.getElementById("valueOf16_1").value = previousEmploymentStatusRadio.toString();
            document.getElementById("valueOf16_2").value = previousJobCompanyName.toString();
            document.getElementById("valueOf16_3").value = previousJobDuration.toString();
            $('html, body').animate({
                scrollTop: $('.app-container').offset().top
            }, 100);


        }
    }
})



//validation
document.getElementById("emYearPrevious").addEventListener("input", () => {
    document.getElementById("previousYearFieldError2").style.opacity = 0;
    document.getElementById("previousErrorFirstMonthField2").style.opacity = 0;

    document.getElementById("emYearPrevious").classList.remove("errorinput");
    document.getElementById("emYearPrevious").classList.remove("emMonthPrevious");
})
document.getElementById("emMonthPrevious").addEventListener("input", () => {
    document.getElementById("previousYearFieldError2").style.opacity = 0;
    document.getElementById("previousErrorFirstMonthField2").style.opacity = 0;

    document.getElementById("emYearPrevious").classList.remove("errorinput");
    document.getElementById("emMonthPrevious").classList.remove("errorinput");
    if (parseInt(document.getElementById("emMonthPrevious").value) >= 12) {
        document.getElementById("emMonthPrevious").value = 11;
        document.getElementById("previousErrorFirstMonthField2").innerHTML = "Maximum 11 Month.";
        document.getElementById("previousErrorFirstMonthField2").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("previousErrorFirstMonthField2").style.opacity = 0;
            document.getElementById("previousErrorFirstMonthField2").innerHTML = "Enter '1' month if you just started your job.";
        }, 1000);
    };
})

//previous
document.getElementById("MyPrev16.3").addEventListener("click", () => {
    previousJobCompanyName.pop();


    document.getElementById('step-16.3').style.display = "none";
    document.getElementById('step-16.2').style.display = "block";
    document.getElementById('step-16.2').classList.remove('slideInRight');
    document.getElementById('step-16.2').classList.add('slideInLeft');
    $('html, body').animate({
        scrollTop: $('.app-container').offset().top
    }, 100);
})

//########################### end of step 16.3

document.getElementById("resetSeconD").addEventListener("click", () => {
    if (previousJobDuration.length == 0) {
        document.getElementById("progress-bar").style.width = "88.9%";

        document.getElementById('step-17').style.display = "none";
        document.getElementById('step-16').style.display = "block";
        document.getElementById('step-16').classList.remove('slideInRight');
        document.getElementById('step-16').classList.add('slideInLeft');
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);
    } else {
        previousJobDuration.pop();


        leftPreviousMonthV = 0;
        for (r = 0; r < previousJobDuration.length; r++) {
            leftPreviousMonthV = leftPreviousMonthV + parseInt(previousJobDuration[r]);
        }
        document.getElementById("previousJobDurationWarning1").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById("previousJobDurationWarning2").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById("previousJobDurationWarning3").innerHTML = leftEmployMonth - leftPreviousMonthV;
        document.getElementById('step-17').style.display = "none";
        document.getElementById("progress-bar").style.width = "88.9%";

        document.getElementById('step-16.3').style.display = "block";
        document.getElementById('step-16.3').classList.remove('slideInRight');
        document.getElementById('step-16.3').classList.add('slideInLeft');
        $('html, body').animate({
            scrollTop: $('.app-container').offset().top
        }, 100);

    }
})

//############### end of step 17
