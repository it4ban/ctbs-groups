export const generateEmail = (selector, length = 8) => {
	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let username = '';

	for (let i = 0; i < length; i++) {
		username += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	const email = `${username}@elc.ctbs.ru`;

	const input = document.querySelector(selector);
	if (input) {
		input.value = email;
	} else {
		console.warn('Поле не найдено:', selector);
	}

	return email;
};
