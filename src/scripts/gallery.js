import {Swiper} from "swiper";
import {Navigation, Pagination} from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.gallery__slider', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,

        navigation: {
            nextEl: '.gallery__btn.next',
            prevEl: '.gallery__btn.prev',
        },

        pagination: {
            el: '.gallery__pagination',
            clickable: false,
        },

        breakpoints: {
            1023: {
                simulateTouch: false,
                allowTouchMove: false,
            }
        }
    })
})