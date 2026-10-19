// Typed.js
var typed = new Typed('#text', {
    strings: ['Géographe🌍', 'Sigiste (SIG)💻🗾.', 'Cartographe🗺️', 'Analyste géospatiale📈'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Affichage des compétences
let compétencesBtn = document.querySelector('.compétences_btn');
let compétencesDet = document.querySelector('.about_bottom');

compétencesBtn.addEventListener('click', () => {
    compétencesDet.classList.toggle('show_compétences');
});

// Sticky navigation
let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove('sticky_nav');
    }
});

// Mixitup pour le filtrage
var mixer = mixitup('.realisation_images');

// Swiper Slider
var swiper = new Swiper('.testSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

// Affichage adapté pour mobile
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_nav');
});

document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show_nav');
    });
});
