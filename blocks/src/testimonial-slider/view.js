import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.trustify-slider .swiper').forEach((sliderEl) => {
        const parentEl = sliderEl.closest('.trustify-slider');
        const autoplay = parentEl.dataset.autoplay === 'true';
        const speed = parseInt(parentEl.dataset.speed, 10) || 3000;

        new Swiper(sliderEl, {
            loop: true,
            autoplay: autoplay ? { delay: speed } : false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
});