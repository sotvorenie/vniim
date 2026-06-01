import { Swiper } from "swiper";

import 'swiper/css'

let swiper = null

document.addEventListener('DOMContentLoaded', () => {
    swiper = new Swiper('.cluster-members__sort', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        breakpoints: {
            767: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1023: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }
    })
})