import { Swiper } from "swiper";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', () => {
    const counterEl = document.querySelector('.presentation__counter');

    const thumbsSwiper = new Swiper('.presentation__mini-slider', {
        modules: [FreeMode, Thumbs],
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                slidesPerView: 4.2,
                spaceBetween: 21,
            }
        }
    });

    const mainSwiper = new Swiper('.presentation__slider', {
        modules: [Navigation, Thumbs],
        spaceBetween: 10,
        navigation: {
            nextEl: '.presentation__next',
            prevEl: '.presentation__prev',
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
        on: {
            init: function () {
                if (counterEl) {
                    counterEl.textContent = `${this.activeIndex + 1}/${this.slides.length}`;
                }
            },
            slideChange: function () {
                if (counterEl) {
                    counterEl.textContent = `${this.activeIndex + 1}/${this.slides.length}`;
                }
            }
        }
    });
});