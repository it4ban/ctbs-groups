export const generatePassword = (selector, length = 10) => {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
	let password = '';

	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	const input = document.querySelector(selector);
	if (input) {
		input.value = password;
	} else {
		console.warn('Поле не найдено:', selector);
	}

	return password;
};
