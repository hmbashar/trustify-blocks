document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.trustify-slider').forEach((sliderEl, index) => {
        const autoplay = sliderEl.dataset.autoplay === 'true';
        const speed = parseInt(sliderEl.dataset.speed, 10) || 3000;

        // Wrap InnerBlocks in a swiper container if not already done
        if (!sliderEl.querySelector('.swiper')) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('swiper');

            const swiperWrapper = document.createElement('div');
            swiperWrapper.classList.add('swiper-wrapper');

            // Move all slides inside swiper-wrapper
            sliderEl.querySelectorAll('.trustify-slide').forEach((slide) => {
                slide.classList.add('swiper-slide');
                swiperWrapper.appendChild(slide);
            });

            wrapper.appendChild(swiperWrapper);

            // Optional: Add pagination & navigation if desired
            const pagination = document.createElement('div');
            pagination.classList.add('swiper-pagination');
            wrapper.appendChild(pagination);

            const next = document.createElement('div');
            next.classList.add('swiper-button-next');
            const prev = document.createElement('div');
            prev.classList.add('swiper-button-prev');
            wrapper.appendChild(next);
            wrapper.appendChild(prev);

            sliderEl.appendChild(wrapper);
        }

        // Init Swiper
        new Swiper(sliderEl.querySelector('.swiper'), {
            loop: true,
            autoplay: autoplay ? { delay: speed } : false,
            pagination: {
                el: sliderEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: sliderEl.querySelector('.swiper-button-next'),
                prevEl: sliderEl.querySelector('.swiper-button-prev'),
            },
        });
    });
});