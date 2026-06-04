import { Swiper } from "swiper";
import { Pagination, Thumbs, FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', () => {
    const thumbsSwiper = new Swiper('.services-detail__mini-slider', {
        modules: [FreeMode, Thumbs],
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: { direction: 'vertical' },
            1024: { direction: 'horizontal' }
        }
    });

    new Swiper('.services-detail__slider', {
        modules: [Pagination, Thumbs],
        spaceBetween: 10,
        direction: 'horizontal',
        pagination: {
            el: '.services-detail__pagination',
            clickable: false,
        },
        thumbs: {
            swiper: thumbsSwiper,
        }
    });

    const tabs = document.querySelectorAll('.services-detail__bottom .events__tab')
    const infoBlocks = document.querySelectorAll('.services-detail__info')
    const activeClass = 'is-active';

    if (!tabs?.length || !infoBlocks?.length) return

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove(activeClass))
            infoBlocks.forEach(b => b.classList.remove(activeClass))
            tab.classList.add(activeClass)
            infoBlocks[index].classList.add(activeClass)
        })
    })
});