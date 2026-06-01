import { Swiper } from "swiper";
import { FreeMode } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/free-mode'

let swiper = null

document.addEventListener('DOMContentLoaded', () => {
    swiper = new Swiper('.events__tabs', {
        modules: [FreeMode],
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            767: {
                spaceBetween: 30,
            },
            1023: {
                spaceBetween: 40,
            }
        }
    })

    const events = document.querySelectorAll('.events__table .accordion');

    if (!events.length || window.innerWidth > 767) return

    events.forEach((el, index) => {
        if (index !== 0) {
            el.classList.remove('is-open', 'is-active');
        }
    })
})