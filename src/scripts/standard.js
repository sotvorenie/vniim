document.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('.standard__table-wrapper')

    if (!tables?.length) return

    const classes = {
        isActive: 'is-active'
    }

    tables.forEach(table => {
        const pagination = table?.parentNode?.querySelector('.standard__pagination')

        if (!pagination) return

        pagination.innerHTML = ''

        const trs = table.querySelectorAll('thead th')
        trs.forEach((tr) => {
            const bullet = document.createElement('span')
            pagination.appendChild(bullet)
        })

        const paginationBullets = pagination.querySelectorAll('span')

        if (!paginationBullets?.length) return

        paginationBullets[0].classList.add(classes.isActive)

        const rect = table.getBoundingClientRect()

        table.addEventListener('scroll', () => {
            const progress = table.scrollLeft / (table.scrollWidth - rect.width)
            if (progress <= 0) return

            let activeIndex = Math.round(progress * (paginationBullets.length - 1))

            activeIndex = Math.max(0, Math.min(activeIndex, paginationBullets.length - 1))

            paginationBullets.forEach((bullet, index) => {
                bullet.classList.toggle(classes.isActive, index === activeIndex)
            })
        })
    })
})