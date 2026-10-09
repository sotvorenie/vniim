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

async function startClock() {
    const timeBlock = document.querySelector('.header__time-info');
    const dateBlock = document.querySelector('.header__date');
    const weekDayBlock = document.querySelector('.header__week-day');

    if (!timeBlock || !dateBlock || !weekDayBlock) return;

    const TIME_URL = 'https://www.vniim.ru/ntp/time.php';

    const weekDays = {
        ru: [
            'Воскресенье', 'Понедельник', 'Вторник',
            'Среда', 'Четверг', 'Пятница', 'Суббота'
        ],
        en: [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ]
    };

    function getCurrentLang() {
        return window.location.pathname.includes('/en/') ? 'en' : 'ru';
    }

    function setPadStart(num, size = 2) {
        return String(num).padStart(size, '0');
    }

    function updateDate(now) {
        dateBlock.textContent =
            `${setPadStart(now.getDate())}.` +
            `${setPadStart(now.getMonth() + 1)}.` +
            `${now.getFullYear()}`;

        weekDayBlock.textContent =
            weekDays[getCurrentLang()][now.getDay()];
    }

    let baseTime;
    let basePerformance;

    updateDate(new Date())

    try {
        const requestStart = performance.now();

        const response = await fetch(TIME_URL, {
            cache: 'no-store'
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const requestEnd = performance.now();

        if (typeof data.timestamp !== 'number' ||
            !Number.isFinite(data.timestamp)) {
            throw new Error('Некорректный timestamp');
        }

        baseTime = data.timestamp * 1000 + (requestEnd - requestStart) / 2;
        basePerformance = requestEnd;
    } catch (error) {
        console.error('Ошибка получения времени:', error);
        baseTime = Date.now();
        basePerformance = performance.now();
    }

    function render() {
        const timestamp = baseTime + performance.now() - basePerformance;
        const now = new Date(timestamp);
        const milliseconds = Math.floor(((timestamp % 1000) + 1000) % 1000);

        timeBlock.textContent =
            `${setPadStart(now.getHours())} : ` +
            `${setPadStart(now.getMinutes())} : ` +
            `${setPadStart(now.getSeconds())}, ` +
            `${setPadStart(milliseconds, 3)}`;
    }

    render();
    setInterval(render, 30);
}