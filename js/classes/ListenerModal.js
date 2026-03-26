import { Modal } from '../modules/Modal.js';
import { Tabs } from '../modules/Tabs.js';

import { ListenerSelectForm } from './ListenerSelectForm.js';
import { ListenerCreateForm } from './ListenerCreateForm.js';

export class ListenerModal extends Modal {
	#buttons = null;
	#createFormInstance = null;
	#selectFormInstance = null;
	#tabsInstance = null;
	#companyId = null;

	constructor(selector) {
		super(selector);

		this.#companyId = null;

		this.#buttons = document.querySelectorAll('.add-listener');
		this.#initEvents();
	}

	open() {
		this.#initForms();
		this.#initTabs();

		super.open();
	}

	#initForms() {
		this.#createFormInstance = new ListenerCreateForm('#create-listener', this);
		this.#selectFormInstance = new ListenerSelectForm('#select-listener', this);
	}

	getCompanyId() {
		return this.#companyId;
	}

	#initTabs() {
		this.#tabsInstance = new Tabs('#listener-tabs');
	}

	#initEvents() {
		this.#buttons.forEach((button) => {
			button.addEventListener('click', () => {
				this.#companyId = button.dataset.id;
				this.open();
			});
		});
	}
}
