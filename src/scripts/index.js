import {Swiper} from "swiper";
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'


document.addEventListener('DOMContentLoaded', () => {
    const gallerySwiper = new Swiper('.index_gallery__list', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,

        navigation: {
            nextEl: '.index_gallery__btn.next',
            prevEl: '.index_gallery__btn.prev',
        },

        pagination: {
            el: '.index_gallery__pagination',
            clickable: false,
        },

        breakpoints: {
            767: {
                simulateTouch: false,
                allowTouchMove: false,
            }
        }
    })

    const newsSwiper = new Swiper('.index_news__list', {
        modules: [Pagination],
        slidesPerView: 1.2,
        spaceBetween: 10,
        simulateTouch: true,

        pagination: {
            el: '.index_news__pagination',
            clickable: false,
        },

        breakpoints: {
            767: {
                spaceBetween: 15,
                slidesPerView: 2.25,
            },
            1023: {
                spaceBetween: 20,
                slidesPerView: 3,
            }
        }
    })
})