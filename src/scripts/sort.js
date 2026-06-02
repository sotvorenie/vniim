document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.select-wrapper').forEach(wrapper => {
        const select = wrapper.querySelector('.custom-select');
        select.addEventListener('click', () => {
            wrapper.classList.toggle('is-open');
        });
        select.addEventListener('blur', () => {
            wrapper.classList.remove('is-open');
        });
        select.addEventListener('change', (e) => {
            wrapper.classList.remove('is-open');
            e.target.blur();
        });
    });
});