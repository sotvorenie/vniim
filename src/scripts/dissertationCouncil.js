document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.thesis__tab')

    const intelligence = document.querySelector('.thesis__intelligence')
    const annotation = document.querySelector('.thesis__annotation')
    const files = document.querySelector('.thesis__files')

    if (!tabs || !intelligence || !annotation || !files) return

    const sectionArr = [intelligence, annotation, files]

    const classes = {
        isActive: 'is-active',
        visuallyHidden: 'visually-hidden',
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove(classes.isActive))
            tab.classList.add(classes.isActive)

            const sectionName = tab.getAttribute('data-tab')
            if (sectionName) {
                sectionArr.forEach(section => section.classList?.add(classes.visuallyHidden))
                sectionArr.find(section => section.getAttribute('data-section') === sectionName)?.classList.remove(classes.visuallyHidden)
            }
        })
    })
})