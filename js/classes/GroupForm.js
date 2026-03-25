import { Form } from '../modules/Form.js';
import { GroupModal } from './GroupModal.js';
import { Select } from '../modules/Select.js';

export class GroupForm extends Form {
	#selectInstances = new Map();
	#modalInstances = new Map();
	#timeMasksInstances = new Map();

	constructor(
		selectorElement,
		groupFormValidators = {},
		groupModalValidators = {},
		modalSettings = null,
		selectOptions = {},
		timeMasksOptions = null,
	) {
		super(selectorElement);

		this.groupFormValidators = groupFormValidators;
		this.groupModalValidators = groupModalValidators;

		if (selectOptions.length > 0) {
			this.#initSelect(selectOptions);
		}
		if (timeMasksOptions.length > 0) {
			this.#initTimeMasks(timeMasksOptions);
		}
		if (modalSettings.length > 0) {
			this.#initModals(modalSettings);
		}

		this.#initEvents();
	}

	#initSelect(selects) {
		selects.forEach((select) => {
			const { element, options } = select;

			const el = this.form.querySelector(element);
			if (!el) return;

			const instance = new Select(el, options);

			this.#selectInstances.set(element, instance);
		});
	}

	#initTimeMasks(timeMasks) {
		timeMasks.forEach(({ element, mask, options = {} }) => {
			const inputs = this.form.querySelectorAll(element);
			if (!inputs.length) return;

			inputs.forEach((input) => {
				const im = new Inputmask(mask, {
					...options,
				});

				im.mask(input);

				if (!input.value) {
					input.placeholder = im.opts.placeholder || 'дд.мм.гггг чч:мм:сс';
				}

				this.#timeMasksInstances.set(input, im);
			});
		});
	}

	#initModals(modalSettings) {
		modalSettings.forEach(({ button, modal }) => {
			const buttonEl = document.querySelector(button);
			const modalEl = document.querySelector(modal);

			if (!buttonEl || !modalEl) return;

			const modalInstance = new GroupModal(modal, this.groupModalValidators, this.errorInstance);

			this.#modalInstances.set(modal, modalInstance);

			buttonEl.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				modalInstance.open();
			});
		});
	}

	getValidateRules() {
		return this.groupFormValidators;
	}

	#initEvents() {}
}
