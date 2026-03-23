document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search')
    const searchContent = document.querySelector('.search__content')
    const openButtons = document.querySelectorAll('.search-open')
    const closeBtn = document.querySelector('.search__btn.close')
    const clearBtn = document.querySelector('.search__clear')
    const input = document.querySelector('.search__input')

    const classes = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    function openSearch() {
        document.documentElement.classList.add(classes.isLock)
        search.classList.add(classes.isActive)
        searchContent.classList.add(classes.isActive)
    }

    function closeSearch() {
        searchContent.classList.remove(classes.isActive)
        search.classList.remove(classes.isActive)
        document.documentElement.classList.remove(classes.isLock)
    }

    openButtons.forEach(button => {
        button.addEventListener('click', openSearch)
    })

    search.addEventListener('click', (e) => {
        if (e.target === search) closeSearch()
    })

    closeBtn.addEventListener('click', closeSearch)

    const checkValue = (el) => {
        el?.value ? clearBtn.classList.add(classes.isActive) : clearBtn.classList.remove(classes.isActive)
    }
    checkValue(input)
    input.addEventListener('input', (e) => {
        checkValue(e.target)
    })
    clearBtn.addEventListener('click', () => {
        input.value = ''
        clearBtn.classList.remove(classes.isActive)
    })
})