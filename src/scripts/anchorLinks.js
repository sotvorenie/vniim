document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = Array.from(document.querySelectorAll('a[href^="#"]'))
        .filter(link => {
            const href = link.getAttribute('href')
            const text = link.textContent.trim()
            return href && href !== '#' && text.length > 0
        })

    const sections = menuLinks
        .map(link => {
            const id = link.getAttribute('href').substring(1)
            return document.getElementById(id);
        })
        .filter(Boolean)

    const classes = {
        isActive: 'is-active',
    }

    const setActiveLink = (id) => {
        menuLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add(classes.isActive)
            } else {
                link.classList.remove(classes.isActive)
            }
        })
    }

    const observer  = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id)
            }
        }
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    sections.forEach(section => {
        if (section) {
            observer.observe(section)
        }
    })
})