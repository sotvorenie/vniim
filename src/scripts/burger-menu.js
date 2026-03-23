document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const toggleBtn = document.querySelector('.header__open-menu')

    if (!burgerMenu || !toggleBtn) return

    const classes = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    toggleBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle(classes.isActive)

        const isActive = burgerMenu.classList.contains('is-active')

        toggleBtn.classList.toggle(classes.isActive, isActive)
        document.documentElement.classList.toggle(classes.isLock, isActive)
    })
})