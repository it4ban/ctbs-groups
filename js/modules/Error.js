export class Error {
	errors = [];

	/**
	 * Получить все ошибки
	 * @returns {Array}
	 */
	getErrors() {
		return this.errors;
	}

	/**
	 * Получить ошибки по полю
	 * @param {string} field
	 * @returns {Array}
	 */
	getErrorByField(field) {
		return this.errors.filter((error) => error.field === field);
	}

	/**
	 * Очистить ошибки
	 * @param {string|null} field - поле для очистки, если null — очищает все
	 */
	clearErrors(field = null) {
		if (field) {
			this.errors.filter((error) => error.field !== field);
		} else {
			this.errors = [];
		}
	}

	/**
	 * Проверяет, есть ли ошибки
	 * @returns {boolean}
	 */
	hasError() {
		return this.errors.length > 0;
	}

	/**
	 * Добавить ошибку
	 * @param {string} field - поле формы
	 * @param {string} message - текст ошибки
	 */
	addError(field, message) {
		this.errors.push({ field, message });
	}

	/**
	 * Отобразить ошибки в DOM
	 * @param {HTMLElement} form
	 * @param {HTMLElement} errorContainer
	 */
	renderErrors(form, errorContainer) {
		form.querySelectorAll('.error-field').forEach((field) => field.classList.remove('error-field'));
		errorContainer.innerHTML = '';

		this.errors.forEach((err, index) => {
			const input = form.querySelector(`[name="${err.field}"]`);
			if (input) {
				if (input.classList.contains('choices__input')) {
					const choicesWrapper = input.closest('.choices');
					const inner = choicesWrapper?.querySelector('.choices__inner');

					if (inner) {
						inner.classList.add('error-field');
					}
				} else {
					input.classList.add('error-field');
				}
			}

			const error = document.createElement('div');
			error.classList.add('error-message');
			error.innerHTML = `
                <span>${err.message}</span>
                <button class="error-close">&times;</button>
            `;
			setTimeout(() => {
				error.classList.add('error-message--show');
			}, index * 100);

			error.addEventListener('click', () => {
				this.removeErrorElement(error);
			});

			setTimeout(() => {
				this.removeErrorElement(error);
			}, 120000);

			errorContainer.appendChild(error);
		});
	}

	/**
	 * Плавное удаление ошибки
	 * @param {HTMLElement} el
	 */
	removeErrorElement(el) {
		el.classList.remove('error-message--show');
		el.classList.add('error-message--hidden');

		setTimeout(() => {
			el.remove();
		}, 300);
	}

	/**
	 * Проверка данных и обновление ошибок
	 * @param {Object} formData
	 * @param {Object} rules
	 * @returns {boolean} - true если ошибок нет
	 */
	validateFormData(formData, rules) {
		this.clearErrors();
		const errors = validate(formData, rules);

		if (errors) {
			Object.entries(errors).forEach(([field, messages]) => {
				messages.forEach((msg) => this.addError(field, msg));
			});
			return false;
		}
		return true;
	}
}
