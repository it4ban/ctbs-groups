import { Modal } from '../modules/Modal.js';

import { passwordToggle } from '../utils/passwordToggle.js';
import { generatePassword } from '../utils/generatePassword.js';
import { generateEmail } from '../utils/generateEmail.js';

export class GroupModal extends Modal {
	constructor(selector, validators, errorInstance) {
		super(selector);

		this.errorInstance = errorInstance;
		this.validators = validators;

		this.saveButton = this.modal.querySelector('.accent-form__submit-modal');
		this.generateButton = this.modal.querySelector('.accent-form__generate-data');
		this.emailGeneratorButton = this.modal.querySelector('.email-generator__button');
		this.passwordGeneratorButton = this.modal.querySelector('.password-generator__button');

		this.#initEvents();
	}

	#initEvents() {
		passwordToggle(this.modal);

		this.saveButton.addEventListener('click', (e) => {
			this.handleSaveButton();
		});

		this.generateButton.addEventListener('click', () => this.handleGenerateData());
		this.emailGeneratorButton.addEventListener('click', () => generateEmail('#teacher-email'));
		this.passwordGeneratorButton.addEventListener('click', () => generatePassword('#teacher-password'));
	}

	handleGenerateData() {
		generateEmail('#teacher-email');
		generatePassword('#teacher-password');
	}

	handleSaveButton() {
		const formData = {};
		['full_name', 'email', 'password'].forEach((name) => {
			const input = this.modal.querySelector(`[name="${name}"]`);
			formData[name] = input ? input.value : '';
		});

		const isValid = this.errorInstance.validateFormData(formData, this.validators);
		if (isValid) {
			this.close();
		}
	}
}
