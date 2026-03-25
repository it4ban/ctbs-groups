const selectOptions = [
	{
		element: '#select-program',
		options: {
			searchEnabled: true,
			placeholder: true,
			searchPlaceholderValue: 'Поиск...',
			noResultsText: 'Программа не найдена',
			placeholderValue: 'Выберите группу',
			shouldSort: false,
			searchResultLimit: 5,
			itemSelectText: 'Нажмите, чтобы выбрать',
			position: 'bottom',
		},
	},
	{
		element: '#select-group',
		options: {
			searchEnabled: true,
			placeholder: true,
			searchPlaceholderValue: 'Поиск...',
			noResultsText: 'Статус не найден',
			placeholderValue: 'Выберите статус',
			shouldSort: false,
			searchResultLimit: 5,
			itemSelectText: 'Нажмите, чтобы выбрать',
			position: 'bottom',
		},
	},
];

const groupFormValidators = {
	date_create: {
		presence: { allowEmpty: false, message: '^Введите дату начала' },
		format: {
			pattern: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4} (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
			message: '^Формат: дд.мм.гггг чч:мм:сс',
		},
	},
	date_end: {
		presence: { allowEmpty: false, message: '^Введите дату конца' },
		format: {
			pattern: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4} (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
			message: '^Формат: дд.мм.гггг чч:мм:сс',
		},
	},
	status: {
		presence: {
			allowEmpty: false,
			message: '^Поле статуса не может быть пустым',
		},
	},
	full_name: {
		presence: { allowEmpty: false, message: '^ФИО не может быть пустым' },
		length: { minimum: 3, message: '^ФИО должно быть минимум 3 символа' },
	},
	email: {
		presence: { allowEmpty: false, message: 'не может быть пустым' },
		email: { message: '^Неверный формат email' },
	},
	password: {
		presence: { allowEmpty: false, message: '^Пароль не может быть пустым' },
		length: { minimum: 6, message: '^Пароль должно быть минимум 6 символов' },
	},
};

const groupModalValidators = {
	full_name: {
		presence: { allowEmpty: false, message: '^ФИО не может быть пустым' },
		length: { minimum: 3, message: '^ФИО должно быть минимум 3 символа' },
	},
	email: {
		presence: { allowEmpty: false, message: 'не может быть пустым' },
		email: { message: '^Неверный формат email' },
	},
	password: {
		presence: { allowEmpty: false, message: '^Пароль не может быть пустым' },
		length: { minimum: 6, message: '^Пароль должно быть минимум 6 символов' },
	},
};

const modalSettings = [
	{
		button: '.accent-form__add-teacher',
		passwordField: 'password',
		modal: '.accent-modal--teacher',
	},
];

const timeMasksOptions = [
	{
		element: '#date-start',
		mask: '99.99.9999 99:99:99',
		options: {
			placeholder: 'дд.мм.гггг чч:мм:сс',
			showMaskOnHover: false,
			clearMaskOnLostFocus: false,
			removeMaskOnSubmit: false,
			greedy: true,
			autoUnmask: true,
		},
	},
	{
		element: '#date-end',
		mask: '99.99.9999 99:99:99',
		options: {
			placeholder: 'дд.мм.гггг чч:мм:сс',
			showMaskOnHover: false,
			clearMaskOnLostFocus: false,
			greedy: true,
			autoUnmask: true,
		},
	},
];

export { selectOptions, modalSettings, groupFormValidators, groupModalValidators, timeMasksOptions };
