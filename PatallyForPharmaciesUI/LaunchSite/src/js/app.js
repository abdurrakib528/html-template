$(document).ready(function () {
    //*********************************//
    //Patients and Foryou Hover effect//
    //*********************************//
    let screenWidth = $("body").width();
    let tabletWidth = $(".hover-img-tablet").width();
    let x = (screenWidth - tabletWidth) / 5;
    let patientsHeading = $(".hover__figure h2").offset();
    let patienstText = $(".hover__content-info.patients").offset();

    gsap.defaults({
        ease: "power1.inOut",
        duration: 0.5,
    });
    if (screenWidth > 920) {
        $(".app__hover-image.patients").mouseenter(function (e) {
            gsap.to(".hover__content-info.patients", {opacity: 1, visibility: "visible"}, 1.5);
            gsap.to(".hover-img-tablet", {x: x * 3.2});
            gsap.to(".hover-img-mobile", {x: x * 2.8});

            gsap.to(".app__hover-image.patients h2", {x: -(patientsHeading.left - patienstText.left)});
            gsap.to(".app__hover-image.foryou h2", {x: x + 30});

            gsap.to(".overlay-bg-left", {opacity: 1, y: 0});
        });
        $(".app__hover-image.patients").mouseleave(function (e) {
            gsap.to(".hover__content-info.patients", {opacity: 0, visibility: "hidden"}, 1.5);
            gsap.to(".hover-img-tablet", {x: 0});
            gsap.to(".hover-img-mobile", {x: 0});
            gsap.to(".app__hover-image.patients h2", {x: 0});
            gsap.to(".app__hover-image.foryou h2", {x: 0});
            gsap.to(".overlay-bg-left", {opacity: 0, y: 500});
        });

        $(".app__hover-image.foryou").mouseenter(function (e) {
            gsap.to(".hover__content-info.foryou", {opacity: 1, visibility: "visible"}, 1.5);
            gsap.to(".hover-img-tablet", {x: -x * 2.2});
            gsap.to(".hover-img-mobile", {x: -x * 2});

            gsap.to(".app__hover-image.foryou h2", {x: patientsHeading.left - patienstText.left - 20});
            gsap.to(".app__hover-image.patients h2", {x: -x * 2});
            gsap.to(".overlay-bg-right", {opacity: 1, y: 0});
        });

        $(".app__hover-image.foryou").mouseleave(function (e) {
            gsap.to(".hover__content-info.foryou", {opacity: 0, visibility: "hidden"}, 1.5);
            gsap.to(".hover-img-tablet", {x: 0});
            gsap.to(".hover-img-mobile", {x: 0});

            gsap.to(".app__hover-image.foryou h2", {x: 0});
            gsap.to(".app__hover-image.patients h2", {x: 0});
            gsap.to(".overlay-bg-right", {opacity: 0, y: 500});
        });
    }
    //*********************************//
    //FORM SUBMIT THANKS PAGE//
    //*********************************//
    $(".app__signup-form").submit(function (e) {
        e.preventDefault();
        $(".thankyou").css("display", "flex");
        $(".signup").css("display", "none");
    });

    //*********************************//
    //PATIENST SLIDING ANIMATION//
    //*********************************//
    const scenes = gsap.utils.toArray(".scene__figure");
    const header = gsap.utils.toArray(".scene__header");
    const prop = document.querySelector(".scene__prop");
    const textWrapper = document.querySelector(".text-wrapper");
    const height = (scenes.length - 1) * 55 + "%";
    const pinTl = gsap.timeline({
        defaults: {
            ease: "power1.easeInOut",
        },
        scrollTrigger: {
            trigger: ".scenes__items",
            pin: ".app__scenes",
            start: "center center",
            end: "+=" + height,
            scrub: 0.2,
            toggleClass: "active",
        },
    });
    gsap.set(scenes, {position: "absolute", top: 0, right: 0});
    gsap.set(prop, {position: "absolute", top: "14%", right: "3%"});
    var position = 60;
    var delay = 0.75;

    $(scenes).each(function (i, elem) {
        // Scene Enter animations
        i != 0 && pinTl.from(elem, {autoAlpha: 0, x: position}, i);

        // Scene Exit animations
        i != scenes.length - 1 && pinTl.to(elem, {autoAlpha: 0, x: -position}, i + delay);
        // circle animations
        if ((i + 1) % 2 === 1) {
            pinTl.to(
                prop,
                {
                    background: "#00b7d8",
                    xPercent: i === 0 ? 0 : 0,
                    yPercent: i === 0 ? 0 : 0,
                },
                i
            );
        } else {
            pinTl.to(prop, {background: "#FBA501", xPercent: -13, yPercent: 25}, i);
        }
        if (i === 2) {
            pinTl.to(
                prop,
                {
                    background: "#6554C0",
                },
                i
            );
        }
    });

    header.forEach(function (elem, i) {
        let sceneHeader = header[i];
        i != 0 && pinTl.to(".text-wrapper", {y: textWrapper.offsetHeight / 3 - i * sceneHeader.offsetHeight}, i);

        // Scene Enter animations
        i != 0 && pinTl.from(elem, {opacity: (i + 5) / 100}, i);

        // Scene Exit animations
        i != header.length - 1 && pinTl.to(elem, {autoAlpha: 0}, i + delay);
    });

    pinTl.to({}, {duration: 0.3});

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    //*********************************//
    //HEADER STICKY//
    //*********************************//
    gsap.registerPlugin("ScrollTrigger");
    ScrollTrigger.create({
        start: "top top",
        end: "+=250%",
        trigger: ".app__scenes",
        toggleClass: {targets: ".app__header", className: "header-reverse"},
    });

    //*********************************//
    //SECTION COVERT ANIMATION//
    //*********************************//
    // gsap.set(".app__devices", {yPercent: -80, ease: "none"});

    // const uncover = gsap.timeline({paused: true, ease: "none"});
    if (screenWidth > 920) {
        const tlStick = gsap.timeline({paused: true});
        tlStick.from(".app__devices", {
            yPercent: -90,
            ease: "none",
        });
        ScrollTrigger.create({
            trigger: ".app__devices",
            start: "top top",
            end: "+=100%",
            animation: tlStick,
            scrub: true,
        });
    }

    //**************END****************//
});
