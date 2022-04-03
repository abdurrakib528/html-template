// Mobile order summary popup
document.querySelector('.order-summary').addEventListener('click', function () {
    document.querySelector('.order-details-container.static').classList.toggle('show');
});

// May you like product carousel
$(document).ready(function () {

    $(".you-may-product").owlCarousel({
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            920: {
                items: 3,
            }
        }

    });
});


// Get select quatity
function getQyt(item) {
    let selectedIdx = item.options[item.selectedIndex].text;
    updatePrice(selectedIdx, item);
    totalPrice();
}

// Update actual price
function updatePrice(productQyt, selectItem) {
    const orgPriceItem = selectItem.parentElement.parentElement.parentElement.querySelectorAll('.orginal-price.show strong');
    const prevItemPrice = selectItem.parentElement.parentElement.parentElement.querySelector('.orginal-price.hide strong').innerHTML;
    for (var i = 0; i < orgPriceItem.length; i++) {
        let actualPrice = orgPriceItem[i].innerHTML = Number(prevItemPrice * productQyt).toFixed(2);
        discountPrice(actualPrice, selectItem);
    }

}

// Discount Price Calculation
function discountPrice(actualPrice, selectItem) {
    const percentage = 13.00 / 100;
    const priceWithDis = (actualPrice - (actualPrice * percentage)).toFixed(2)
    const discountPriceItem = selectItem.parentElement.parentElement.parentElement.querySelectorAll('.discount-price strong');
    for (let k = 0; k < discountPriceItem.length; k++) {
        discountPriceItem[k].innerHTML = priceWithDis;
    }
}

// Count cart total Item
const totalCartItem = document.querySelectorAll('.cart-product').length;
document.querySelector('.cart-number').innerHTML = `(${totalCartItem} Items)`;
document.querySelector('#qyt-count').innerHTML = `(${totalCartItem})`;


totalPrice();

// Calculate total price
function totalPrice() {

    let totalPrice = []
    let proPrices = document.querySelectorAll('.pro-price strong');
    proPrices.forEach(function (proPrice) {
        totalPrice.push(proPrice.innerHTML)
    });
    let actualPricesArr = totalPrice.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) == index;
    });
    const orginalMoney = actualPricesArr.map(Number);
    const calTotalMoney = orginalMoney.reduce(function (a, b) {
        return a + b;
    }, 0)

    document.getElementById('subtotal-price').innerHTML = '$' + calTotalMoney.toFixed(2)
    document.getElementById('estimatetotal-price').innerHTML = '$' + calTotalMoney.toFixed(2)
}