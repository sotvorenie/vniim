document.addEventListener('DOMContentLoaded', () => {
    const linksBlock = document.querySelector('.header__links');
    const bottomInnerBlock = document.querySelector('.header__bottom-inner');
    const headerItems = document.querySelectorAll('.header__item');
    const linksLists = linksBlock.querySelectorAll('.header__links-list');

    const classes = {
        isActive: 'is-active',
        linksColumn: 'header__links-column',
        isFullLine: 'is-full-line',
    };

    linksLists.forEach(list => {
        const items = Array.from(list.querySelectorAll('.header__links-item'))
        const itemsCount = items.length

        if (itemsCount > 0) {
            list.innerHTML = ''

            let columns = 1
            if (itemsCount > 3 && itemsCount <= 6) columns = 2
            if (itemsCount > 6) columns = 3

            let baseRows, extraRows
            if (itemsCount <= 9) {
                baseRows = 3
                extraRows = 0
            } else {
                baseRows = Math.floor(itemsCount / 3)
                extraRows = itemsCount % 3
            }

            let currentIndex = 0
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('ul')
                column.classList.add(classes.linksColumn)
                if (columns === 1) column.classList.add(classes.isFullLine)

                let rowsCount
                if (extraRows === 0) {
                    rowsCount = Math.min(baseRows, itemsCount - currentIndex)
                } else {
                    rowsCount = baseRows + (extraRows > 0 ? 1 : 0)
                    extraRows--
                }

                for (let c = 0; c < rowsCount; c++) {
                    if (items[currentIndex]) {
                        column.appendChild(items[currentIndex])
                        currentIndex++
                    }
                }

                list.appendChild(column)
            }
        }
    });

    headerItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const value = item.dataset?.value
            if (value) {
                linksLists.forEach(list => list.classList.remove(classes.isActive))

                document.querySelector(`.header__links-list.header-${value}`).classList.add(classes.isActive)
                linksBlock.classList.add(classes.isActive)
            }
        })
    });

    bottomInnerBlock.addEventListener('mouseleave', () => {
        linksBlock.classList.remove(classes.isActive);
    });

    startClock();

    const select = document.querySelector('.header__select');
    if (select) {
        function updateOptions() {
            const isMobile = window.innerWidth < 1024;
            const options = select.options;
            Object.values(options).forEach(option => option.text = isMobile ? option.dataset.short : option.dataset.full)
        }
        updateOptions();
        window.addEventListener('resize', updateOptions);
    }
});

function startClock() {

    const timeBlock = document.querySelector('.header__time-info')
    const dateBlock = document.querySelector('.header__date')
    const weekDayBlock = document.querySelector('.header__week-day')

    if (!timeBlock || !dateBlock || !weekDayBlock) return

    const weekDays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    let baseTime = new Date()

    function setPadStart(num, size = 2) {
        return String(num).padStart(size, '0')
    }

    function updateDate() {
        const now = new Date()

        const day = setPadStart(now.getDate())
        const month = setPadStart(now.getMonth() + 1)
        const year = now.getFullYear()

        dateBlock.textContent = `${day}.${month}.${year}`
        weekDayBlock.textContent = weekDays[now.getDay()]
    }

    let lastUpdate = 0
    const FPS = 30
    const interval = 900 / FPS

    function render(timestamp) {
        if (timestamp - lastUpdate >= interval) {
            lastUpdate = timestamp

            const now = new Date()
            const diff = now - baseTime

            const ms = diff % 1000 // БЕЗ округления

            const hours = setPadStart(now.getHours())
            const minutes = setPadStart(now.getMinutes())
            const seconds = setPadStart(now.getSeconds())
            const milliseconds = setPadStart(ms, 3)

            timeBlock.textContent = `${hours} : ${minutes} : ${seconds}, ${milliseconds}`
        }

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)

    setInterval(render, 100)

    setInterval(() => {
        baseTime = new Date()
    }, 1000)

    updateDate()
    setInterval(updateDate, 60000)

    render()
}