document.addEventListener("DOMContentLoaded", function() {
    const navBtn = document.querySelector('.js-nav-btn'),
        menu = document.querySelector('.js-nav'),
        classOpenMenu = 'nav--open'

    navBtn.addEventListener('click', function () {
        menu.classList.toggle(classOpenMenu)
    })

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav') || !event.target.classList.includes('.nav')) {
            menu.classList.remove(classOpenMenu)
        }
    })
});