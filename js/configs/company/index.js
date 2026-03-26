import { skipIfEmpty } from '../../utils/skipIfEmpty.js';

const companyFormValidators = {
	companyName: {
		presence: { allowEmpty: false, message: '^Название компании не может быть пустым' },
		length: { minimum: 3, message: '^Название компании должно быть минимум 3 символа' },
	},
	// inn: {
	// 	innFormat: skipIfEmpty((value) => {
	// 		if (!/^\d{10}$|^\d{12}$/.test(value)) {
	// 			return '^ИНН должен содержать 10 или 12 цифр';
	// 		}
	// 	}),
	// },
	email: {
		presence: { allowEmpty: false, message: 'не может быть пустым' },
		email: { message: '^Неверный формат email' },
	},
	password: {
		presence: { allowEmpty: false, message: '^Пароль не может быть пустым' },
		length: { minimum: 6, message: '^Пароль должно быть минимум 6 символов' },
	},
};

// validate.validators.innFormat = (value, options, key, attributes) => {
// 	return companyFormValidators.inn.innFormat(value, options, key, attributes);
// };

export { companyFormValidators };
