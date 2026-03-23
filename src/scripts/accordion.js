document.addEventListener('DOMContentLoaded', () => {
    const classes = {
        isActive: 'is-active',
    }

    document.querySelectorAll('.accordion.is-open')?.forEach(accordion => {
        accordion.classList.add(classes.isActive)
    })

    document.querySelectorAll('.accordion__header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle(classes.isActive)
        })
    })
})