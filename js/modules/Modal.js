import { Error } from './Error.js';

export class Modal {
	constructor(selector) {
		this.modal = document.querySelector(selector);
		if (!this.modal) {
			console.error('Modal is not defined!');
			return;
		}
		this.overlay = this.modal.closest('.accent-modal-overlay');

		this.closeBtn = this.modal.querySelector('.accent-modal__close');

		this.onOpen = null;
		this.onClose = null;

		this.#initEvents();
	}

	open() {
		this.overlay.classList.add('accent-modal-overlay--active');
		this.modal.classList.add('accent-modal--active');

		if (typeof this.onOpen === 'function') this.onOpen();
	}

	close() {
		this.overlay.classList.remove('accent-modal-overlay--active');
		this.modal.classList.remove('accent-modal--active');

		if (typeof this.onClose === 'function') this.onClose();
	}

	#initEvents() {
		this.closeBtn.addEventListener('click', () => this.close());

		this.overlay.addEventListener('click', (e) => {
			if (e.target === this.overlay) {
				this.close();
			}
		});
	}
}
