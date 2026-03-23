document.addEventListener('DOMContentLoaded', () => {
    const sectionMenuAccordion = document.querySelector('.section__menu-accordion')
    const sectionMenuHidden = document.querySelector('.section__menu-accordion__hidden')
    if (!sectionMenuAccordion || !sectionMenuHidden) return

    const classes = {
        accordion: 'accordion',
        accordionHidden: 'accordion__hidden',
    }

    const set = () => {
        sectionMenuHidden.classList.add(classes.accordionHidden)
        sectionMenuAccordion.classList.add(classes.accordion)
    }

    const remove = () => {
        sectionMenuHidden.classList.remove(classes.accordionHidden)
        sectionMenuAccordion.classList.remove(classes.accordion)
    }

    const init = () => {
        window.innerWidth <= 1280 ? set() : remove()
    }

    init()

    window.addEventListener('resize', init)
})