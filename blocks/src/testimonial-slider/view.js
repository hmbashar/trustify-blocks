// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.trustify-slider').forEach((sliderEl) => {
        const autoplay = sliderEl.dataset.autoplay === 'true';
        const speed = parseInt(sliderEl.dataset.speed, 10) || 3000;

        new Swiper(sliderEl.querySelector('.swiper'), {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: autoplay ? { delay: speed } : false,
            pagination: {
                el: sliderEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: sliderEl.querySelector('.swiper-button-next'),
                prevEl: sliderEl.querySelector('.swiper-button-prev'),
            },            
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView:2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    });
});