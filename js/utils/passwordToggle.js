export const passwordToggle = (selector) => {
	let container = null;

	if (typeof selector === 'string') {
		container = document.querySelector(selector);
	} else if (selector instanceof HTMLElement) {
		container = selector;
	}

	if (!container) return;

	if (container.dataset.passwordToggleInitialized) return;
	container.dataset.passwordToggleInitialized = 'true';

	container.addEventListener('click', (e) => {
		const toggle = e.target.closest('.toggle-password');
		if (!toggle) return;

		e.preventDefault();
		e.stopPropagation();

		const wrapper = toggle.closest('.password-generator__wrapper');
		const input = wrapper?.querySelector('input');
		if (!input) return;

		const eyeOpen = toggle.querySelector('.eye-open');
		const eyeClosed = toggle.querySelector('.eye-closed');

		const isHidden = input.type === 'password';

		input.type = isHidden ? 'text' : 'password';

		toggle.title = isHidden ? 'Скрыть пароль' : 'Показать пароль';

		if (eyeOpen) eyeOpen.style.display = isHidden ? 'block' : 'none';
		if (eyeClosed) eyeClosed.style.display = isHidden ? 'none' : 'block';
	});
};
