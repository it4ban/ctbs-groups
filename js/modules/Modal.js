import { Error } from './Error.js';

export class Modal {
	constructor(selector) {
		this.modal = document.querySelector(selector);
		if (!this.modal) {
			console.error('Modal is not defined!');
			return;
		}

		this.closeBtn = this.modal.querySelector('.accent-modal__close');

		this.onOpen = null;
		this.onClose = null;

		this.#initEvents();
	}

	open() {
		this.modal.classList.add('accent-modal--active');
		if (typeof this.onOpen === 'function') this.onOpen();
	}

	close() {
		this.modal.classList.remove('accent-modal--active');
		if (typeof this.onClose === 'function') this.onClose();
	}

	#initEvents() {
		this.closeBtn.addEventListener('click', () => this.close());
	}
}
