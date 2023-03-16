// ==UserScript==
// @name     ComfortableStepik
// @version  1
// @grant    none
// ==/UserScript==

setInterval(function() {
    let ele = document.querySelector(".lesson__next-btn");
    if (!ele.classList.contains("white")) {
        ele.click();
    }
    document.querySelector(".number-quiz__input").focus();
}, 500);