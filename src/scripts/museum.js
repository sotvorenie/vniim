import {Swiper} from "swiper";
import {Pagination} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.museum__gallery', {
        modules: [Pagination],
        slidesPerView: 1.15,
        spaceBetween: 10,
        simulateTouch: true,
        pagination: {
            el: '.museum__pagination',
            clickable: false,
        },

        breakpoints: {
            767: {
                simulateTouch: false,
                allowTouchMove: false,
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })
})