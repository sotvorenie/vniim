import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector('.form__textarea textarea')
    const textareaCounter = document.querySelector('.form__textarea span')

    const telInput = document.querySelector('.form__input.tel');

    textarea.addEventListener('input', (e) => {
        textareaCounter.textContent = `${e.target.value?.length}/${e.target.maxLength}`
    })

    const tel = new Inputmask({
        mask: "+7 (999) 999 - 99 - 99",
        showMaskOnHover: false}
    ).mask(telInput)
})