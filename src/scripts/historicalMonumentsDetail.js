import {Swiper} from "swiper";
import {Pagination} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector('.historical-monuments-detail__menu-list')
    const menuLinks = document.querySelectorAll('.historical-monuments-detail__menu-link')

    menuLinks.forEach(link => {
        const menuLink = document.createElement('a')
        menuLink.href = `#${link.id}`
        menuLink.classList.add('section__menu-link')
        menuLink.textContent = link.textContent

        const menuItem = document.createElement('li')
        menuItem.classList.add('section__menu-links-item')
        menuItem.appendChild(menuLink)

        menuList.appendChild(menuItem)
    })

    const swiperBlocks = document.querySelectorAll('.historical-monuments-detail .swiper')

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