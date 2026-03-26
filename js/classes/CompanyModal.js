import { Modal } from '../modules/Modal.js';
import { CompanyForm } from './CompanyForm.js';

export class CompanyModal extends Modal {
	#companyFormInstance = null;
	#button = null;

	constructor(selector) {
		super(selector);

		this.#button = document.querySelector('.add-company');

		this.#initEvents();
	}

	#initForms() {
		this.#companyFormInstance = new CompanyForm('#add-company-form');
	}

	#initEvents() {
		this.#initForms();

		this.#button.addEventListener('click', () => this.open());
	}
}
