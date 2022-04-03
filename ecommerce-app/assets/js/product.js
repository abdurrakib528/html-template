$(window).load(function () {

    $(".pro-color-swatcher").owlCarousel({
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 3,
            },
            480: {
                items: 4,
            },
            920: {
                items: 6,
            }
        }

    });



});



// Sidebar sticky on scroll
const productTop = document.querySelector('.products-inner').offsetTop
window.addEventListener('scroll', function () {
    if (window.scrollY >= productTop) {
        document.querySelector('.filter-inner').classList.add('fixed');
    } else {
        document.querySelector('.filter-inner').classList.remove('fixed');
    }

});


// Mobile filter popup
const showMobileFilter = document.getElementById('filter-show');
const hideMobileFilter = document.getElementById('close-filter');
showMobileFilter.addEventListener('click', function () {
    document.querySelector('.products-left-filter').classList.add('show');
})
hideMobileFilter.addEventListener('click', function () {
    document.querySelector('.products-left-filter').classList.remove('show');
})



// Dropdown show
document.querySelector('.select-box.mobile .select-box-current').addEventListener('click', function () {
    document.querySelector('.select-box.mobile .select-box-list').classList.toggle('show');
    this.classList.toggle('show');
});
document.querySelector('.select-box.md-block .select-box-current').addEventListener('click', function () {
    document.querySelector('.select-box.md-block .select-box-list').classList.toggle('show');
    this.classList.toggle('show');
});




//Load More items On scrolll.
// init controller.
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: ".dynamicContent #loader",
        triggerHook: "onEnter"
    })
    .addTo(controller)
    .on("enter", function (e) {
        if (!$("#loader").hasClass("active")) {
            $("#loader").addClass("active");
            if (console) {
                console.log("loading new items");
            }
            setTimeout(addBoxes, 1000, 9);
        }
    });

function addBoxes(amount) {
    for (i = 1; i <= amount; i++) {
        $(`  <div class="col-lg-4 col-cs-6 p-2">
        <div class="product">
            <div class="pro-img">
                <a href="#">
                    <picture class="p-front-img">
                        <img src="./assets/images/products/p2.jpg" alt="Shoes">
                    </picture>
                    <picture class="p-hover-img">
                        <img src="./assets/images/products/p1.jpg" alt="Shoes">
                    </picture>
                </a>
                <div class="heart-icon">
                    <i class="fa fa-heart-o"></i>
                </div>

                <div class="product-badge">New arrival</div>

            </div>
            <div class="pro-color-count">
                <p class="count-no">8 colors</p>
            </div>
            <div class="pro-color-wrapper">
                <div class="pro-color-swatcher owl-carousel">
                    <a href="#" data-pro-img="./assets/images/products/p1.jpg">
                        <span style="background-color: #C1C43F;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p2.jpg">
                        <span style="background-color: #242424;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p3.jpg">
                        <span style="background-color: #0F67C8;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p4.jpg">
                        <span style="background-color:#9E1933;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p5.jpg">
                        <span style="background-color: #DADADA;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p6.jpg">
                        <span style="background-color: #424242;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/pt8.jpg">
                        <span style="background-color: #F01641;"></span>
                    </a>
                    <a href="#" data-pro-img="./assets/images/products/p6.jpg">
                        <span style="background-color: #A2A8AE;"></span>
                    </a>
                </div>
            </div>
            <div class="pro-meta">
                <a class="pro-title" href="#">UA Hustle 5.0 Backpack</a>
                <p class="pro-price">
                    <span>$52.54</span>
                </p>
            </div>
        </div>
    </div>`).appendTo(".dynamicContent .row");

        // Product count on product page
        const proLenght = document.querySelectorAll('.col-lg-4.col-cs-6.p-2').length;
        document.querySelector('.p-count').innerHTML = `${proLenght} Items`;

    }
    scene.update();
    $("#loader").removeClass("active");
}

// add some boxes to start with.
addBoxes(11);



// Change image on hover color swatcher
const products = document.querySelectorAll('.product');

// count product length
const ProCount = products.length;
document.querySelector('.p-count').innerHTML = `${ProCount} Items`;

products.forEach(function (product) {

    const prevURL = product.querySelector('.p-front-img img').getAttribute('src');
    const hoverprevURL = product.querySelector('.p-hover-img img').getAttribute('src');
    const colorAnchor = product.querySelectorAll('.pro-color-swatcher a');

    // Change prev image on mouse leave
    product.addEventListener('mouseleave', function () {
        product.querySelector('.p-front-img img').src = prevURL;
    });

    // Change image on hover
    colorAnchor.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            const url = this.getAttribute('data-pro-img');
            product.querySelector('.p-front-img img').src = url;
            e.stopPropagation();
        });
    });

});