import {Swiper} from "swiper";
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

let swiper = null

const initSwiper = () => {
    if (window.innerWidth <= 767 && !swiper) {
        swiper = new Swiper('.memories_presentation__gallery', {
            modules: [Pagination],
            slidesPerView: 1.15,
            spaceBetween: 10,
            pagination: {
                el: '.memories_presentation__pagination',
                clickable: false,
            }
        })
    }
    if (window.innerWidth > 767 && swiper) {
        swiper.destroy(true, true)
        swiper = null
    }
}
initSwiper()
window.addEventListener('resize', initSwiper)
