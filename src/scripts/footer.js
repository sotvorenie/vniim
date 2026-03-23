document.addEventListener('DOMContentLoaded', () => {
    const footerItems = document.querySelectorAll('.footer__item')

    footerItems.forEach(item => {
        const title = item.querySelector('.footer__title')

        title.addEventListener('click', () => {
            if (window.innerWidth < 890) {
                item.classList.toggle('is-active')
            }
        })
    })

    const handleResize = () => {
        const isMobile = window.innerWidth < 890;

        footerItems.forEach(item => {
            const links = item.querySelector('.footer__links')
            const title = item.querySelector('.footer__title')

            if (isMobile) {
                item.classList.add('accordion');
                links.classList.add('accordion__hidden')
                title.classList.add('accordion__header')
            } else {
                item.classList.remove('accordion', 'is-active')
                links.classList.remove('accordion__hidden')
                title.classList.remove('accordion__header')
            }
        })
    }

    handleResize();
    window.addEventListener('resize', handleResize)
})