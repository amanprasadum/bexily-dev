/* ========================================
   SWIPER JS INITIALIZATION - LUXURY EDITION
======================================== */
// Project Swiper Slider with Modern Creative Effect
// const projectSwiper = new Swiper('.projectSwiper', {
//     // Basic Settings
//     loop: true,
//     speed: 1200,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//     },
    
//     // Modern Creative Effect - Luxury Slide Transitions
//     effect: 'creative',
//     creativeEffect: {
//         prev: {
//             shadow: true,
//             translate: ['-120%', 0, -500],
//             rotate: [0, 0, -15],
//             opacity: 0.5,
//         },
//         next: {
//             shadow: true,
//             translate: ['120%', 0, -500],
//             rotate: [0, 0, 15],
//             opacity: 0.5,
//         },
//     },
    
//     // Pagination with Custom Styling
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//         dynamicMainBullets: 3,
//     },
    
//     // Navigation Arrows (Optional - add if needed)
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
    
//     // Smooth transitions
//     slidesPerView: 1,
//     spaceBetween: 0,
    
//     // Lazy loading for performance
//     lazy: {
//         loadPrevNext: true,
//         loadPrevNextAmount: 2,
//     },
    
//     // Grab Cursor
//     grabCursor: true,
    
//     // Keyboard Control
//     keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//     },
    
//     // Mouse wheel control (optional)
//     mousewheel: {
//         forceToAxis: true,
//         sensitivity: 1,
//         releaseOnEdges: true,
//     },
    
//     // Parallax effect (add data-swiper-parallax to elements)
//     parallax: true,
    
//     // Breakpoints for responsive design
//     breakpoints: {
//         320: {
//             speed: 1000,
//         },
//         768: {
//             speed: 1200,
//         },
//         1024: {
//             speed: 1400,
//         },
//     },
// });

/* ========================================
   ALTERNATIVE LUXURY EFFECTS
======================================== */


// OPTION 1: PREMIUM COVERFLOW EFFECT
const projectSwiper = new Swiper('.projectSwiper', {
    loop: true,
    speed: 1000,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
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
 
// OPTION 2: ELEGANT FADE WITH SCALE
// const projectSwiper = new Swiper('.projectSwiper', {
//     loop: true,
//     speed: 1500,
//     effect: 'creative',
//     creativeEffect: {
//         prev: {
//             shadow: true,
//             translate: [0, 0, -400],
//             scale: 0.8,
//             opacity: 0,
//         },
//         next: {
//             shadow: true,
//             translate: [0, 0, -400],
//             scale: 0.8,
//             opacity: 0,
//         },
//     },
//     autoplay: {
//         delay: 4500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
// });

// OPTION 3: ULTRA SMOOTH CARDS EFFECT
// const projectSwiper = new Swiper('.projectSwiper', {
//     loop: true,
//     speed: 1300,
//     effect: 'cards',
//     grabCursor: true,
//     cardsEffect: {
//         perSlideOffset: 8,
//         perSlideRotate: 2,
//         rotate: true,
//         slideShadows: true,
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
  my CUSTOM CSS
======================================== */
/*
.projectSwiper {
    overflow: visible !important;
    padding: 40px 0;
}

.swiper-slide {
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.swiper-slide-active {
    transform: scale(1.02);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
    z-index: 10;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #d4af37;
    opacity: 0.5;
    transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
    width: 40px;
    border-radius: 6px;
    opacity: 1;
    background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%);
}

.swiper-button-next,
.swiper-button-prev {
    color: #d4af37;
    background: rgba(255, 255, 255, 0.9);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background: #d4af37;
    color: white;
    transform: scale(1.1);
}
*/