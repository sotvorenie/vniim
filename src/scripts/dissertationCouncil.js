document.addEventListener('DOMContentLoaded', () => {
    const dissertations = document.querySelectorAll('.thesis__content');

    if (!dissertations?.length) return;

    dissertations.forEach(dissertation => {
        const tabs = dissertation.querySelectorAll('.thesis__tab')

        if (!tabs) return

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
                    const section = dissertation.querySelector(`[data-section="${sectionName}"]`)
                    dissertation.querySelectorAll('[data-section]').forEach(s => s.classList?.add(classes.visuallyHidden))
                    section.classList.remove(classes.visuallyHidden)
                }
            })
        })
    })
})