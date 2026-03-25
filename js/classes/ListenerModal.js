import { Modal } from '../modules/Modal.js';
import { Tabs } from '../modules/Tabs.js';

import { ListenerSelectForm } from './ListenerSelectForm.js';
import { ListenerCreateForm } from './ListenerCreateForm.js';

export class ListenerModal extends Modal {
	#buttons = null;
	#companyId = null;
	#createFormInstance = null;
	#selectFormInstance = null;
	#tabsInstance = null;

	constructor(selector) {
		super(selector);

		this.#companyId = null;

		this.#buttons = document.querySelectorAll('.add-listener');
		this.#initEvents();
	}

	#initForms(companyId) {
		this.#createFormInstance = new ListenerCreateForm('#create-listener', companyId);
		this.#selectFormInstance = new ListenerSelectForm('#select-listener', companyId);
	}

	#initTabs() {
		this.#tabsInstance = new Tabs('#listener-tabs');
	}

	#initEvents() {
		this.#buttons.forEach((button) => {
			button.addEventListener('click', () => {
				const companyId = button.dataset.id;
				this.#initForms(companyId);
				this.#initTabs();
				this.open();
			});
		});
	}
}
