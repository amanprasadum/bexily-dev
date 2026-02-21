/* ========================================
   SWIPER JS - PREMIUM EFFECTS COLLECTION
======================================== */

/* ========================================
   OPTION 1: LUXURY PARALLAX DEPTH EFFECT
======================================== */
// const projectSwiper = new Swiper('.projectSwiper', {
//     loop: true,
//     speed: 1400,
//     effect: 'creative',
//     grabCursor: true,
//     creativeEffect: {
//         prev: {
//             shadow: true,
//             translate: ['-100%', 0, -800],
//             rotate: [0, 20, 0],
//             opacity: 0,
//         },
//         next: {
//             shadow: true,
//             translate: ['100%', 0, -800],
//             rotate: [0, -20, 0],
//             opacity: 0,
//         },
//     },
//     autoplay: {
//         delay: 4500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
//     parallax: true,
// });


/* ========================================
   OPTION 3: 3D CUBE ROTATION (Premium)
======================================== */
// const projectSwiper = new Swiper('.projectSwiper', {
//     loop: true,
//     speed: 1200,
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 40,
//         shadowScale: 0.90,
//     },
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });



/* ========================================
   OPTION 5: MODERN CARDS STACK EFFECT
======================================== */
// const projectSwiper = new Swiper('.projectSwiper', {
//     loop: true,
//     speed: 1100,
//     effect: 'cards',
//     grabCursor: true,
//     cardsEffect: {
//         perSlideOffset: 10,
//         perSlideRotate: 3,
//         rotate: true,
//         slideShadows: true,
//     },
//     autoplay: {
//         delay: 4200,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
// });

/* ========================================
   OPTION 6: PREMIUM COVERFLOW GALLERY
======================================== */
const projectSwiper = new Swiper('.projectSwiper', {
    loop: true,
    speed: 1300,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
