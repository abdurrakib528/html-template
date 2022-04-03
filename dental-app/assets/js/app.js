// Calculate total worth
let totalWorth = []

function updatePrice(chk, value) {
    if (chk.checked) {
        totalWorth.push(value)
    } else {
        totalWorth.pop(value)
    }
    let arrValue = totalWorth.map(Number)
    let totalAmount = arrValue.reduce(function (a, b) {
        return a + b
    }, 0)
    document.querySelector("#total > strong").textContent = '$' + totalAmount.toFixed(2)
    if (totalAmount == 0) {
        document.querySelector('.step-bottom').style.display = 'none'
    } else {
        document.querySelector('.step-bottom').style.display = 'block'
    }
}


// Next Step 1 to 2
if (document.getElementById('next1_2')) {
    document.getElementById('next1_2').onclick = function () {

        document.getElementById('step-1').parentElement.style.display = 'none'
        document.getElementById('step-1').classList.remove('slideInLeft')
        document.getElementById('step-2').parentElement.style.display = 'block'
        document.getElementById('step-2').classList.add('slideInRight')
        $('html, body').animate({
            scrollTop: ($(this).offset().top - 350)
        }, 100);

        // remove error from step 2 initiall
        document.querySelector('.postcode').classList.remove('active')

        // clear input value
        document.getElementById('postcode-input').value = ''

    }
}

// Next Step 2 to appointment section
document.getElementById('find-appointment').onclick = function () {

    let postCodeValue = document.getElementById('postcode-input').value

    if (postCodeValue) {
        document.getElementById('step-2').parentElement.style.display = 'none'
        document.getElementById('step-2').classList.remove('slideInLeft')
        document.getElementById('map-step').parentElement.style.display = 'block'
        document.getElementById('map-step').classList.add('slideInRight')
    } else {

        // add error element
        document.querySelector('.postcode').classList.add('active')
    }


    // Height Calculation and push it on Map div height
    let listingHeight = document.querySelector('.listings').clientHeight
    document.querySelector('.map-container').style.height = listingHeight + 'px'

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);

}


// Next Step appointment section to step 3
let storeItems = document.querySelectorAll('.listings .item')
for (let item = 0; item < storeItems.length; item++) {
    const storeItem = storeItems[item]
    storeItem.onclick = function () {

        // Add active class from listing
        this.classList.add('active')

        setTimeout(() => {
            document.getElementById('map-step').parentElement.style.display = 'none'
            document.getElementById('map-step').classList.remove('slideInLeft')
            document.getElementById('step-3').parentElement.style.display = 'block'
            document.getElementById('step-3').classList.add('slideInRight')

            $('html, body').animate({
                scrollTop: ($(this).offset().top - 350)
            }, 100);

        }, 1000);


    }

}

// Next Step 3 to 4
document.getElementById('next3_4').onclick = function () {
    document.getElementById('step-3').parentElement.style.display = 'none'
    document.getElementById('step-3').classList.remove('slideInLeft')
    document.getElementById('step-4').parentElement.style.display = 'block'
    document.getElementById('step-4').classList.add('slideInRight')
    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}


// Next Step 5 to 6
document.getElementById('next5_6').onclick = function () {

    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInLeft')
    document.getElementById('step-6').parentElement.style.display = 'block'
    document.getElementById('step-6').classList.add('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);

}

// Next Step 6 to 7
document.getElementById('next6_7').onclick = function () {

    document.getElementById('step-6').parentElement.style.display = 'none'
    document.getElementById('step-6').classList.remove('slideInLeft')
    document.getElementById('step-welcome').parentElement.style.display = 'block'
    document.getElementById('step-welcome').classList.add('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);

}



// Back Step 2 to 1
document.getElementById('back2_1').onclick = function () {
    document.getElementById('step-1').parentElement.style.display = 'block'
    document.getElementById('step-1').classList.remove('slideInRight')
    document.getElementById('step-1').classList.add('slideInLeft')
    document.getElementById('step-2').parentElement.style.display = 'none'
    document.getElementById('step-2').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}


// Back Step 3 to 2
document.getElementById('back3_2').onclick = function () {
    document.getElementById('step-2').parentElement.style.display = 'block'
    document.getElementById('step-2').classList.remove('slideInRight')
    document.getElementById('step-2').classList.add('slideInLeft')
    document.getElementById('step-3').parentElement.style.display = 'none'
    document.getElementById('step-3').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);

    // clear input value
    document.getElementById('postcode-input').value = ''

    // Remove active class from listing
    document.querySelector('.listings .item.active').classList.remove('active')


}

// Back Step 4 to 3
document.getElementById('back4_3').onclick = function () {
    document.getElementById('step-3').parentElement.style.display = 'block'
    document.getElementById('step-3').classList.remove('slideInRight')
    document.getElementById('step-3').classList.add('slideInLeft')
    document.getElementById('step-4').parentElement.style.display = 'none'
    document.getElementById('step-4').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}
// Back Step 5 to 4
document.getElementById('back5_4').onclick = function () {
    document.getElementById('step-4').parentElement.style.display = 'block'
    document.getElementById('step-4').classList.remove('slideInRight')
    document.getElementById('step-4').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')


    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}
// Back Step 6 to 5
document.getElementById('back6_5').onclick = function () {
    document.getElementById('step-5').parentElement.style.display = 'block'
    document.getElementById('step-5').classList.remove('slideInRight')
    document.getElementById('step-5').classList.add('slideInLeft')
    document.getElementById('step-6').parentElement.style.display = 'none'
    document.getElementById('step-6').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}


// User details Edit button JS

// Who section edit button
document.querySelector('.edit-bio').onclick = function () {

    document.getElementById('step-4').parentElement.style.display = 'block'
    document.getElementById('step-4').classList.remove('slideInRight')
    document.getElementById('step-4').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')


    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}

// Edit treament button
document.querySelector('.edit-treatment').onclick = function () {

    document.getElementById('step-1').parentElement.style.display = 'block'
    document.getElementById('step-1').classList.remove('slideInRight')
    document.getElementById('step-1').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}


// Edit location button
document.querySelector('.edit-location').onclick = function () {
    document.getElementById('step-2').parentElement.style.display = 'block'
    document.getElementById('step-2').classList.remove('slideInRight')
    document.getElementById('step-2').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);

    // clear input value
    document.getElementById('postcode-input').value = ''

    // Remove active class from listing
    document.querySelector('.listings .item.active').classList.remove('active')
}

// Edit date button
document.querySelector('.edit-date').onclick = function () {
    document.getElementById('step-3').parentElement.style.display = 'block'
    document.getElementById('step-3').classList.remove('slideInRight')
    document.getElementById('step-3').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}

// Edit time button
document.querySelector('.edit-time').onclick = function () {
    document.getElementById('step-3').parentElement.style.display = 'block'
    document.getElementById('step-3').classList.remove('slideInRight')
    document.getElementById('step-3').classList.add('slideInLeft')
    document.getElementById('step-5').parentElement.style.display = 'none'
    document.getElementById('step-5').classList.remove('slideInRight')

    $('html, body').animate({
        scrollTop: ($(this).offset().top - 350)
    }, 100);
}

// Show Credit card form only for Visa method
document.getElementById('paypal').onclick = function () {
    let payPalChecked = this.previousElementSibling.checked

    if (payPalChecked == false) {
        document.getElementById('onlyvisa').style.display = 'none'
    }

}
document.getElementById('visa').onclick = function () {
    let visaChecked = this.previousElementSibling.checked

    if (visaChecked == false) {
        document.getElementById('onlyvisa').style.display = 'block'
    }

}




// Handling Validation Part
document.getElementById('postcode-input').addEventListener('input', function () {
    if (this.value.length > 2) {
        document.querySelector('.postcode').classList.remove('active')
    }
})

// Contact Form Validation

const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const dob = document.getElementById('dob')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')
const terms = document.getElementById('terms')



// Next Step 4 to 5
document.getElementById('next4_5').onclick = function () {

    // Input field Validation
    checkInputs()

    // terms and condition validation
    if (terms.checked) {
        const checkboxQuestion = terms.parentElement
        checkboxQuestion.className = 'checkbox-questions success'
    } else {
        const checkboxQuestion = terms.parentElement
        const small = checkboxQuestion.querySelector('small')
        small.innerText = 'Must be agree with our terms!'

        checkboxQuestion.className = 'checkbox-questions errors'
    }


    // Put contact form value to confirm booking
    document.querySelector('.name').innerText = firstName.value + ' ' + lastName.value + '(you)'
    document.querySelector('.phone').innerText = phone.value
    document.querySelector('.email').innerText = email.value


    // Loop through first step to get Treatment name and treatment count
    let stepItems = document.querySelectorAll('.step-item')
    document.querySelector('.t-name').innerText = ''

    for (let t = 0; t < stepItems.length; t++) {
        const stepItem = stepItems[t];
        if (stepItem.firstElementChild.checked) {

            const treatName = stepItem.querySelector('.treatment-name').innerText

            // Create span element for treatment Name
            let span = document.createElement('span')
            span.classList.add('treat')
            document.querySelector('.t-name').appendChild(span)
            span.innerText = treatName


            // Create small tag for Treament count
            let treatValue = ''
            let small = ''
            if (stepItem.querySelector('.how-items')) {
                treatValue = stepItem.querySelector('.how-items strong').innerText
                small = document.createElement('small')
                small.classList.add('treat-val')
                span.appendChild(small)
                small.innerText = '(' + 'x' + treatValue + ')'

            }

        }
    }

    const isSuccessClass = document.querySelector('.form-group.success')
    if (isSuccessClass && terms.checked) {
        document.getElementById('step-4').parentElement.style.display = 'none'
        document.getElementById('step-4').classList.remove('slideInLeft')
        document.getElementById('step-5').parentElement.style.display = 'block'
        document.getElementById('step-5').classList.add('slideInRight')

        $('html, body').animate({
            scrollTop: ($(this).offset().top - 350)
        }, 100);
    }



}




function checkInputs() {

    // trim to remove the whitespace
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const dobValue = dob.value.trim()
    const phoneValue = phone.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if (firstNameValue === '') {
        setError(firstName, 'First name can\'t be blank!')
    } else {
        setSuccess(firstName)
    }
    if (lastNameValue === '') {
        setError(lastName, 'Last name can\'t be blank!')
    } else {
        setSuccess(lastName)
    }
    if (dobValue === '') {
        setError(dob, 'Date of birth can\'t be blank!')
    } else {
        setSuccess(dob)
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number can\'t be blank!')
    } else if (!phonenumber(phoneValue)) {
        setError(phone, 'Not a valid number')
    } else {
        setSuccess(phone)
    }


    if (emailValue === '') {
        setError(email, 'Email can\'t be blank!')
    } else if (!isEmail(emailValue)) {
        setError(email, 'Not a valid email')
    } else {
        setSuccess(email)
    }


    if (passwordValue === '') {
        setError(password, 'Password can\'t be blank!')
    } else {
        setSuccess(password)
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Password can\'t be blank!')
    } else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Password does not macth!')
    } else {
        setSuccess(confirmPassword)
    }
}


function setError(input, message) {
    const formGroup = input.parentElement
    const small = formGroup.querySelector('small')
    formGroup.className = 'form-group mb-4 errors'
    small.innerText = message
}

function setSuccess(input) {
    const formGroup = input.parentElement
    formGroup.className = 'form-group mb-4 success'
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function phonenumber(phone) {
    return /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
}


firstName.oninput = function () {
    if (firstName.value.length > 2) {
        this.parentElement.className = 'form-group mb-4 success'
    } else if (firstName.value.length < 3 && firstName.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'First Name must be atleast 3 characters!'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}

lastName.oninput = function () {
    if (lastName.value.length > 2) {
        this.parentElement.className = 'form-group mb-4 success'
    } else if (lastName.value.length < 3 && lastName.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'First Name must be atleast 3 characters!'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}


function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
        let num = parseInt(str)
        if (isNaN(num) || num <= 0 || num > max) num = 1
        str = num > parseInt(max.toString().charAt(0)) &&
            num.toString().length == 1 ? '0' + num : num.toString()
    }
    return str
}

dob.addEventListener('input', function (e) {
    this.type = 'text'
    let input = this.value

    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3)
    let values = input.split('/').map(function (v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 12)
    if (values[1]) values[1] = checkValue(values[1], 31)
    let output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + ' / ' : v;
    })
    this.value = output.join('').substr(0, 14)


    if (dob.value.length == 14) {
        this.parentElement.className = 'form-group mb-4 success'
    } else if (dob.value.length < 14 && dob.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'Please enter a valid date of birth!'

    } else {
        this.parentElement.className = 'form-group mb-4'
    }
})


phone.oninput = function () {
    if (!phonenumber(phone.value) && phone.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'Not a valid number!'
    } else if (phonenumber(phone.value) || phone.value.length > 9) {
        this.parentElement.className = 'form-group mb-4 success'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}

function isNumberKey(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}


email.oninput = function () {
    if (!isEmail(email.value) && email.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'Not a valid email!'
    } else if (phonenumber(email.value)) {
        this.parentElement.className = 'form-group mb-4 success'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}

password.oninput = function () {
    if (password.value.length < 6 && password.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'Password at least 6 characters!'
    } else if (password.value.length > 6) {
        this.parentElement.className = 'form-group mb-4 success'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}
confirmPassword.oninput = function () {
    if (password.value !== confirmPassword.value && confirmPassword.value.length > 0) {
        this.parentElement.className = 'form-group mb-4 errors'
        this.parentElement.querySelector('small').innerText = 'Password does not match!'
    } else if (password.value === confirmPassword.value && confirmPassword.value.length > 6) {
        this.parentElement.className = 'form-group mb-4 success'
    } else {
        this.parentElement.className = 'form-group mb-4'
    }
}



terms.oninput = function () {
    if (terms.checked) {
        const checkboxQuestion = terms.parentElement
        checkboxQuestion.className = 'checkbox-questions success'
    } else {
        const checkboxQuestion = terms.parentElement
        const small = checkboxQuestion.querySelector('small')
        small.innerText = 'Must be agree with our terms!'

        checkboxQuestion.className = 'checkbox-questions errors'
    }
}


window.onload = function () {

    $('html, body').animate({
        scrollTop: ($('html').offset().top)
    }, 5);
}