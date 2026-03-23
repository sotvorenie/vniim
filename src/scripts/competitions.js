document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.competitions__item.accordion')
    if (!accordions.length) return

    const updatePadding = () => {
        accordions.forEach(accordion => {
            const number = accordion.querySelector('.competitions__number')
            const leftElement = accordion.querySelector('.competitions__left')
            const content = accordion.querySelector('.accordion__hidden-wrapper')

            if (!number || !leftElement || !content) return

            const numberWidth = number.offsetWidth
            const gap = parseInt(getComputedStyle(leftElement).gap) || 0
            const padding = numberWidth + gap

            content.style.paddingLeft = `${padding}px`
        })
    }

    const debounce = (fn, delay = 100) => {
        let timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => fn.apply(this, args), delay)
        }
    }

    const handleResize = debounce(updatePadding, 100)

    updatePadding()
    window.addEventListener('resize', handleResize)
})