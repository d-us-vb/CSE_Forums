// header collapse animation script
// TODO: disable this on mobile
// TODO: mobile users it appears as a simple button in the lower right.

var header = document.getElementById("header");
var headerCollapsed = false;
var scrollFunc = function() {
    if(window.scrollY > 50 && !header.classList.contains("bubble-header")) {
        header.style.animationName = "header-collapse";
        setTimeout(function() {
            header.classList.add("bubble-header");
            header.classList.remove("full-header");
        }, 495);
    } else if(window.scrollY <= 50 && !header.classList.contains("full-header")) {
        header.style.animationName = "header-expand";
        setTimeout(function() {
            header.classList.add("full-header");
            header.classList.remove("bubble-header");
        }, 495);
    }
}
window.onscroll = scrollFunc;

// TODO: dropdown menu