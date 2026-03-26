import { Error } from './Error.js';
import { Select } from './Select.js';

export class Form {
	constructor(formSelector) {
		this.form = document.querySelector(formSelector);
		this.errorContainer = document.querySelector('.error-messages');
		this.errorInstance = new Error();

		this.#init();
	}

	submit(e, action) {
		e.preventDefault();
		e.stopPropagation();

		const rules = this.getValidateRules();
		const isValid = this.validateData(rules);

		if (isValid) {
			this.errorInstance.renderErrors(this.form, this.errorContainer);
			console.log('ok');
		} else {
			console.log(this.errorInstance.getErrors());
			this.errorInstance.renderErrors(this.form, this.errorContainer);
		}
	}

	#init() {
		this.form.addEventListener('submit', (e) => this.submit(e));
	}

	validateData(rules = {}) {
		const formData = {};
		const inputs = this.form.querySelectorAll('input, select, textarea');

		inputs.forEach((input) => {
			formData[input.name] = this.#getInputValue(input);
		});

		this.errorInstance.clearErrors();
		const errors = validate(formData, rules);

		if (errors) {
			Object.entries(errors).forEach(([field, messages]) => {
				messages.forEach((msg) => this.errorInstance.addError(field, msg));
			});
			return false;
		}

		return true;
	}

	#getInputValue(input) {
		if (input.inputmask) {
			const raw = input.inputmask.unmaskedvalue();

			if (!raw || raw.length < 14) {
				return '';
			}

			return input.value;
		}

		if (Select.existSelector(input)) {
			const selectorInstance = Select.getInstance(input);
			return selectorInstance.getValue();
		}

		return input.value;
	}

	validateDataAsync(rules = {}) {
		return new Promise((resolve) => {
			const isValid = this.validateData(rules); // уже существующий метод
			resolve(isValid);
		});
	}

	getValidateRules() {
		return {};
	}
}
