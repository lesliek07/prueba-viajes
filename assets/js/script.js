//código jquery para scrollspy
// $(document).ready(function() {
//     $('body').scrollspy({
//         target: '.navbar',
//         offset: 50
//     });
// });


// código para smooth scroll
const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
// código para scrollSpy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarSupportedContent ',
    offset: 50
});

// tooltips boostrap 5.1
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});