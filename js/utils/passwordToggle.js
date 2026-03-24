export const passwordToggle = (container) => {
    const toggles = container.querySelectorAll('.toggle-password');
    toggles.forEach((selector) => {
        selector.addEventListener('click', () => {
            const wrapper = selector.closest('.password-generator__wrapper');
            const input = wrapper.querySelector('input');
            const eyeOpen = selector.querySelector('.eye-open');
            const eyeClosed = selector.querySelector('.eye-closed');

            if (input.type === 'password') {
                input.type = 'text';
                selector.title = "Скрыть пароль";
                if (eyeOpen) eyeOpen.style.display = "block";
                if (eyeClosed) eyeClosed.style.display = "none";
            } else {
                input.type = 'password';
                selector.title = "Показать пароль";
                if (eyeOpen) eyeOpen.style.display = "none";
                if (eyeClosed) eyeClosed.style.display = "block";
            }
        });
    });
}