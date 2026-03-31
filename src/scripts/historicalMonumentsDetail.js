import {Swiper} from "swiper";
import {Pagination} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
    const swiperBlocks = document.querySelectorAll('.historical-monuments-detail__img-block .swiper')

    swiperBlocks.forEach((block, index) => {
        const swiper = new Swiper(block, {
            modules: [Pagination],
            slidesPerView: 1.15,
            spaceBetween: 10,
            simulateTouch: true,

            pagination: {
                el: block.closest('.historical-monuments-detail__img-block')
                    .querySelector('.historical-monuments-detail__pagination'),
                clickable: false,
            },

            breakpoints: {
                767: {
                    simulateTouch: false,
                    allowTouchMove: false,
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        })
    })
})