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



/* ========================================
 CSS FOR ALL EFFECTS
======================================== */
/*
.projectSwiper {
    width: 100%;
    height: 600px;
    overflow: visible;
    padding: 50px 0;
}

.swiper-slide {
    border-radius: 24px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.swiper-slide-active {
    transform: scale(1.05);
    z-index: 10;
    box-shadow: 0 35px 90px rgba(0, 0, 0, 0.3);
}

// /* Luxury Pagination Styles */
// .swiper-pagination-bullet {
//     width: 14px;
//     height: 14px;
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     opacity: 0.4;
//     transition: all 0.4s ease;
//     border: 2px solid transparent;
// }

// .swiper-pagination-bullet-active {
//     width: 45px;
//     border-radius: 8px;
//     opacity: 1;
//     border-color: rgba(255, 255, 255, 0.5);
// }

// /* Progress Bar Style */
// .swiper-pagination-progressbar {
//     background: rgba(255, 255, 255, 0.2);
// }

// .swiper-pagination-progressbar-fill {
//     background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
// }

// /* Fraction Pagination */
// .swiper-pagination-fraction {
//     font-size: 24px;
//     font-weight: 700;
//     color: #fff;
//     text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// }

// /* Navigation Buttons */
// .swiper-button-next,
// .swiper-button-prev {
//     width: 60px;
//     height: 60px;
//     background: rgba(255, 255, 255, 0.95);
//     border-radius: 50%;
//     color: #667eea;
//     transition: all 0.4s ease;
//     backdrop-filter: blur(10px);
// }

// .swiper-button-next:hover,
// .swiper-button-prev:hover {
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     color: white;
//     transform: scale(1.15);
//     box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
// }

// .swiper-button-next::after,
// .swiper-button-prev::after {
//     font-size: 20px;
//     font-weight: 900;
// }

// /* For Coverflow - Auto width slides */
// .swiper-slide {
//     width: 70%;
// }

// /* Vertical Swiper */
// .projectSwiper.vertical {
//     height: 100vh;
// }

// /* Glass Morphism Effect */
// .swiper-slide.glass {
//     background: rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(20px);
//     border: 1px solid rgba(255, 255, 255, 0.2);
// }
// */