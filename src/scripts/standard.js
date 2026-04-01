document.addEventListener('DOMContentLoaded', () => {
    const paginationBullets = document.querySelectorAll('.standard__pagination span')
    const table = document.querySelector('.standard__table-wrapper')

    if (!paginationBullets?.length || ! table) return

    const rect = table.getBoundingClientRect()

    const classes = {
        isActive: 'is-active'
    }

    const clearAllIsActive = () => {
        paginationBullets.forEach(bullet => {
            bullet.classList.remove(classes.isActive)
        })
    }

    table.addEventListener('scroll', () => {
        const progress = table.scrollLeft / (table.scrollWidth - rect.width)

        clearAllIsActive()

        if (progress <= 0.33) {
            paginationBullets[0].classList.add(classes.isActive)
        } else if (progress >= 0.33 && progress <= 0.66) {
            paginationBullets[1].classList.add(classes.isActive)
        } else {
            paginationBullets[2].classList.add(classes.isActive)
        }
    })
})