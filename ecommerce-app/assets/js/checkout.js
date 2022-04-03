 // Change Selected class based on checked button
 const inputItems = document.querySelectorAll('.shipping-method-check input');
 inputItems.forEach(function (inputItems) {
     inputItems.addEventListener('change', function (e) {
         const shippingCheckItems = document.querySelectorAll('.shipping-method-check');
         shippingCheckItems.forEach(function (checkItem) {
             checkItem.classList.remove('selected')
         });

         if (e.target.checked) {
             this.parentElement.classList.add('selected');
         }
     });

 });

 //  giftBox Open and Show
 const giftBox = document.getElementById('giftBox');
 document.querySelector('.gift-checked-box').classList.remove('show')

 giftBox.addEventListener('change', function (e) {
     document.querySelector('.gift-checked-box').classList.remove('show')

     if (e.target.checked) {
         document.querySelector('.gift-checked-box').classList.add('show')
     }
 });

 // Mobile Filter
 document.querySelector('.mobile-checkout-filter').addEventListener('click', function () {
     document.querySelector('.checkout-right').classList.toggle('show');
     document.querySelector('.checkout-box-icon').classList.toggle('active');
 });