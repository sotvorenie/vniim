document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const btnArr = document.querySelectorAll("#open-modal");
    const closeBtn = document.querySelectorAll(".modal__close");

    const openModal = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

        modal.classList.add("is-open")
        document.documentElement.classList.add('is-lock')
        modal.setAttribute("aria-hidden", "false");
    }
    const closeModal = () => {
        modal.classList.remove("is-open")
        modal.setAttribute("aria-hidden", "true")

        setTimeout(() => {
            document.documentElement.style.removeProperty('--scrollbar-width')
            document.documentElement.classList.remove('is-lock')
        }, 200)
    }

    btnArr?.forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault()
        openModal()
    }))
    closeBtn?.forEach(btn => btn.addEventListener("click", closeModal))

    globalThis.addEventListener("click", (event) => {
        if (event.target === modal) closeModal()
    })
})