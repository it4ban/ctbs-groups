import { Modal } from '../modules/Modal.js';
import { Tabs } from '../modules/Tabs.js';

import { ListenerSelectForm } from './ListenerSelectForm.js';
import { ListenerCreateForm } from './ListenerCreateForm.js';

export class ListenerModal extends Modal {
	#button = null;
	#createFormInstance = null;
	#selectFormInstance = null;
	#tabsInstance = null;
	#companyId = null;

	constructor(selector) {
		super(selector);

		this.#companyId = null;

		this.#button = this.modal.closest('.accent-modal-overlay').previousElementSibling;
		this.#initEvents();
	}

	open() {
		this.#initForms();
		this.#initTabs();

		super.open();
	}

	#initForms() {
		this.#createFormInstance = new ListenerCreateForm('#create-listener-id-0', this);
		this.#selectFormInstance = new ListenerSelectForm('#select-listener-id-0', this);
	}

	#initTabs() {
		this.#tabsInstance = new Tabs('#listener-tabs-id-0');
	}

	#initEvents() {
		this.#button.addEventListener('click', () => {
			this.open();
		});
	}
}
