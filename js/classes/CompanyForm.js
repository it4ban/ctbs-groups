import { Form } from '../modules/Form.js';

import { companyFormValidators } from '../configs/company/index.js';

import { passwordToggle } from '../utils/passwordToggle.js';
import { generateEmail } from '../utils/generateEmail.js';
import { generatePassword } from '../utils/generatePassword.js';

export class CompanyForm extends Form {
	#emailField = null;
	#passwordField = null;

	constructor(selector) {
		super(selector);

		this.generateButton = this.form.querySelector('.create-company__generate-data');
		this.emailGeneratorButton = this.form.querySelector('.email-generator__button');
		this.passwordGeneratorButton = this.form.querySelector('.password-generator__button');

		console.log(this.form);

		this.#emailField = this.form.querySelector('.email-generator input');
		this.#passwordField = this.form.querySelector('.password-generator input');

		this.#initEvents();
	}

	handleGenerateData(e) {
		e.preventDefault();
		e.stopPropagation();

		generateEmail(this.#emailField);
		generatePassword(this.#passwordField);
	}

	#initEvents() {
		passwordToggle(this.form);

		this.generateButton.addEventListener('click', (e) => this.handleGenerateData(e));
		this.emailGeneratorButton.addEventListener('click', () => generateEmail(this.#emailField));
		this.passwordGeneratorButton.addEventListener('click', () => generatePassword(this.#passwordField));
	}

	getValidateRules() {
		return companyFormValidators;
	}
}
