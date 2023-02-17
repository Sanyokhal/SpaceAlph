let vh = (document.documentElement.clientHeight / 100) * 10;
let fullMenu = document.querySelector('.full_menu');
let closeButton = document.querySelector('.close_button');
let openButton = document.querySelector('.open_button');
let previous = document.getElementById('next');
let next = document.getElementById('previous');
let learnMore = document.getElementById('spaceAlpha');
window.onscroll = function showHeader() {
    var header = document.querySelector('.menu');
    if (window.pageYOffset > vh) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

function closeMenu() {
    fullMenu.classList.add('closed');
    fullMenu.classList.remove('opened');
    next.classList.remove('unavailable');
    next.classList.add('available');
    previous.classList.remove('unavailable');
    previous.classList.add('available');
}

function openMenu() {
    if (window.innerWidth <= 768) {
        fullMenu.classList.remove('closed');
        fullMenu.classList.add('opened');
        next.classList.add('unavailable');
        next.classList.remove('available');
        previous.classList.add('unavailable');
        previous.classList.remove('available');
    }
}
closeButton.addEventListener("click", () => closeMenu());
openButton.addEventListener("click", () => openMenu());
if (window.innerWidth > 768) {
    closeMenu();
}
