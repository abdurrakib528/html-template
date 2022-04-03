//Custom Dropdown

var navigationSelect = document.querySelector('.select-wrapper');

function initSelect(elem) {
    var selectHolder = elem.querySelector('.holder');
    var selectOptions = elem.querySelectorAll('.dropdownOption li');
    var dropHolder = elem.querySelector('.dropdown');
    var selectedOption = selectOptions[0];

    selectedOption.classList.add('current');

    selectHolder.addEventListener('click', function () {
        dropHolder.classList.toggle('active');
    });

    selectOptions.forEach(function (currentElement) {
        currentElement.addEventListener('click', function () {
            selectedOption.classList.remove('current');
            selectedOption = currentElement;
            currentElement.classList.add('current');
            selectHolder.innerText = currentElement.textContent;
            dropHolder.classList.toggle('active');
        });
    });
};

initSelect(navigationSelect);




const form = document.querySelector('form');
var digit = document.querySelectorAll('.dialpad');


for (let i = 0; i < digit.length; i++) {

    const dtmf = new CustomEvent('dtmf', {
        bubbles: true,
        detail: {
            text: () => digit[i].outerHTML
        }
    });

    
    form.addEventListener('dtmf', e => console.log(e.detail.text()));
    form.addEventListener('dtmf', e => console.log(e));

    
    digit[i].addEventListener('click', e => e.target.dispatchEvent(dtmf));
    


}
