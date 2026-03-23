import {Swiper} from "swiper";
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.standards__links', {
        modules: [FreeMode],
        freeMode: true,
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
})