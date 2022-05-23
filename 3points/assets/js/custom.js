"use strict";

// ******* //
// **** NAVIGATION
// ******* //
const navigation = document.querySelector("[data-navigation]");
const navigationToggleBtn = document.querySelector("[navigation-toggle-btn]");
navigationToggleBtn.addEventListener("click", function () {
    this.classList.toggle("is-open");
    navigation.classList.toggle("is-active");
});

// ******* //
// **** CHANGING BACKGROUND COLOR
// ******* //

// window.addEventListener("load", function () {
//     const scene = Math.random() < 0.5 ? "palerose" : "red";
//     document.body.classList.add("bg-" + scene);
// });
